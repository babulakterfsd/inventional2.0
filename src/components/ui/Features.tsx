import Image from 'next/image';
import Img24 from '../../../public/assets/images/24.png';
import calendar from '../../../public/assets/images/calendar.png';
import message from '../../../public/assets/images/chat.png';
import gift from '../../../public/assets/images/giftbox.png';
import giftbox from '../../../public/assets/images/handbag.png';
import peoplegrp from '../../../public/assets/images/peoplegrp.png';
import prize from '../../../public/assets/images/prize.png';
import voicepic from '../../../public/assets/images/voice.png';
import wtsapp from '../../../public/assets/images/wtsapp.png';

const Features = () => {
  return (
    <div className="container">
      <div className="bg-[#060606] pt-10 pb-16">
        <h2
          className="text-5xl font-[400] pt-12 mb-20 text-center"
          style={{ fontFamily: 'adieuregular' }}
        >
          Features of our <span className="gradientText">AI chatbot</span>
        </h2>
        <div className="lg:px-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-14 items-center">
            {/* 1 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={Img24} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                24/7 engagement with your fans
              </h4>
            </div>
            {/* 2 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={giftbox} alt="feature2" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Built-in store to sell digital content & physical products
              </h4>
            </div>
            {/* 3 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={calendar} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Accepts multiple payment methods with low fees
              </h4>
            </div>
            {/* 4 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={prize} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Boost fan engagement with loyalty rewards & quizzes
              </h4>
            </div>
            {/* 5 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={peoplegrp} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Personalized interactions for your fans
              </h4>
            </div>
            {/* 6 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={voicepic} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Near-human realistic voice messages
              </h4>
            </div>
            {/* 7 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={message} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Tailored conversation based on fan preferences
              </h4>
            </div>
            {/* 8 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={wtsapp} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Share your workout routines or relationship advice
              </h4>
            </div>
            {/* 9 */}
            <div className="flex flex-col justify-center items-center">
              <div className="imgcontainerbox gradientBackground p-3 rounded-2xl">
                <Image src={gift} alt="feature1" height={40} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Fun quizzes & exciting giveaways
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;