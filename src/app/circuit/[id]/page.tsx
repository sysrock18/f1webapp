export default function CircuitDescription({ params }: { params: { id: string } }) {
  return (
    <main className="container m-auto min-h-screen py-16" data-testid="circuit-page">
      <h1>Circuit {params.id}</h1>
    </main>
  );
}
