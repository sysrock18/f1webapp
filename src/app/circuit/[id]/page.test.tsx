import { render } from '@testing-library/react';
import CircuitDescription from './page';

describe('CircuitDescription', () => {
  it('renders', async () => {
    const { queryByTestId } = render(<CircuitDescription params={{ id: 'mock-id' }} />);
    expect(queryByTestId('circuit-page')).toBeInTheDocument();
  });
});
