import Styles from '../../styles/voice.module.css';

const Voice = () => {
  return (
    <div className="container">
      <div className="bg-[#131f31] lg:bg-[#060606]">
        <div
          className={`${Styles.voicebg} content pt-20 md:pt-32 md:pb-12 xl:pt-96 xl:pb-72`}
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-between items-center">
            <h2
              className="text-center text-3xl lg:text-6xl px-2 md:px-0"
              style={{ fontFamily: 'adieuregular', letterSpacing: '-3%' }}
            >
              Feel the power of <br />{' '}
              <span className="gradientText font-bold">inventional AI</span>
            </h2>
            <div className="lg:ml-20">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/833090901?h=927d1290cd"
                width="560"
                height="315"
                allow="autoplay; fullscreen; picture-in-picture"
                className={`${Styles.iframeMargin} rounded-2xl rounded-bl-xl h-80 w-full px-3 md:px-0 lg:w-[560px] -mt-10 md:-mt-0`}
                style={{ borderRadius: '2rem' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
