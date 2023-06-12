import api from '@/services/api';
import Link from 'next/link';

export default async function Home() {
  const circuits = await api.getCircuits();

  return (
    <main className="min-h-screen py-16 container m-auto">
      <h1>F1 FanTrack</h1>
      <div>
        {circuits.map(circuit => (
          <div key={circuit.id}>
            <h2>
              <Link href={`circuit/${circuit.id}`}>{circuit.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </main>
  )
}
