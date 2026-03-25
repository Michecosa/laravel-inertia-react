import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="navbar bg-base-100 shadow-md px-4 md:px-8">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tighter">
            MioProgetto
          </Link>
        </div>
        
        <nav className="flex-none">
          <ul className="menu menu-horizontal p-0 gap-2">
            <li>
              <Link href="/" className="rounded-lg">Home</Link>
            </li>
            <li>
              <Link href="/create" className="btn btn-primary btn-sm text-white">
                + Nuovo Post
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-base-100 rounded-box shadow-sm p-8">
          {children}
        </div>
      </main>
    </div>
  );
}