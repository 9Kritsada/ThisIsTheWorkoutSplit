import React, { useState, useEffect } from "react";

const App = () => {
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

  const set2 = [
    {
      days: "Sunday",
      workout: ["Quads", "Hamstring", "Calves"],
    },
    {
      days: "Monday",
      workout: ["Rest"],
    },
    {
      days: "Tuesday",
      workout: ["Chest", "Triceps", "Shoulder (Front,Mid)"],
    },
    {
      days: "Wednesday",
      workout: ["Back", "Biceps", "Shoulder (Back)"],
    },
    {
      days: "Thursday",
      workout: ["Quads", "Hamstring", "Calves"],
    },
    {
      days: "Friday",
      workout: ["Chest", "Triceps", "Shoulder (Front,Mid)"],
    },
    {
      days: "Saturday",
      workout: ["Back", "Biceps", "Shoulder (Back)"],
    },
  ];

  // Initialize setSet and setSetSet using the value from localStorage or a default value
  const [setSet, setSetSet] = useState(
    localStorage.getItem("setSet")
      ? JSON.parse(localStorage.getItem("setSet"))
      : true
  );

  // Your function to update setSet
  const updateSetSet = (newValue) => {
    setSetSet(newValue);
  };

  // Save setSet to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("setSet", JSON.stringify(setSet));
  }, [setSet]);

  // Your logic to switch between set1 and set2 based on setSet
  const days = setSet ? set1 : set2;

  return (
    <>
      <main>
        <h1 className="text-4xl md:text-5xl font-bold text-center head-font">
          This is the workout split
        </h1>
        <div className="w-full flex items-center justify-center text-black space-x-3 pt-8">
          <button
            onClick={() => updateSetSet(true)}
            className={`bg-white border-2 border-black text-center px-2 py-1 rounded-md ${
              setSet ? "bg-yellow-500" : "opacity-40"
            }`}
          >
            Set1
          </button>
          <button
            onClick={() => updateSetSet(false)}
            className={`bg-white border-2 border-black text-center px-2 py-1 rounded-md ${
              !setSet ? "bg-yellow-500" : "opacity-40"
            }`}
          >
            Set2
          </button>
        </div>
        <div className="flex flex-wrap flex-row gap-5 py-16 items-center justify-center">
          {days.map((item, i) => {
            return (
              <div
                className={`text-black md:aspect-square h-full w-36 sm:w-48 sm:h-48 py-5 sm:p-5 rounded-md border-2 border-black duration-150	ease-out ${
                  todayName === item.days
                    ? "scale-110 z-50 hover:scale-125 bg-yellow-500"
                    : "backdrop-contrast-0 opacity-30 hover:scale-105 hover:opacity-90 bg-white "
                }`}
                key={i}
              >
                <h1 className="text-center text-xl font-bold">{item.days}</h1>
                <ul className="text-center m-2 sm:m-5">
                  {item.workout.map((workoutItem, i) => {
                    return <li className="font-medium text-sm sm:text-base break-words">{workoutItem}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="text-red-600 font-bold">
          *** Cardio &gt; 90 min / Week ***
        </p>
      </main>
    </>
  );
};

export default App;
