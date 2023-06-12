import { Circuit, RawCircuitLocation } from './types';
import isArray from 'lodash/isArray';

export class CircuitAdapter {
  static adaptCircuitList(rawCircuitList: RawCircuitLocation[]): Circuit[] {
    const circuitList: Circuit[] = [];

    if (isArray(rawCircuitList)) {
      rawCircuitList.forEach(rawDashboardItem => {
        circuitList.push(CircuitAdapter.adaptCircuitItem(rawDashboardItem));
      });
    }

    return circuitList;
  }

  static adaptCircuitItem(rawCircuitItem: RawCircuitLocation): Circuit {
    const {
      circuitId,
      circuitName,
      url
    } = rawCircuitItem || {};

    return {
      id: circuitId,
      name: circuitName,
      imageUrl: '',
      url: url
    };
  }
}
