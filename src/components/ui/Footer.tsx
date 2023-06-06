'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import fb from '../../../public/assets/images/fb.png';
import insta from '../../../public/assets/images/insta.png';
import logo from '../../../public/assets/images/logofooter.png';
import rightarrowbutton from '../../../public/assets/images/rightarrowbutton.png';
import twitter from '../../../public/assets/images/twitter.png';
import youtube from '../../../public/assets/images/utube.png';
import Styles from '../../styles/footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateEmail = (mail: string) => {
      return String(mail)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      setShowResult(true);
      setErrorMessage('Invalid email address');
      setTimeout(() => {
        setShowResult(false);
        setErrorMessage('');
      }, 3000);
      return;
    } else {
      axios
        .post('/api/waitlist', {
          email: email,
        })
        .then((res) => {
          if (res?.data?.statusCode === 200) {
            setEmail('');
            setShowResult(true);
            setSuccessMessage(res.data.message);
            setTimeout(() => {
              setShowResult(false);
              setSuccessMessage('');
              setErrorMessage('');
            }, 9000);
          } else if (res?.data?.statusCode === 400) {
            setShowResult(true);
            setErrorMessage(res.data.message);
            setTimeout(() => {
              setShowResult(false);
              setErrorMessage('');
              setSuccessMessage('');
            }, 3000);
          }
        })
        .catch((err) => {
          setShowResult(true);
          setErrorMessage(err);
          setTimeout(() => {
            setShowResult(false);
            setErrorMessage('');
          }, 3000);
        });
    }
  };

  return (
    <div className="bg-[#171B29] pt-20 md:pt-48 pb-3">
      <div className="grid grid-cols-12 mx-2 md:px-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex justify-center lg:justify-start items-center lg:items-start">
            <Image
              src={logo}
              alt="logo"
              height={52}
              width={275}
              className="hidden md:block"
            />
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={200}
              className="block md:hidden"
            />
          </div>
          <p className="text-center md:text-left text-sm md:mt-6 md:ml-5 mb-8 md:mb-0 mt-2">
            Lorem ipsum dolor sit amet consectetur. Lobortis duis duis sed sit
            integer mauris gravida proin eget.
          </p>
          <div className="hidden md:flex px-0.5 justify-center items-center flex-col gap-y-5">
            <div className="flex flex-col lg:ml-5 md:my-16">
              <h4 className=" font-semibold text-gray-200 my-1 lg:ml-5 text-md ">
                Join Waitlist!
              </h4>
              <div className="self-center">
                <form className="relative" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="w-[414px] h-12 pl-4 text-sm border rounded-full bg-[#040c18] border-none focus:outline-none"
                    placeholder="e.g. hello@inventional.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                {showResult ? (
                  <div className="flex justify-center items-center">
                    <div className="bg-[#0a071d] rounded-full md:px-1.5 cursor-auto mx-auto md:py-1 absolute md:mt-12">
                      {successMessage ? (
                        <div className="flex gap-x-1 items-center justify-center">
                          <svg
                            className="h-5 w-5 text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <circle cx="12" cy="12" r="9" />{' '}
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                          <span className="text-green-600 font-semibold text-md text-center">
                            {' '}
                            {successMessage}
                          </span>
                        </div>
                      ) : (
                        <div className="flex gap-x-1 items-center justify-center">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <circle cx="12" cy="12" r="9" />{' '}
                            <path d="M10 10l4 4m0 -4l-4 4" />
                          </svg>
                          <span className="text-red-600 font-semibold text-md text-center">
                            {' '}
                            {errorMessage}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 md:px-8 md:ml-auto">
          <div className="flex justify-center items-center gap-x-16 md:gap-x-32">
            <div className="grid-cols-1 lg:grid-cols-3">
              <h6
                className="text-center mb-1 md:mb-5"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                Product
              </h6>
              <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
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
                className="text-center mb-1 md:mb-5"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                company
              </h6>
              <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                <span>About Us</span>
                <span>Careers</span>
                <span>Brand</span>
                <span>Download</span>
                <span>Customers</span>
                <span>Blog</span>
              </div>
            </div>
            <div className="grid-cols-1 lg:grid-cols-3 hidden md:block">
              <h6
                className="text-center mb-5"
                style={{ fontFamily: 'adieuregular', letterSpacing: '1.5%' }}
              >
                Resources
              </h6>
              <div className="flex flex-col md:gap-y-3 text-center text-sm">
                <span>Developer</span>
                <span>API</span>
                <span>QAI</span>
                <span>Support</span>
                <span>Policy</span>
                <span>Terms Of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="flex justify-center items-center mt-8 md:mt-16">
        <div className="w-[90%] h-[1px] bg-[#687686]"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
        <div className="flex gap-x-6 pt-2 md:pt-4">
          <span className="text-sm">Terms</span>
          <span className="text-sm">Privacy</span>
          <span className="text-sm">Cookies</span>
        </div>
        <div className="socialmediaicons flex gap-x-6 pt-4 pb-4 md:pb-0">
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
