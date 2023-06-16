import { CircuitsGrid } from './containers/CircuitsGrid';

export default function Home() {
  return (
    <main className="container m-auto min-h-screen py-16" data-testid="home-page" id="home-page">
      <div>
        <CircuitsGrid />
      </div>
    </main>
  );
}
