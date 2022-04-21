import React, {useState, useContext} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";
import {Link} from "react-router-dom";
import FileBase from "react-file-base64";
import BackgroundImage from "../../pages/auth/assets/bg.png";
import "./newHotelDetails.css";
import {useHistory} from "react-router-dom";
import bgimg from "../../pages/auth/assets/logim.jpg"


export default function NewHotelDetails() {
  const {user, dispatch} = useContext(Context);
  const [hotelName, setHotelName] = useState("");
  const [hotelrating, setHotelrating] = useState(0);
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [pincode, setPincode] = useState(0);
  const [hotelDes, setHotelDesc] = useState("");
  const [userRating, setUserrating] = useState(0);
  const [amenties, setAmenties] = useState();

  const [gym, setGym] = useState(false);
  const [spa, setSpa] = useState(false);
  const [ele, setElevator] = useState(false);
  const [drycleaning, setDrycleaning] = useState(false);
  const [housekeeping, setHouseKeeping] = useState(false);
  const [parking, setParking] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [indoorsports, setIndoorSports] = useState(false);
  const [array, setArray] = useState([]);
  let history=useHistory();


  const handleSubmit = async (e) => {
    console.log("called");
    let arr = [];
    if (gym) {
      arr.push("gym");
    }
    if (drycleaning) {
      arr.push("drycleaning");
    }
    if (spa) {
      arr.push("spa");
    }
    if (ele) {
      arr.push("ele");
    }
    if (housekeeping) {
      arr.push("housekeeping");
    }
    if (parking) {
      arr.push("parking");
    }
    if (indoorsports) {
      arr.push("indoorsports");
    }
    if (smoking) {
      arr.push("smoking");
    }






    // setAmenties(arr);
    // console.log(arr);
    // console.log(amenties);
    // e.preventDefault()

    try {
      const res = await axios.post("http://localhost:5000/hotel/addhotel", {
        admin_id: user.result._id,
        hotel_name: hotelName,
        hotel_rating: hotelrating,
        hotel_desc: hotelDes,
        address: {
          locality: locality,
          city: city,
          pincode: pincode,
          state: state,
          country: country,
        },
        check_in: checkin,
        check_out: checkout,
        price: price,
        userRating: userRating,
        amenties: arr,
        photos: array
      });
      console.log(res.data);
    } catch (err) {
      console.log(err)
    }





    history.push("/addRoom");


  };

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };

  return (
    <header style={HeaderStyle}>
      <div
        style={{
          width: "100%",
          height: "4rem",
          backgroundColor: "black",
          display: "block",
          boxShadow: "0px 7px 11px 0px #737373",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "1rem",
          }}
        >
          <h4 style={{color: "white"}}>Welcome to BOOKNSTAY</h4>
          <button
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit} className="form1">
          <div style={{width: "60%"}}>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Hotel Name"
              className="text1"
              onChange={(e) => setHotelName(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Hotel Description"
              className="text1"
              onChange={(e) => setHotelDesc(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Hotel Rating"
              className="text1"
              onChange={(e) => setHotelrating(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Locality"
              className="text1"
              onChange={(e) => setLocality(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="City"
              className="text1"
              onChange={(e) => setCity(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="State"
              className="text1"
              onChange={(e) => setState(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Country"
              className="text1"
              onChange={(e) => setCountry(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Checkin"
              className="text1"
              onChange={(e) => setCheckin(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Checkout"
              className="text1"
              onChange={(e) => setCheckout(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Pincode"
              className="text1"
              onChange={(e) => setPincode(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Price"
              className="text1"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="UserRating"
              className="text1"
              onChange={(e) => setUserrating(e.target.value)}
            />
            <br></br>
          </div>
          <div style={{marginLeft: "5rem"}}>
            <h3
              style={{color: "black", fontweight: "bolder", fontWeight: "bold"}}
            >
              {" "}
              Other facilities{" "}
            </h3>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="gym" style={{width: "50%"}}>
                {" "}
                Gym
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setGym(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="spa" style={{width: "50%"}}>
                {" "}
                Spa
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setSpa(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="elevator" style={{width: "50%"}}>
                {" "}
                Elevator
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setElevator(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="drycleaning" style={{width: "50%"}}>
                {" "}
                DryCleaning
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setDrycleaning(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="housekeeping" style={{width: "50%"}}>
                Housekeeping
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setHouseKeeping(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="parking" style={{width: "50%"}}>
                Parking
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setParking(e.target.value)}
              ></input>

              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="smoking" style={{width: "50%"}}>
                Smoking
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setSmoking(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label style={{width: "50%"}} for="indoorsports">
                Indoorsports
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                onChange={(e) => setIndoorSports(e.target.value)}
              ></input>
              <br></br>
            </div>
            <div style={{margin: "1rem 0 0 0"}}>
              <h3
                style={{
                  color: "black",
                  fontweight: "bolder",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Upload Images{" "}
              </h3>
              <div style={{padding: "1rem "}}>
                <FileBase
                  type="file"
                  multiple={true}
                  onDone={(base64) => {
                    setArray(base64);
                  }}
                ></FileBase>
              </div>
            </div>
            <br></br>
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "24px",
                borderRadius: "5px",
                padding: "6px",
                marginTop: "8px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "100%",
  background: `url(${bgimg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  
};
