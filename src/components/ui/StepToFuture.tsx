import Image from 'next/image';
import circleGradient from '../../../public/assets/images/Ellipse.png';
import fatlineImg from '../../../public/assets/images/fatline.png';
import stepbottomleft from '../../../public/assets/images/stepbottomleft.png';
import stepbottomright from '../../../public/assets/images/stepbottomright.png';
import steptopleft from '../../../public/assets/images/steptopleft.png';
import steptopright from '../../../public/assets/images/steptopright.png';

const StepToFuture = () => {
  return (
    <div className="container">
      <div className="bg-[#060d18] py-8 md:py-20 px-2 flex flex-wrap md:block">
        <div className="flex flex-col gap-y-6 md:flex-row justify-between items-center">
          {/* top left */}
          <div className="bg-[#0e1622] w-full md:w-96 p-4 md:p-8 rounded-xl relative flex md:block justify-center items-center flex-col">
            <Image src={fatlineImg} alt="fatline" height={7} width={77} />
            <Image
              src={circleGradient}
              alt="fatline"
              height={7}
              width={7}
              className="mt-0.5"
            />
            <h3
              style={{ fontFamily: 'adieuregular' }}
              className="text-xl font-[400] mt-1.5 md:mb-2 order-first"
            >
              Fast and Easy to use
            </h3>
            <p
              className="text-[.9rem] text-center md:text-left mt-4 md:mt-0 tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum.
            </p>
            <Image
              src={steptopleft}
              alt="steptopleft"
              height={100}
              width={50}
              className="absolute top-0 -right-14 hidden lg:block"
            />
          </div>
          {/* top right */}
          <div className="bg-[#0e1622] w-full md:w-96 p-4 md:p-8 rounded-xl relative flex md:block justify-center items-center flex-col mb-6 md:mb-0">
            <Image src={fatlineImg} alt="fatline" height={7} width={77} />
            <Image
              src={circleGradient}
              alt="fatline"
              height={7}
              width={7}
              className="mt-0.5"
            />
            <h3
              style={{ fontFamily: 'adieuregular' }}
              className="text-xl font-[400] mt-1.5 md:mb-2 order-first"
            >
              Fast and Easy to use
            </h3>
            <p
              className="text-[.9rem] text-center md:text-left mt-4 md:mt-0 tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum
            </p>
            <Image
              src={steptopright}
              alt="steptopleft"
              height={100}
              width={50}
              className="absolute top-0 -left-14 hidden lg:block"
            />
          </div>
        </div>
        {/* centered title */}
        <div className="flex justify-center items-center md:my-28 w-full md:w-[600px] mx-auto order-first">
          <h2
            className="gradientText text-xl lg:text-3xl text-center my-4 md:my-0"
            style={{ fontFamily: 'adieuregular', letterSpacing: '-.03rem' }}
          >
            The future is now and you just need to realize it. Step into future
            toady & make it happen
          </h2>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center">
          {/* bottom left */}
          <div className="bg-[#0e1622] w-full md:w-96 p-4 md:p-8 rounded-xl relative flex md:block justify-center items-center flex-col">
            <Image src={fatlineImg} alt="fatline" height={7} width={77} />
            <Image
              src={circleGradient}
              alt="fatline"
              height={7}
              width={7}
              className="mt-0.5"
            />
            <h3
              style={{ fontFamily: 'adieuregular' }}
              className="text-xl font-[400] mt-1.5 md:mb-2 order-first"
            >
              Fast and Easy to use
            </h3>
            <p
              className="text-[.9rem] text-center md:text-left mt-4 md:mt-0 tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum.
            </p>
            <Image
              src={stepbottomleft}
              alt="steptopleft"
              height={100}
              width={50}
              className="absolute bottom-0 -right-14 hidden lg:block"
            />
          </div>
          {/* bottom right */}
          <div className="bg-[#0e1622] w-full md:w-96 p-4 md:p-8 rounded-xl relative flex md:block justify-center items-center flex-col">
            <Image src={fatlineImg} alt="fatline" height={7} width={77} />
            <Image
              src={circleGradient}
              alt="fatline"
              height={7}
              width={7}
              className="mt-0.5"
            />
            <h3
              style={{ fontFamily: 'adieuregular' }}
              className="text-xl font-[400] mt-1.5 md:mb-2 order-first"
            >
              Fast and Easy to use
            </h3>
            <p
              className="text-[.9rem] text-center md:text-left mt-4 md:mt-0 tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Inter' }}
            >
              Lorem ipsum dolor sit amet consectetur. Sit ultrices amet etiam
              proin viverra vulputate donec varius fermentum
            </p>
            <Image
              src={stepbottomright}
              alt="steptopleft"
              height={100}
              width={50}
              className="absolute bottom-0 -left-14 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepToFuture;
