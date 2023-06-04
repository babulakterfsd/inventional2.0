import Styles from '../../styles/voice.module.css';

const Voice = () => {
  return (
    <div className="container">
      <div className="bg-[#060606]">
        <div className={`${Styles.voicebg} content pt-96 pb-72`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
            <h2
              className="text-center text-xl lg:text-6xl"
              style={{ fontFamily: 'adieuregular', letterSpacing: '-3%' }}
            >
              Feel the power of <br />{' '}
              <span className="gradientText font-bold">inventional AI</span>
            </h2>
            <div className="lg:ml-20">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lf9mE5kEUCs?controls=0&showinfo=0&rel=0&autoplay=1"
                allow="autoplay"
                className="rounded-2xl rounded-bl-xl h-80 w-full lg:w-[560px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
