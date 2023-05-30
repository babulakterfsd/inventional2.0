import Image from 'next/image';
import RingPhoto from '../../../public/assets/images/orbit.png';

const Possibilities = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 bg-[#051220] py-24">
        <div className="md:col-span-2"></div>
        <div className="col-span-12 px-2 md:px-0 md:col-span-8">
          <div className="content gradientBackground rounded-xl py-8 px-10 relative">
            <Image
              src={RingPhoto}
              alt="ring"
              className="hidden md:block absolute -mt-20 ml-72"
              height={500}
              width={500}
            />
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <h2
                  className="font-semibold text-3xl "
                  style={{ fontFamily: 'adieuregular', letterSpacing: '-3%' }}
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
        <div className="md:col-span-2"></div>
      </div>
    </div>
  );
};

export default Possibilities;
