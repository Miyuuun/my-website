import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-1 py-2">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              src="/hotel_logo.png"
              alt="Hotel Logo"
              width={150}
              height={50}
              className="w-auto h-auto" // 画像サイズ調整
              style={{ width: '80px', height: 'auto' }}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-base sm:text-base">
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
