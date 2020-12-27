import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
   {
      name: "Madhya Pradesh",
      cities: [
         {
            name: "Indore",
            towns: [
               {
                  name: "Mhow",
               },
               {
                  name: "Dewas",
               },
            ],
         },
         {
            name: "Bhopal",
            towns: [
               {
                  name: "Manit",
               },
               {
                  name: "Berasia",
               },
            ],
         },
         {
            name: "Gwalior",
            towns: [
               {
                  name: "Ajaypur",
               },
            ],
         },
      ],
   },
   {
      name: "Jharkhand",
      cities: [
         {
            name: "Dhanbad",
            towns: [
               {
                  name: "IIT(ISM) Dhanbad",
               },
               {
                  name: "Hirapur",
               },
            ],
         },
         {
            name: "Wasseypur",
            towns: [
               {
                  name: "Sardar khan's",
               },
               {
                  name: "Faizal khan's",
               },
            ],
         },
         {
            name: "Mirzapur",
            towns: [
               {
                  name: "Kaleen bhaiya's",
               },
               {
                  name: "Guddu bhaiya's",
               },
            ],
         },
      ],
   },
   {
      name: "Assam",
      cities: [
         {
            name: "Guwhati",
            towns: [
               {
                  name: "Amin",
               },
               {
                  name: "Jalah",
               },
            ],
         },
         {
            name: "Jungle1",
            towns: [
               {
                  name: "Tiger found at IIT Guwahati",
               },
               {
                  name: "Leopard found in IIT Guwahati",
               },
            ],
         },
         {
            name: "Tezpur",
            towns: [
               {
                  name: "Dibrugarh",
               },
               {
                  name: "Silchar",
               },
            ],
         },
      ],
   },
   {
      name: "Bihar",
      cities: [
         {
            name: "Patna",
            towns: [
               {
                  name: "Sonpur",
               },
               {
                  name: "Maner",
               },
            ],
         },
         {
            name: "Gaya",
            towns: [
               {
                  name: "Bakraur",
               },
               {
                  name: "Barachatti",
               },
            ],
         },
         {
            name: "Darbhanga",
            towns: [
               {
                  name: "Singhwara",
               },
               {
                  name: "Jale",
               },
            ],
         },
      ],
   },
];

function App() {
   //  console.log(states);
   return (
      <div id="main">
         {states.map((state, idx) => (
            <State
               id={`state${idx + 1}`}
               key={`${state}${idx}`}
               state={state}
            />
         ))}
      </div>
   );
}
export function State(props) {
   //  console.log(props, "ram");
   const [cityStatus, setCityStatus] = useState(false);

   return (
      <>
         <span
            id={props.id}
            onClick={() => {
               setCityStatus(!cityStatus);
            }}
         >
            {props.state.name}
         </span>
         {cityStatus
            ? props.state.cities.map((city, idx) => {
                 return (
                    <City
                       id={`city${idx + 1}`}
                       key={`${city}${idx}`}
                       city={city}
                    />
                 );
              })
            : null}
      </>
   );
}
export function City(props) {
   const [townStatus, setTownStatus] = useState(false);

   return (
      <>
         <span
            onClick={() => {
               setTownStatus(!townStatus);
            }}
         >
            {props.city.name}
         </span>
         {townStatus
            ? props.city.towns.map((town, index) => (
                 <span id={`town${index + 1}`} key={`${town}${index}`}>
                    {town.name}
                 </span>
              ))
            : null}
      </>
   );
}
export default App;
