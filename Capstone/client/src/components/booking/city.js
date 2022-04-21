// import { useState } from 'react';
// // import { fetchPlace } from './fetchPlace';

// const App = () => {
//   const [city, setCity] = useState("");
//   const [autocompleteCities, setAutocompleteCities] = useState([]);
//   const [autocompleteErr, setAutocompleteErr] = useState("");

//   const fetchPlace = async (text) => {
//     try {
//       const res = await fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`
//       );
//       if (!res.ok) throw new Error(res.statusText);
//       return res.json();
//     } catch (err) {
//       return { error: "Unable to retrieve places" };
//     }
//   };

//   const handleCityChange = async (e) => {
//     setCity(e.target.value);
//     if (!city) return;

//     const res = await fetchPlace(city);
//     !autocompleteCities.includes(e.target.value) &&
//       res.features &&
//       setAutocompleteCities(res.features.map((place) => place.place_name));
//     res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
//   };

//   return (
//     <form>
//       <div className="placesAutocomplete">
//         <div className="placesAutocomplete__inputWrap">
//           <label htmlFor="city" className="label">
//             Your city
//             {autocompleteErr && (
//               <span className="inputError">{autocompleteErr}</span>
//             )}
//           </label>
//           <input
//             list="places"
//             type="text"
//             id="city"
//             name="city"
//             onChange={handleCityChange}
//             value={city}
//             required
//             pattern={autocompleteCities.join("|")}
//             autoComplete="off"
//           />
//           <datalist id="places">
//             {autocompleteCities.map((city, i) => (
//               <option key={i}>{city}</option>
//             ))}
//           </datalist>
//           <span className="placesAutocomplete__hint">
//             *start typing and choose your city from the given options
//           </span>
//           <button type="submit">Submit</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default App;

import React from 'react'
import './city.css';

export const City = () => {
  return (
    <div >
      <input style={{border:"1px solid black"}} type="text" className='city' placeholder='   Enter City'/>

    </div>
  )
}

export default City;