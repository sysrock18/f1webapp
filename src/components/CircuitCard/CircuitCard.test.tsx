import { render } from '@testing-library/react';
import { CircuitCard } from './CircuitCard';
import { MOCK_RACE } from './mock';

describe('CircuitCard', () => {
  it('renders', () => {
    const { queryByTestId } = render(<CircuitCard race={MOCK_RACE} />);

    expect(queryByTestId('circuit-card')).toBeInTheDocument();
  });
});
