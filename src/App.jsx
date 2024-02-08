import { useState } from "react";
import "./App.css";
import QRCode from "qrcode.react";

function App() {
  const [count, setCount] = useState(0);
  const [right, setRight] = useState(0);
  const [event, setEvent] = useState(false);
  const [answer, setAnswer] = useState(0);
  const urlToRedirect = `https://www.youtube.com/watch?v=LDWJn3IwiaM`;

  return (
    <div
      style={{
        backgroundImage:
          "url('/1b6bf94b07c67927_heart-shape-1714807_1280.webp')",
      }}
      className="bg-cover bg-center h-screen"
    >
      <h1 className=" text-center pt-5 text-3xl text-purple-800">
        Answer the qeustions or me gonna boom boom yo kochebi
      </h1>

      <div>
        {count === 0 ? (
          <div className=" grid">
            <p className=" text-3xl text-center mt-20">Why are you gay?</p>
            <div className=" flex items-center justify-center mt-40 ">
              <div className=" grid grid-cols-2 gap-10">
                <div
                  onClick={() => {
                    setRight(1);
                    console.log(right);
                    setEvent(true);
                    setAnswer(answer + 1);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center items-center bg-white ${
                    right === 1 ? "bg-green-600" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>Yes</p>
                </div>
                <div
                  onClick={() => {
                    setRight(2);
                    console.log(right);
                    setEvent(true);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center bg-white items-center  ${
                    right === 2 ? "bg-red-500" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>You are gay!</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setCount(1);
                setRight(0);
                setEvent(false);
              }}
              type="button"
              className=" text-purple-800 text-3xl w-40 m-auto mt-10 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2  font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Next
            </button>
          </div>
        ) : count === 1 ? (
          <div className=" grid">
            <p className=" text-3xl text-center mt-20">Do you love me?</p>
            <div className=" flex items-center justify-center mt-40 ">
              <div className=" grid grid-cols-2 gap-10">
                <div
                  onClick={() => {
                    setRight(1);
                    console.log(right);
                    setEvent(true);
                    setAnswer(answer + 1);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center items-center bg-white ${
                    right === 1 ? "bg-green-600" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>Yes</p>
                </div>
                <div
                  onClick={() => {
                    setRight(2);
                    console.log(right);
                    setEvent(true);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center bg-white items-center  ${
                    right === 2 ? "bg-red-500" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>Yes</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setCount(2);
                setRight(0);
                setEvent(false);
              }}
              type="button"
              className=" text-purple-800 text-3xl w-40 m-auto mt-10 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2  font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Next
            </button>
          </div>
        ) : count === 2 ? (
          <div className=" grid">
            <p className=" text-3xl text-center mt-20">Do you love me?</p>
            <div className=" flex items-center justify-center mt-40 ">
              <div className=" grid grid-cols-2 gap-10">
                <div
                  onClick={() => {
                    setRight(1);
                    console.log(right);
                    setEvent(true);
                    setAnswer(answer + 1);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center items-center bg-white ${
                    right === 1 ? "bg-green-600" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>Mountains</p>
                </div>
                <div
                  onClick={() => {
                    setRight(2);
                    console.log(right);
                    setEvent(true);
                  }}
                  className={` cursor-pointer hover:-mt-3 hover:mb-3  transition-all duration-300 shadow-md rounded-xl text-2xl w-40 h-20 flex justify-center bg-white items-center  ${
                    right === 2 ? "bg-red-500" : null
                  } ${event ? "pointer-events-none" : null} `}
                >
                  <p>Ocean</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setCount(3);
                setRight(0);
                setEvent(false);
              }}
              type="button"
              className=" text-purple-800 text-3xl w-40 m-auto mt-10 inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2  font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="">
            <p className=" text-3xl text-purple-900 bg-white shadow-md rounded-lg h-40 flex justify-center items-center w-9/12 m-auto text-center mt-20">
              Congrats or not, you got {answer} right answer
            </p>
            <QRCode className=" block m-auto mt-20" value={urlToRedirect} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
