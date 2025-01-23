import Link from 'next/link';

export default function ReservationButton() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <Link
          href="/reservation"
          className="inline-block bg-slate-900 text-white font-bold py-2 px-8 rounded-md text-xl hover:bg-slate-800 transition duration-300"
        >
          Make a Reservation
        </Link>
      </div>
    </section>
  );
}
