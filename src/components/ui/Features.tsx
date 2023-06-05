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
      <div className="bg-[#060606] py-16 md:py-24">
        <h2
          className="text-3xl md:text-5xl font-[400] mb-12 md:mb-20 text-center"
          style={{ fontFamily: 'adieuregular' }}
        >
          Features of our <br className="md:hidden" />{' '}
          <span className="gradientText">AI chatbot</span>
        </h2>
        <div className="px-6 md:px-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-20 gap-y-16 md:gap-y-14 items-center">
            {/* 1 */}
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
              <div className="imgcontainerbox gradientBackground p-3  rounded-2xl">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
              <div className="imgcontainerbox gradientBackground py-4 px-3 rounded-2xl">
                <Image src={calendar} alt="feature1" height={45} width={40} />
              </div>
              <h4
                className="gradientText text-xl text-center mt-4"
                style={{ fontFamily: 'adieuregular', letterSpacing: '.03rem' }}
              >
                Accepts multiple payment methods with low fees
              </h4>
            </div>
            {/* 4 */}
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
            <div className="flex flex-col justify-center items-center border border-[rgba(255, 255, 255, 0.6)] rounded-xl p-6 md:p-0 md:border-0">
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
