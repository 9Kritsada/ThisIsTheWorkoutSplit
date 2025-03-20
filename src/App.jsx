import React, { useState, useEffect } from "react";
import "./css/loader.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = today.getDay();
  const todayName = daysOfWeek[dayIndex];

  const workout = [
    {
      days: "Sunday",
      workout: ["Quads", "Calves", "Abs"],
    },
    {
      days: "Monday",
      workout: ["Rest"],
    },
    {
      days: "Tuesday",
      workout: ["Shoulder", "ABS"],
    },
    {
      days: "Wednesday",
      workout: ["Biceps", "Triceps", "Forearm"],
    },
    {
      days: "Thursday",
      workout: ["Rest"],
    },
    {
      days: "Friday",
      workout: ["Chest", "Triceps"],
    },
    {
      days: "Saturday",
      workout: ["Back", "Biceps", "Abs"],
    },
  ];

  return (
    <>
      <div>
        <main className={`${!isLoaded ? "bg-gray-950" : "hidden"}`}>
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>

        <main className={`${isLoaded ? "bg-black" : "hidden"}`}>
          <img
            src="/112_ORANGE.jpg"
            className="opacity-20 fixed h-full w-full object-center object-cover inset-0 blur-[5px]"
            onLoad={handleImageLoad}
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center head-font text-[#ff0000] z-10">
            This is the workout split
          </h1>
          <div className="flex flex-wrap flex-row gap-5 py-16 items-center justify-center z-10">
            {workout.map((item, i) => {
              return (
                <div
                  className={`text-black md:aspect-square h-full w-36 sm:w-48 sm:h-48 py-5 sm:p-5 rounded-md border-2 border-black duration-150	ease-out ${
                    todayName === item.days
                      ? "scale-110 z-50 hover:scale-125 text-white box a"
                      : "backdrop-contrast-0 opacity-30 hover:scale-105 hover:opacity-90 bg-white"
                  }`}
                  key={i}
                >
                  <h1 className="text-center text-xl font-bold">{item.days}</h1>
                  <ul className="text-center m-2 sm:m-5">
                    {item.workout.map((workoutItem, i) => {
                      return (
                        <li className="font-medium text-sm sm:text-base break-words">
                          {workoutItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <span className="text-[#ff0000] font-bold items-center z-10">
            Made by{" "}
            <a
              href="https://krits.top/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              0xKr1ts
            </a>
          </span>
        </main>
      </div>
    </>
  );
};

export default App;
