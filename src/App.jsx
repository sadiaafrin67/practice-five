import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";

function App() {

  // fake data make opt-1

  //   const watches = [
  //   {id:1, name:"Watch 1", price: 100},
  //   {id:2, name:"Watch 2", price: 200},
  //   {id:3, name:"Watch 3", price: 300},
  // ]


  // fake data make opt-2

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: "$399",
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: "$249",
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense",
  //     price: "$299",
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Forerunner 945",
  //     price: "$599",
  //   },
  //   {
  //     id: 5,
  //     name: "Fossil Gen 5 Carlyle",
  //     price: "$295",
  //   },
  // ];


  // fake data make opt-3

  // const [watches, setWatches] = useState([])
  // useEffect(() => {
  //   fetch('Watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // },[])


// fake data make opt-4(this opt shouldnt be used)

  const [watches, setWatches] = useState([])
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sadiaafrin67/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])



  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
