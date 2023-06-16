import Home from './page';
import { render } from '@testing-library/react';

jest.mock('./containers/CircuitsGrid', () => ({
  CircuitsGrid: () => {
    return <div>CircuitsGrid</div>;
  },
}));

describe('Home', () => {
  it('renders', async () => {
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId('home-page')).toBeInTheDocument();
  });
});
