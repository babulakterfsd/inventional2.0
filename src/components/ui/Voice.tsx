import Styles from '../../styles/voice.module.css';

const Voice = () => {
  return (
    <div className="container">
      <div className="bg-[#060d18] lg:bg-[#060606]">
        <div className={`${Styles.voicebg} content pt-28 lg:pt-96 lg:pb-72`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
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
                className="rounded-2xl rounded-bl-xl h-80 w-full px-3 md:px-0 lg:w-[560px] -mt-14 md:-mt-0"
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
