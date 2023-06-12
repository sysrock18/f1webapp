import { render } from '@testing-library/react';
import About from './page';

describe('About', () => {
  it('renders', async () => {
    const { queryByTestId } = render(<About />);
    expect(queryByTestId('about-page')).toBeInTheDocument();
  });
});
