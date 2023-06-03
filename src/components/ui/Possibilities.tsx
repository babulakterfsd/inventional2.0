import Image from 'next/image';
import RingPhoto from '../../../public/assets/images/orbit.png';

const Possibilities = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-12 bg-[rgba(0,12,0,.1) rgba(25, 12, 1, .5)] pt-12 pb-8">
        <div className="col-span-12 px-2 md:px-0 md:col-start-3 md:col-span-8">
          <div className="content gradientBackground rounded-xl py-8 px-10 relative top-8">
            <Image
              src={RingPhoto}
              alt="ring"
              className="hidden md:block absolute -mt-20 ml-80"
              height={500}
              width={480}
            />
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <h2
                  className="font-semibold text-3xl "
                  style={{ fontFamily: 'adieuregular', letterSpacing: '.03em' }}
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
