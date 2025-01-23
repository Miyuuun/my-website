import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/hotel_logo.png"
              alt="Hotel Logo"
              width={150}
              height={50}
              className="w-auto h-4"
              style={{ width: '130px', height: '100px' }}
            />
          </Link>
          <p className="text-white">The Hotel</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="text-white hover:text-yellow-300">
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/amenities"
                className="text-white hover:text-yellow-300"
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
