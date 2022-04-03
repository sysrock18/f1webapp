import { Circuit } from '../../models/Circuit';
import { isArray } from 'lodash';

class CircuitAdapter {

  static adaptCircuitList(rawCircuitList: any): Circuit[] {
    const circuitList: Circuit[] = [];

    if (isArray(rawCircuitList)) {
      rawCircuitList.forEach(rawDashboardItem => {
        circuitList.push(CircuitAdapter.adaptCircuitItem(rawDashboardItem));
      });
    }

    return circuitList;
  }

  static adaptCircuitItem(rawCircuitItem: any): Circuit {
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

export default CircuitAdapter;
