import React, {useState, useContext,useEffect} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";
import {Link} from "react-router-dom";
import FileBase from "react-file-base64";
import {useHistory} from "react-router-dom";
import "./ConfirmBookings.css";


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'




const ConfirmBookings=()=> {
  const [name, setName] = useState('Mehul')
  async function displayRazorpay() {

    console.log('Called')
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		// console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_UluvnZES4hwa1H' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Booking',
			description: 'Thank you for trusting us. Have a wonderful trip',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'siddharthmehta121212@gmail.com',
				phone_number: '8949149560'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}








  const {user, dispatch} = useContext(Context);


  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [room, setRoom] = useState("");
  const [price, setPrice] = useState();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  let history = useHistory();

  const handleSubmit = async (e) => {
    // displayRazorpay()
    console.log("called")
    try {
      const res = await axios.post("http://localhost:5000/bookings/addBooking", {
        customer_id: user.result._id,
        fullName: fullname,
        email: email,
        phone: phone,
        checkIn: checkin,
        checkOut: checkout,
        adults: adults,
        children: children,
        room: room,
        price: price,
      });
      console.log(res.data);
      // history.push("/");
    } catch (err) {
      console.log(err);
    }
    
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
          <h4 style={{color: "white"}}>Welcome to BooknStay</h4>
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
        <form
          // action={handleSubmit}
          //   onSubmit={}
          style={{display: "flex", justifyContent: "center", maxwidth: "100%"}}
        >
          <div style={{margin: "0px", padding: "0px"}}>
            
            <br></br>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setFullname(e.target.value)}
            />
            <br></br>
            
            <br></br>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br></br>
            
            <br></br>
            <input
              type="text"
              placeholder="Room Type"
              onChange={(e) => setRoom(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Number of Adults"
              onChange={(e) => setAdults(e.target.value)}
            />
            <br></br>
            <br></br>

            <input
              type="number"
              placeholder="Number of Children"
              onChange={(e) => setChildren(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="text"
              placeholder="Check In Time"
              onChange={(e) => setCheckin(e.target.value)}
            />

            <br></br>
            <br></br>

            <input
              type="text"
              placeholder="Check Out Time"
              onChange={(e) => setCheckout(e.target.value)}
            />

            <br></br>
            <br></br>

            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px",
                padding: "0 10px",
                marginTop: "8px",
              }}
            >
              Submit
            </button>
            
          </div>
        </form>
        <br></br>
        <button
              onClick={displayRazorpay}
              style={{
                height:"32rem",
                backgroundColor: "black",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px",
                padding: "0 10px",
                marginTop: "2rem",
              }}
            >
              Pay Now
            </button>
      </div>
    </header>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  //   background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default ConfirmBookings;