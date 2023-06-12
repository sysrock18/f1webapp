import Home from "./page";
import { render } from '@testing-library/react';
import { resolveComponent } from "@/utils/resolveComponent";

describe('Home', () => {
  it('renders', async () => {
    const HomeResolved = await resolveComponent(Home, {});
    const { queryByTestId, container } = render(<HomeResolved />);
    expect(queryByTestId('home-page')).toBeInTheDocument();
  });
});
