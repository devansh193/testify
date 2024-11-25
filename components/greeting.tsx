"use client";

export const Greeting = () => {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 4 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour <= 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Happy to see you back!";
  }

  return greeting;
};
