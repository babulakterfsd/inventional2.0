'use client';
import axios from 'axios';
import { useState } from 'react';
import Styles from '../../styles/banner.module.css';
import MobileInputBox from '../shared/MobileInputBox';

const Banner = () => {
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
    <section className="bg-[#0c0a0c]">
      <div className={`${Styles.bannerbg} container h-screen md:pl-12`}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 mx-auto">
            {/* Banner text contents */}
            <div className="h-screen flex flex-col justify-start md:justify-center items-center md:items-start relative">
              <button
                className="cursor-auto bg-black md:bg-[#201d2a] text-center my-4 md:my-0 py-1 md:py-1.5 px-4 md:px-8 rounded-full "
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <span
                  className="gradientText text-xs md:text-base font-semibold text-center"
                  style={{
                    fontFamily: 'adieuregular',
                    letterSpacing: '.1rem',
                  }}
                >
                  Engage, Enjoy, Evolve
                </span>
              </button>
              {/* desktops title */}
              <h1
                className="text-5xl font-[400] my-8 hidden md:block"
                style={{ fontFamily: 'adieuregular' }}
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                What is <span className="gradientText">Inventional</span>
              </h1>
              {/* mobiles title */}
              <h1
                className="text-4xl font-[600] px-1 block mt-6 md:hidden order-first"
                style={{ fontFamily: 'adieuregular' }}
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <span className="gradientText">Inventional</span>
              </h1>
              {/* desktop banner description */}
              <p
                style={{
                  fontFamily: 'Inter',
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '-3%',
                }}
                className="font-semibold text-xl hidden md:block"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Expand your digital presence AI that mimics <br /> your unique
                style.
              </p>
              {/* mobile banner description */}
              <p
                style={{
                  fontFamily: 'adieuregular',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  textAlign: 'center',
                  padding: '0px 8px',
                  fontWeight: 500,
                  textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
                  marginTop: '16rem',
                }}
                className="font-semibold text-xl block md:hidden"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Expand your digital presence <br /> AI that mimics your unique
                style.
              </p>

              {/* Banner input  */}
              <div
                className="block md:hidden"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <MobileInputBox />
              </div>
              <div
                className="hidden md:block mt-28"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <form className="relative" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="md:w-[630px] h-14 pl-10  text-sm border rounded-full bg-[#161a25] border-none focus:outline-none"
                    placeholder="ex: youremail@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={`gradientBackground absolute -ml-28 py-2.5 mt-2 px-3 rounded-t-full rounded-br-full text-white font-bold text-sm`}
                  >
                    Join Waitlist
                  </button>
                </form>
                {showResult ? (
                  <div className="flex justify-center items-center">
                    <div className="bg-[#0a071d] rounded-full px-3 cursor-auto mx-auto my-4 py-1 absolute mt-16">
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
      </div>
    </section>
  );
};

export default Banner;
