import React from "react";

export default function fetchHotel() {
  const url = "http://localhost:5000/hotel/getHotel/6239aab9202355262c4b2b87";
  const {data} = await axios.get(url);
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}