'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import emitter from './eventEmitter';

export default function ReservationButton() {
  useEffect(() => {
    const onFooterVisible = () => {
      console.log('Footer is visible! Triggering animation...');
      // アニメーションや処理をここで実行
    };

    emitter.on('footerVisible', onFooterVisible);

    return () => {
      emitter.off('footerVisible', onFooterVisible);
    };
  }, []);

  return (
    <section className="relative min-h-[35vh] sm:min-h-[50vh] md:min-h-[45vh] lg:min-h-[110vh] xl:min-h-[140vh] 2xl:min-h-[140vh] flex bg-slate-900">
      <div>
        <div className={`slideinLeft absolute top-0 left-0`}>
          <Image
            src="/hotel_wine.jpg"
            alt="Hotel Wine Left"
            width={800}
            height={200}
            style={{ width: '55vw', height: 'auto' }}
          />
        </div>
        <div
          className="text02 py-10 font-serif font-bold text-right px-30 text-white"
          style={{ fontSize: 'clamp(0.1rem, 2vw, 4rem)' }}
        >
          <h1>MAIN TEXT</h1>
          <p style={{ fontSize: 'clamp(0.1rem, 2vw, 4rem)' }}>
            Enter the sample text here. <br></br>I hope you can make something
            really good.
          </p>
        </div>
      </div>
      <div>
        <div
          className={`slideinRight 
           absolute bottom-0 right-0`}
        >
          <Image
            src="/hotel_meal.jpg"
            alt="Hotel Wine Right"
            width={800}
            height={200}
            style={{ width: '55vw', height: 'auto' }}
          />
        </div>
        <div
          className="text font-serif font-bold text-white"
          style={{ fontSize: 'clamp(0.1rem, 2vw, 4rem)' }}
        >
          <h1>SUB TEXT</h1>
          <p style={{ fontSize: 'clamp(0.1rem, 2vw, 4rem)' }}>
            Enter the sample text here. <br></br>I hope you can make something
            really good.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center"></div>
    </section>
  );
}
