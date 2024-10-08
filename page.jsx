import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

