'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import RobotImg from '../../../public/assets/images/robot-hand.png';
import Styles from '../../app/page.module.css';

const Desktop = () => {
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
    <section className={Styles.desktop}>
      <div className={Styles.container}>
        <div className="grid grid-cols-12">
          <div
            className="col-span-6 h-[73vh] flex justify-center items-center lg:ml-16"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div>
              <button
                className="bg-[#211d36] rounded-full px-1 cursor-auto mx-auto my-4 py-1"
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
              <h1
                className="text-5xl font-[400] my-8"
                style={{ fontFamily: 'adieuregular' }}
              >
                What is{' '}
                <span className={Styles.gradientHeading}>Inventional</span>
              </h1>
              <p
                style={{
                  fontFamily: 'adieuregular',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.2rem',
                  letterSpacing: '-3%',
                }}
                className="w-[80%]"
              >
                The future is now. Are you ready?
              </p>
            </div>
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-12 flex">
            <Image
              src={RobotImg}
              width={250}
              height={200}
              alt="Picture of the AI Robot"
              className="object-cover"
            />
            <div
              className="self-center -mt-20 ml-16"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="lg:w-[631px] h-14 pl-10 text-sm border rounded-full bg-[#161a25] border-none focus:outline-none"
                  placeholder="ex: youremail@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={`${Styles.gradientButton} absolute -ml-28 py-2.5 mt-2 px-3 rounded-t-full rounded-br-full text-white font-bold text-sm`}
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
    </section>
  );
};

export default Desktop;
