// import './App.css';
// import React, { useState, useEffect } from "react";

// function App() {
//   const [beerData, setBeerData] = useState([]);

//   async function fetchBlogPosts() {
//     let url = "https://api.punkapi.com/v2/beers";
//     try {
//       const result = await fetch(url);
//       const data = await result.json();
//       setBeerData(data);
//     } catch (error) {
//       console.log("Data not found");
//     }
//   }

//   useEffect(() => {
//     fetchBlogPosts();
//   }, []);

//   return (
//     <div className="App">
//       {beerData.map((beer) => (
//         <img key={beer.id} src={beer.image_url} alt={beer.name} />
//       ))}
//     </div>
//   );


// export default App;


import './App.css';
import React, {useContext, useEffect} from "react";
import { AppContext } from "./context/AppContext";
import Data from './components/Data';
import Navbar from './components/Navbar';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);



  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="App">
       <Navbar/>
       <Data/>
    </div>
  );
}

export default App;
