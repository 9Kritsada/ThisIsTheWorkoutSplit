import React from "react";

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

  const days = [
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
  return (
    <>
      <main>
        <h1 className="text-4xl md:text-5xl font-bold text-center head-font">
          This is the workout split
        </h1>
        <div className="flex flex-wrap flex-row gap-5 py-20 items-center justify-center">
          {days.map((item, i) => {
            return (
              <div
                className={`text-black aspect-square h-36 w-36 sm:w-48 sm:h-48 py-5 sm:p-5 rounded-md border-2 border-black duration-150	ease-out ${
                  todayName === item.days
                    ? "scale-110 z-50 hover:scale-125 bg-yellow-500"
                    : "backdrop-contrast-0 opacity-30 hover:scale-105 hover:opacity-90 bg-white "
                }`}
                key={i}
              >
                <h1 className="text-center text-xl font-bold">{item.days}</h1>
                <ul className="text-center mt-2 sm:mt-5">
                  {item.workout.map((workoutItem, i) => {
                    return <li className="font-medium">{workoutItem}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="text-red-600 font-bold">*** Cardio &gt; 90 hrs / Week ***</p>
      </main>
    </>
  );
};

export default App;
