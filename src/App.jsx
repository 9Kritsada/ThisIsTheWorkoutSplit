import React, { useState, useEffect } from "react";
import "./css/loader.css";
import { dark } from "@mui/material/styles/createPalette";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // });
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

  const set1 = [
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
      workout: ["Chest", "Triceps"],
    },
    {
      days: "Wednesday",
      workout: ["Back", "Biceps", "Abs"],
    },
    {
      days: "Thursday",
      workout: ["Quads", "Hamstring", "Calves"],
    },
    {
      days: "Friday",
      workout: ["Shoulder", "Abs"],
    },
    {
      days: "Saturday",
      workout: ["Biceps", "Triceps", "Forearm"],
    },
  ];

  // const set2 = [
  //   {
  //     days: "Sunday",
  //     workout: ["Quads", "Hamstring", "Calves"],
  //   },
  //   {
  //     days: "Monday",
  //     workout: ["Rest"],
  //   },
  //   {
  //     days: "Tuesday",
  //     workout: ["Chest", "Triceps", "Shoulder (Front,Mid)"],
  //   },
  //   {
  //     days: "Wednesday",
  //     workout: ["Back", "Biceps", "Shoulder (Back)"],
  //   },
  //   {
  //     days: "Thursday",
  //     workout: ["Quads", "Hamstring", "Calves"],
  //   },
  //   {
  //     days: "Friday",
  //     workout: ["Chest", "Triceps", "Shoulder (Front,Mid)"],
  //   },
  //   {
  //     days: "Saturday",
  //     workout: ["Back", "Biceps", "Shoulder (Back)"],
  //   },
  // ];

  const set2 = [
    {
      days: "Sunday",
      workout: ["Back", "Rear Delts", "Triceps"],
    },
    {
      days: "Monday",
      workout: ["Rest"],
    },
    {
      days: "Tuesday",
      workout: ["Chest", "Front Delts", "Lateral Delts", "Biceps"],
    },
    {
      days: "Wednesday",
      workout: ["Back", "Rear Delts", "Triceps"],
    },
    {
      days: "Thursday",
      workout: ["Quads", "Hamstring", "Calves"],
    },
    {
      days: "Friday",
      workout: ["Rest"],
    },
    {
      days: "Saturday",
      workout: ["Chest", "Front Delts", "Lateral Delts", "Biceps"],
    },
  ];

  // Initialize setSet and setSetSet using the value from localStorage or a default value
  const [setSet, setSetSet] = useState(
    localStorage.getItem("setSet")
      ? JSON.parse(localStorage.getItem("setSet"))
      : true
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("setSet")
      ? JSON.parse(localStorage.getItem("setSet"))
      : true
  );

  // Your function to update setSet
  const updateSetSet = (newValue) => {
    setSetSet(newValue);
    setDarkMode(newValue);
  };

  // Save setSet to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("setSet", JSON.stringify(setSet));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [setSet]);

  // Your logic to switch between set1 and set2 based on setSet
  const days = setSet ? set1 : set2;

  return (
    <>
      <div className={`${darkMode ? "" : "dark"}`}>
        <main
          className={`${!isLoaded ? "bg-zinc-600 dark:bg-gray-950" : "hidden"}`}
        >
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>

        <main className="bg-zinc-600 dark:bg-black">
          <img
            src="/112_ORANGE.jpg"
            className={`${
              !isLoaded
                ? "hidden"
                : "opacity-30 fixed h-full w-full  object-center object-cover inset-0"
            } ${darkMode ? "hidden" : ""}`}
            onLoad={handleImageLoad}
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center head-font dark:text-[#ff0000] z-10">
            This is the workout split
          </h1>
          <div className="w-full space-x-3 pt-8 z-10">
            <h2 className="text-center text-white text-xl mb-2 opacity-90">
              Workout Mode
            </h2>
            <div className="flex items-center justify-center text-black space-x-3 ">
              <div className="text-3xl text-white flex items-center">
                <span className="text-base opacity-80">Chilling</span>❄️
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={() => updateSetSet(!setSet)}
                  className="sr-only peer"
                  checked={!setSet} // Use the checked attribute to set the initial state of the checkbox
                />
                <div class="w-11 h-6 bg-yellow-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-600 dark:peer-focus:ring-red-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ff0000]"></div>
              </label>
              <div className="text-3xl text-white flex items-center">
                🔥<span className="text-base opacity-80">Boost</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-row gap-5 py-16 items-center justify-center z-10">
            {days.map((item, i) => {
              return (
                <div
                  className={`text-black md:aspect-square h-full w-36 sm:w-48 sm:h-48 py-5 sm:p-5 rounded-md border-2 border-black duration-150	ease-out ${
                    todayName === item.days
                      ? "scale-110 z-50 hover:scale-125 bg-yellow-500 dark:bg-red-700 dark:text-white"
                      : "backdrop-contrast-0 opacity-30 hover:scale-105 hover:opacity-90 bg-white "
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
          <span className="text-yellow-500 dark:text-red-600 font-bold items-center flex flex-col z-10">
            <p className="hidden dark:block">*** 3xFailiure ***</p>
            <p>*** Cardio &gt; 90 min / Week ***</p>
          </span>
        </main>
      </div>
    </>
  );
};

export default App;
