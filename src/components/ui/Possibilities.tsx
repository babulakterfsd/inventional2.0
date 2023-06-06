import Image from 'next/image';
import RingPhoto from '../../../public/assets/images/orbit.png';

const Possibilities = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-12 bg-[rgba(0,12,0,.1) rgba(25, 12, 1, .5)] pt-12 pb-8">
        <div className="col-span-12 px-0.5 md:px-0 md:col-start-3 md:col-span-8">
          <div
            className="content gradientBackground rounded-xl py-8 px-2 md:py-8 md:px-10 relative md:top-12 text-center md:text-left"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <Image
              src={RingPhoto}
              alt="ring"
              className="hidden lg:block absolute -mt-20 ml-80"
              height={500}
              width={480}
            />
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <h2
                  className="font-semibold text-xl md:text-3xl hidden md:block"
                  style={{
                    fontFamily: 'adieuregular',
                    letterSpacing: '.03em',
                  }}
                >
                  The possibilities are beyond your imagination.
                </h2>
                <h2
                  className="font-semibold text-xl mb-1.5 md:mb-0 md:text-3xl block md:hidden"
                  style={{
                    fontFamily: 'adieuregular',
                    letterSpacing: '.03rem',
                  }}
                >
                  The possibilities are beyond your imagination.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida a pretium id
                  id lacus tellus mauris quis scelerisque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
