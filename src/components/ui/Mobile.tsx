'use client';
import axios from 'axios';
import { useState } from 'react';
import Styles from '../../app/page.module.css';

const Mobile = () => {
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
          if (res) {
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
    <section className={Styles.mobile}>
      <div className={`${Styles.containerMobileAndTablet} flex flex-col `}>
        <h1
          className="text-[2rem] font-[400] text-center mt-6"
          style={{ fontFamily: 'adieuregular' }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span
            className={Styles.gradientHeading}
            style={{ letterSpacing: '2px' }}
          >
            Inventional
          </span>
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-[#0a071d] rounded-full px-1 cursor-auto mx-auto my-4 py-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span
              className={`${Styles.gradientText} text-center px-2 py-0.5 rounded-full}`}
              style={{
                fontFamily: 'adieuregular',
                fontSize: '0.7rem',
              }}
            >
              ENTER INTO THE FUTURE
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-12 h-[75vh]">
          <p
            style={{
              fontFamily: 'adieuregular',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              textAlign: 'center',
              padding: '0px 8px',
              fontWeight: 500,
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
              marginTop: '3rem',
            }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            The future is now. <br /> Are you ready?
          </p>

          {/* Input box */}
          <div className="px-0.5 flex justify-center items-center flex-col gap-y-5">
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="text-center">
                <h4
                  className={`${Styles.animatedHeading} font-semibold text-gray-200 my-1 text-md `}
                >
                  Join Wait List
                </h4>
              </div>
              <div className="self-center">
                <form className="relative" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="w-[95vw] h-12 pl-10 text-sm border rounded-full bg-[#040c18] border-none focus:outline-none"
                    placeholder="ex: youremail@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={`absolute -ml-12 bg-[#1a263a] rounded-full p-2 mt-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${Styles.animateArrow} h-6 w-6 text-[#ff00ff] right-2 top-3`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
                {showResult ? (
                  <div className="flex justify-center items-center">
                    <div className="bg-[#0a071d] rounded-full px-3 cursor-auto mx-auto py-1 absolute mt-28 mb-4">
                      {successMessage ? (
                        <div className="flex gap-x-1 items-center justify-center">
                          <svg
                            className="h-12 w-12 text-green-500"
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

export default Mobile;
