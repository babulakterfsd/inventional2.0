import Image from 'next/image';
import videoImg from '../../../public/assets/images/video.png';
import Styles from '../../styles/voice.module.css';

const Voice = () => {
  return (
    <div className="container">
      <div className="bg-[#060606]">
        <div className={`${Styles.voicebg} content pt-96 pb-80`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
            <h2
              className="text-center text-6xl"
              style={{ fontFamily: 'adieuregular', letterSpacing: '-3%' }}
            >
              Feel the power of <br />{' '}
              <span className="gradientText font-bold">inventional AI</span>
            </h2>
            <Image
              src={videoImg}
              alt="video"
              height={500}
              width={500}
              className="lg:ml-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
