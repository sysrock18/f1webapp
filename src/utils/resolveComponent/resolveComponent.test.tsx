import { render } from "@testing-library/react";
import { resolveComponent } from ".";

describe('resolveComponent', () => {
  it('should resolve an async component', async () => {
    const Component = (props: { id: string }) => <div>MockComponent {props.id}</div>;
    const AsyncComponent = async (props: { id: string }) => Component(props);

    const ResolvedComponent = await resolveComponent(AsyncComponent, { id: 'mock-id' });
    const { container } = render(<ResolvedComponent />)
    expect(container).toHaveTextContent('MockComponent mock-id');
  });
});