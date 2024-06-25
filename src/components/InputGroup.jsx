import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/InputGroup.css';
import BusImg from '../assets/busimage.jpg';

export default function InputGroup() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fare, setFare] = useState(null);

  const locations = ["chennai", "madurai", "bangalore", "coimbatore"];
  const distances = {
    "chennai-madurai": 462,
    "madurai-bangalore": 433,
    "chennai-bangalore": 346,
    "madurai-coimbatore": 214
  };

  const handleInput = (e, setPoint) => {
    const value = e.target.value.toLowerCase();
    setPoint(value);
    setSuggestions(
      locations.filter((location) =>
        location.toLowerCase().startsWith(value)
      )
    );
  };

  const handleSubmit = () => {
    const route = `${pickup}-${drop}`;
    const reverseRoute = `${drop}-${pickup}`;
    if (distances[route]) {
      const fareAmount = distances[route] * 2;
      setFare(`Total Fare: Rs ${fareAmount}`);
    } else if (distances[reverseRoute]) {
      const fareAmount = distances[reverseRoute] * 2;
      setFare(`Total Fare: Rs ${fareAmount}`);
    } else {
      setFare("Invalid route. Please select valid locations.");
    }
  };

  const handleBookTicket = () => {
    if (!pickup || !drop || !fare || fare === '0') {
      toast.warn("Can't able to book ticket", {
        autoClose: 5000,
      });
    } else {
      toast.success("Ticket booked successfully", {
        autoClose: 5000,
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="pickup-drop">
              <h1>SELECT <span>Pick up</span> and <span>Dropping Points</span></h1>
              <input
                type="text"
                value={pickup}
                onChange={(e) => handleInput(e, setPickup)}
                placeholder="Enter pickup location"
              />
              {pickup && suggestions.length > 0 && (
                <ul>
                  {suggestions.map((location) => (
                    <li
                      key={location}
                      onClick={() => {
                        setPickup(location);
                        setSuggestions([]);
                      }}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
              <br />
              <br />
              <input
                type="text"
                value={drop}
                onChange={(e) => handleInput(e, setDrop)}
                placeholder="Enter drop location"
              />
              {drop && suggestions.length > 0 && (
                <ul>
                  {suggestions.map((location) => (
                    <li
                      key={location}
                      onClick={() => {
                        setDrop(location);
                        setSuggestions([]);
                      }}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
              <br />
              <br />
              <button onClick={handleSubmit}>SUBMIT</button>
              {fare && <p>{fare}</p>}
              <button onClick={handleBookTicket}>Book Ticket</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
          <img
              src={BusImg}
              alt="Bus"
              className="bus-image"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
