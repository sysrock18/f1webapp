import { render } from '@testing-library/react';
import { CircuitsGrid } from './CircuitsGrid';
import { resolveComponent } from '@/utils/resolveComponent';
import { api } from '@/services/api';
import { MOCK_RACES } from './mock';

describe('CircuitsGrid', () => {
  beforeEach(() => {
    jest.spyOn(api, 'getSeasonRaces').mockReturnValue(Promise.resolve(MOCK_RACES));
  });

  it('renders', async () => {
    const CircuitsGridResolved = await resolveComponent(CircuitsGrid, {});
    const { queryByTestId } = render(<CircuitsGridResolved />);

    expect(queryByTestId('circuits-grid')).toBeInTheDocument();
  });

  it('renders the correct number of race circuit cards', async () => {
    const CircuitsGridResolved = await resolveComponent(CircuitsGrid, {});
    const { queryAllByTestId } = render(<CircuitsGridResolved />);

    expect(queryAllByTestId('circuit-card')).toHaveLength(3);
  });
});
