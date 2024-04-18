import react, { useState } from "react";
import "./App.css";
import data from "./Data.js";
import calculateAge from "./Middlewere.js";
// import { preview } from "vite";

export default function App() {
  const [isclicked, setIsCliked] = useState({ status: false, id: NaN });
  const todaysDate = new Date();
  console.log(todaysDate);
  const handleClick = (ind) => {
    setIsCliked((prev) => ({
      ...prev,
      status: !prev.status,
      id: ind,
    }));
  };
  return (
    <>
      <h2 style={{ color: "rgb(248,196,206)" }}>Today's Birth</h2>
      {data.map((item, index) => {
        if (
          calculateAge(item.dateOfBirth).months == 0 &&
          calculateAge(item.dateOfBirth).days == 0
        ) {
          return (
            <>
              <div className="birthday" onClick={() => handleClick(index)}>
                <img
                  src="src/source/birth.png"
                  alt="Your Image"
                  className="center-image"
                  height={100}
                  width={100}
                />
                <h1>{item.name}</h1>
                <div>
                  {isclicked.status && isclicked.id == index ? (
                    <span>{calculateAge(item.dateOfBirth).years} Years</span>
                  ) : null}
                </div>
              </div>
            </>
          );
        }
      })}
      <h2 style={{ color: "rgb(162,227,160)" }}>Upcoming Birthday</h2>
      {data.map((item, index) => {
        if (
          calculateAge(item.dateOfBirth).months != 0 &&
          calculateAge(item.dateOfBirth).days != 0
        ) {
          return (
            <>
              <div
                className="upcoming-birthday "
                onClick={() => handleClick(index)}
              >
                <img
                  src="src/source/up_birthday.png"
                  alt="Your Image"
                  className="center-image"
                  height={100}
                />
                <h1>{item.name}</h1>
                <p>{item.dateOfBirth}</p>
                <p>
                  {isclicked.status && isclicked.id == index ? (
                    <span>
                      {" "}
                      After {calculateAge(item.dateOfBirth).months} month
                      and&nbsp;
                      {calculateAge(item.dateOfBirth).days} days
                    </span>
                  ) : null}
                </p>
              </div>
            </>
          );
        }
      })}
    </>
  );
}
