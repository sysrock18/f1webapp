import { Circuit, RawCircuit } from './types';
import isArray from 'lodash/isArray';

export class CircuitAdapter {
  static adaptCircuitList(rawCircuitList: RawCircuit[]): Circuit[] {
    const circuitList: Circuit[] = [];

    if (isArray(rawCircuitList)) {
      rawCircuitList.forEach(rawDashboardItem => {
        circuitList.push(CircuitAdapter.adaptCircuitItem(rawDashboardItem));
      });
    }

    return circuitList;
  }

  static adaptCircuitItem(rawCircuitItem: RawCircuit): Circuit {
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
