export async function resolveComponent(Component: (props: any) => Promise<JSX.Element>, props: any) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}
