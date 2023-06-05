import Image from 'next/image';
import fb from '../../../public/assets/images/fb.png';
import insta from '../../../public/assets/images/insta.png';
import logo from '../../../public/assets/images/logofooter.png';
import rightarrowbutton from '../../../public/assets/images/rightarrowbutton.png';
import twitter from '../../../public/assets/images/twitter.png';
import youtube from '../../../public/assets/images/utube.png';
import Styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <div className="bg-[#171B29] md:pt-48 md:pb-3">
      <div className="grid grid-cols-12 md:px-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex">
            <Image src={logo} alt="logo" height={52} width={275} />
          </div>
          <p className="text-sm md:mt-6 md:ml-5">
            Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed sit
            integer mauris gravida proin eget.
          </p>
          <div className="hidden md:flex px-0.5 justify-center items-center flex-col gap-y-5">
            <div className="flex flex-col lg:ml-5 mt-16">
              <h4 className=" font-semibold text-gray-200 my-1 lg:ml-5 text-md ">
                Join Waitlist!
              </h4>
              <div className="self-center">
                <form className="relative">
                  <input
                    type="email"
                    className="w-[414px] h-12 pl-10 text-sm border rounded-full bg-[#040c18] border-none focus:outline-none"
                    placeholder="e.g. hello@inventional.com"
                    required
                  />
                  <button
                    type="submit"
                    className={`absolute -ml-12 gradientBackground rounded-full p-2 mt-1`}
                  >
                    <Image
                      src={rightarrowbutton}
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
        </div>
        <div className="col-span-12 lg:col-span-8 md:px-8 md:ml-auto">
          <div className="flex justify-center items-center md:gap-x-32">
            <div className="grid-cols-1 lg:grid-cols-3">
              <h6
                className="text-center md:mb-7"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                Product
              </h6>
              <div className="flex flex-col md:gap-y-3 text-center">
                <span>Overons</span>
                <span>Integration</span>
                <span>Docs</span>
                <span>Counters</span>
                <span>Contact</span>
                <span>Download</span>
              </div>
            </div>
            <div className="grid-cols-1 lg:grid-cols-3">
              <h6
                className="text-center md:mb-7"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                company
              </h6>
              <div className="flex flex-col md:gap-y-3 text-center">
                <span>About Us</span>
                <span>Careers</span>
                <span>Brand</span>
                <span>Download</span>
                <span>Customers</span>
                <span>Blog</span>
              </div>
            </div>
            <div className="grid-cols-1 lg:grid-cols-3">
              <h6
                className="text-center md:mb-7"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                Resources
              </h6>
              <div className="flex flex-col md:gap-y-3 text-center">
                <span>Developer</span>
                <span>API</span>
                <span>QAI</span>
                <span>Support</span>
                <span>Policy</span>
                <span>Terms Of Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="flex justify-center items-center md:mt-16">
        <div className="w-[90%] h-[1px] bg-[#687686]"></div>
      </div>
      <div className="flex justify-between items-center md:px-20">
        <div className="flex md:gap-x-6 md:pt-4">
          <span className="text-sm">Terms</span>
          <span className="text-sm">Privacy</span>
          <span className="text-sm">Cookies</span>
        </div>
        <div className="socialmediaicons flex md:gap-x-6 md:pt-4">
          <Image
            src={insta}
            alt="insta"
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src={twitter}
            alt="twitter"
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src={youtube}
            alt="youtube"
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <Image
            src={fb}
            alt="fb"
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
