import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function ZipSearchField(props) {
  return (
    <div>
      <p>{props.city_state}</p>
      <p>{props.city}{props.state}</p>
      <p>{props.esp}</p>
      <p>{props.wages}</p>
    </div>
  )
  
}

function App() {
  const [zip, setCity] = useState([])  

  const fetchData = (e) => {
    const gotZip = e.target.value;
      fetch(`https://ctp-zip-api.herokuapp.com/zip/${gotZip}`)
      .then(response => {
         return response.json()
      })
      .then(data => {
        setCity(data)
      })
    }
 
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        {<input onChange={fetchData} id="input"/>}
        <div>
          {
            zip.map(zip => (
                <p class="data">
                  <ZipSearchField city_state = {zip.City + ", " + zip.State}/>
                  <ZipSearchField city = {"City: " + zip.City}/> 
                  <ZipSearchField state = {"State: " + zip.State}/> 
                  <ZipSearchField esp = {"Population: " + zip.EstimatedPopulation}/>
                  <ZipSearchField wages = {"Total Wages: " + zip.TotalWages}/>
                </p>
              ))
            }
        </div>
        <div>
        </div>
      </div>
    </div>
  );

}
export default App;