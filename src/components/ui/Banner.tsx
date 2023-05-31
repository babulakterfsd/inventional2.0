import Styles from '../../styles/banner.module.css';
const Banner = () => {
  return (
    <section className="bg-[#0c0a0c]">
      <div className={`${Styles.bannerbg} container h-screen`}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 mx-auto">
            {/* Banner text contents */}
            <div className="h-screen flex flex-col justify-center items-start">
              <button className="cursor-auto bg-[#201d2a] text-center py-1.5 px-8 rounded-full lg:ml-16">
                <span
                  className="gradientText"
                  style={{
                    fontFamily: 'adieuregular',
                  }}
                >
                  ENTER INTO THE FUTURE
                </span>
              </button>
              <h1
                className="text-5xl font-[400] my-8 lg:ml-16"
                style={{ fontFamily: 'adieuregular' }}
              >
                What is <span className="gradientText">Inventional</span>
              </h1>
              <p
                style={{
                  fontFamily: 'Inter',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '-3%',
                }}
                className="font-semibold text-xl lg:ml-16"
              >
                The future is now. Are you ready?
              </p>
              {/* Banner input  */}
              <div className="mt-28">
                <form className="relative">
                  <input
                    type="email"
                    className="md:w-[630px] h-14 pl-10 lg:ml-16 text-sm border rounded-full bg-[#161a25] border-none focus:outline-none"
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
