export default function CircuitDescription({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen py-16 container m-auto" data-testid="circuit-page">
      <h1>Circuit {params.id}</h1>
    </main>
  );
}
