import Image from 'next/image';
import bekatir from '../../../public/assets/images/bekatir.png';
import sundown from '../../../public/assets/images/sundown.png';
import sunup from '../../../public/assets/images/sunup.png';

const Contact = () => {
  return (
    <div className="container relative">
      <div className="bg-[#040404] py-14"></div>
      <div className="bg-[#060d18] py-6 flex flex-col gap-y-20 justify-center items-center">
        <div className="bg-[#171b29] rounded-xl p-4 -mt-14 w-10/12">
          <div className="gradientBackground px-6 py-6 rounded-xl flex justify-evenly items-center">
            <h2
              className="text-2xl px-4"
              style={{
                fontFamily: 'adieuregular',
                letterSpacing: '-0.03rem',
              }}
            >
              Contact us now & start exploring the <br /> endless possibilities
            </h2>
            <Image
              src={bekatir}
              alt="bekatir"
              height={114}
              width={240}
              className="mr-auto"
            />
            <div className="flex flex-col justify-center items-center">
              <Image
                src={sunup}
                alt="bekatir"
                height={24}
                width={70}
                className=""
              />
              <button className="border border-spacing-1 border-white w-52 px-2 py-2 rounded-full my-2">
                GET STARTED
              </button>
              <Image
                src={sundown}
                alt="bekatir"
                height={24}
                width={70}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="textContent">
          <h2
            className="text-5xl mb-14 text-center"
            style={{
              fontFamily: 'adieuregular',
              letterSpacing: '-0.03rem',
              lineHeight: '1.2',
            }}
          >
            Let's Build something with <br />
            <span className="gradientText">INVENTIONAL OPEN AI</span>
          </h2>
        </div>
      </div>
      <div className="bg-[#040404] pt-24 absolute rounded-bl-[100px] w-full"></div>
    </div>
  );
};

export default Contact;
