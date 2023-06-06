'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import rightArrowButton from '../../../public/assets/images/rightarrowbutton.png';
import Styles from '../../styles/footer.module.css';

const MobileInputBox = () => {
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
    <div className="flex md:hidden justify-center items-center">
      <div className="flex flex-col mt-8 justify-center items-center">
        <h4 className=" font-bold text-gray-200 my-1 text-sm ">
          Eager for More? Join Wait List!
        </h4>
        <div className="self-center">
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-[92vw] h-12 pl-10 text-sm border rounded-full bg-[#171b29] border-none focus:outline-none"
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
                src={rightArrowButton}
                alt="rightArrowButton"
                height={24}
                width={24}
                className={`${Styles.animateArrow} h-6 w-6 right-2 top-3`}
              />
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
  );
};

export default MobileInputBox;
