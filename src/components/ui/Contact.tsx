import Image from 'next/image';
import bekatir from '../../../public/assets/images/bekatir.png';
import sundown from '../../../public/assets/images/sundown.png';
import sunup from '../../../public/assets/images/sunup.png';
import MobileInputBox from '../shared/MobileInputBox';

const Contact = () => {
  return (
    <div className="container relative">
      <div className="hidden md:block bg-[#040404] py-8 md:py-14"></div>
      <div className=" bg-[#040404] md:bg-[#060d18] pt-12 md:pt-0 md:py-6 flex flex-col md:gap-y-20 justify-center items-center mt-12 md:mt-0 px-4 md:px-0">
        <div
          className="bg-[#171b29] rounded-xl md:p-4 -mt-14 md:w-10/12"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="gradientBackground px-1 md:px-6 py-6 rounded-xl flex flex-col md:flex-row justify-evenly items-center">
            <h2
              className="text-2xl md:px-4 text-center"
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
              className="mr-auto hidden md:block"
            />
            <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
              <Image
                src={sunup}
                alt="bekatir"
                height={24}
                width={70}
                className=""
              />
              <button className="border border-spacing-1 border-white w-36 md:w-52 px-2 py-2 rounded-full md:my-2">
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
        <div className="textContent my-8 md:my-0">
          <h2
            className="text-xl md:text-5xl md:mb-14 text-center"
            style={{
              fontFamily: 'adieuregular',
              letterSpacing: '-0.03rem',
              lineHeight: '1.2',
            }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Let's Build something with <br />
            <span className="gradientText">INVENTIONAL OPEN AI</span>
          </h2>
          {/* input box */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <MobileInputBox />
          </div>
        </div>
      </div>
      <div className="bg-[#040404] pt-8 md:pt-24 absolute rounded-bl-[100px] w-full"></div>
    </div>
  );
};

export default Contact;
