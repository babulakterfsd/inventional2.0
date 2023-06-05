import Image from 'next/image';
import rightArrowButton from '../../../public/assets/images/rightarrowbutton.png';
import Styles from '../../styles/footer.module.css';

const MobileInputBox = () => {
  return (
    <div className="flex md:hidden justify-center items-center">
      <div className="flex flex-col mt-8 justify-center items-center">
        <h4 className=" font-bold text-gray-200 my-1 text-sm ">
          Eager for More? Join Wait List!
        </h4>
        <div className="self-center">
          <form className="relative">
            <input
              type="email"
              className="w-[92vw] h-12 pl-10 text-sm border rounded-full bg-[#171b29] border-none focus:outline-none"
              placeholder="e.g. hello@inventional.com"
              required
            />
            <button
              type="submit"
              className={`absolute -ml-12 gradientBackground rounded-full p-2 mt-1`}
            >
              <Image
                src={rightArrowButton}
                alt="rightArrowButton"
                height={24}
                width={24}
                className={`${Styles.animateArrow} h-6 w-6 right-2 top-3`}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileInputBox;
