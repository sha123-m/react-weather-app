import React from "react";
import"./Weather.css";

export default function weather(){
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="text" placeholder="Enter a city" className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type ="button" value="search" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>wednesday 7:00</li>
            <li>Mostly cloudy</li>
        </ul>
      <div className="row mt-3">
        <div className="col-6">
           
            <img src=
            "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy" />
            
           <span className="temperature">6</span>
           <span className="unit">°C</span>
           </div>
       
        <div className="col-6">
            <ul>
                <li>precipitation:15%</li>
                <li>humidity:72%</li>
                <li>wind:15km/hr</li>
            </ul>
        </div>

      </div>
        </div>;
}