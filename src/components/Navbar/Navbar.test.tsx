import { render } from '@testing-library/react';
import { Navbar } from '.';

describe('Navbar', () => {
  it('renders', async () => {
    const { queryByTestId } = render(<Navbar />);
    expect(queryByTestId('navbar')).toBeInTheDocument();
  });
});
