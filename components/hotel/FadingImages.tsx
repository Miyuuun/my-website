'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/morning.jpg',
    alt: 'Morning View',
    description:
      'Start your day with a beautiful sunrise and a delightful breakfast.',
  },
  {
    src: '/lunch.jpg',
    alt: 'Lunch Time',
    description: 'Enjoy a luxurious lunch with a scenic view.',
  },
  {
    src: '/afternoon_tea.jpg',
    alt: 'Afternoon Tea',
    description: 'Relax with our special afternoon tea selection.',
  },
  {
    src: '/dinner.jpg',
    alt: 'Dinner Delight',
    description: 'Indulge in a gourmet dinner experience.',
  },
  {
    src: '/bar.jpg',
    alt: 'Evening Bar',
    description: 'Unwind at our bar with signature cocktails.',
  },
];

export default function FadingImages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-96 ">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 説明文: 左下 */}
              <div className="w-1/2 pl-8">
                <div className="bg-black bg-opacity-50 text-white p-4 rounded">
                  <h2 className="text-xl font-bold mb-2">{slide.alt}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>

              {/* 画像: 右寄せ */}
              <div className="w-1/2 flex justify-end pr-8">
                <Image
                  src={slide.src || '/placeholder.svg'}
                  alt={slide.alt}
                  width={600} // 画像の実際の解像度に合わせる
                  height={100} // 画像の実際の解像度に合わせる
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
