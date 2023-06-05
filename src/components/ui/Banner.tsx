import Styles from '../../styles/banner.module.css';
import MobileInputBox from '../shared/MobileInputBox';

const Banner = () => {
  return (
    <section className="bg-[#0c0a0c]">
      <div className={`${Styles.bannerbg} container h-screen md:pl-12`}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 mx-auto">
            {/* Banner text contents */}
            <div className="h-screen flex flex-col justify-start md:justify-center items-center md:items-start relative">
              <button className="cursor-auto bg-black md:bg-[#201d2a] text-center my-4 md:my-0 py-1 md:py-1.5 px-4 md:px-8 rounded-full ">
                <span
                  className="gradientText text-xs md:text-base"
                  style={{
                    fontFamily: 'adieuregular',
                  }}
                >
                  ENTER INTO THE FUTURE
                </span>
              </button>
              {/* desktops title */}
              <h1
                className="text-5xl font-[400] my-8 hidden md:block"
                style={{ fontFamily: 'adieuregular' }}
              >
                What is <span className="gradientText">Inventional</span>
              </h1>
              {/* mobiles title */}
              <h1
                className="text-4xl font-[600] px-1 block mt-6 md:hidden order-first"
                style={{ fontFamily: 'adieuregular' }}
              >
                <span className="gradientText">Inventional</span>
              </h1>
              {/* desktop banner description */}
              <p
                style={{
                  fontFamily: 'Inter',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '-3%',
                }}
                className="font-semibold text-xl hidden md:block"
              >
                Expand your digital presence AI that mimics <br /> your unique
                style.
              </p>
              {/* mobile banner description */}
              <p
                style={{
                  fontFamily: 'adieuregular',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  textAlign: 'center',
                  padding: '0px 8px',
                  fontWeight: 500,
                  textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
                  marginTop: '12rem',
                }}
                className="font-semibold text-xl block md:hidden"
              >
                Expand your digital presence <br /> AI that mimics your unique
                style.
              </p>

              {/* Banner input  */}
              <div className="block md:hidden">
                <MobileInputBox />
              </div>
              <div className="hidden md:block mt-28">
                <form className="relative">
                  <input
                    type="email"
                    className="md:w-[630px] h-14 pl-10  text-sm border rounded-full bg-[#161a25] border-none focus:outline-none"
                    placeholder="ex: youremail@gmail.com"
                    required
                  />
                  <button
                    type="submit"
                    className={`gradientBackground absolute -ml-28 py-2.5 mt-2 px-3 rounded-t-full rounded-br-full text-white font-bold text-sm`}
                  >
                    Join Waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
