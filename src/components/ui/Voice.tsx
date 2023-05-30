import Styles from '../../styles/voice.module.css';

const Voice = () => {
  return (
    <div className="container">
      <div className="bg-[#060606]">
        <div className={`${Styles.voicebg} content py-96`}>
          <h2
            className="text-center text-5xl"
            style={{ fontFamily: 'adieuregular', letterSpacing: '-3%' }}
          >
            Feel the power of <br /> inventional AI
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Voice;
