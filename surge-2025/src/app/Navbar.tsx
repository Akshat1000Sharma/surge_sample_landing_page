import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-10">
    <div className="text-2xl font-bold">
      <span className="text-red-500">SURGE</span>
    </div>
    <div className="space-x-4">
      <Link href="/" className="hover:text-yellow-500">Home</Link>
      <Link href="/events" className="hover:text-yellow-500">Events</Link>
      <Link href="/sponsors" className="hover:text-yellow-500">Sponsors</Link>
      <Link href="/rules" className="hover:text-yellow-500">Rules</Link>
      <Link href="/brochure" className="hover:text-yellow-500">Brochure</Link>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Login</button>
    </div>
  </nav>
);

export default Navbar;