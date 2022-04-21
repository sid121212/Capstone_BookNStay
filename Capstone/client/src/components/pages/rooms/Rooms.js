import React, { useEffect,useState } from "react";
import "../../../styles/Rooms.scss";
import { getAllRooms } from "../../../actions/rooms";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookWidget from "../../booking/BookWidget";
/* import RoomsJSON from "../../../rooms.json"; */
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free/css/all.min.css';             



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



const Rooms = () => {

  const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
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















  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getAllRooms());
  }, [location]);
  const rooms = useSelector((state) => state.rooms.rooms);
  return (
    <div className="Rooms">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/rooms/room_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Rooms</h2>
        </div>

        {/* <BookWidget /> */}
      </header>

      <section className="desc">
        <h1 className="alt-font">Be Captivated</h1>
        {/* <p>
          Choose between spectacular balcony views of The Villa or our resort’s
          private Beach Resort and Oceanside View, from the largest hotel rooms
          in Phuket.
        </p> */}
      </section>

      <section className="flex-row-lg">
        {rooms.length < 1 ? (
          <div className="loader">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h2>Loading...</h2>
          </div>
        ) : (
          rooms.map((room) => (
            <article className="card" key={room.title}>
              <Link to="/booking" >
                {/* <button className="btn-alt " onClick={displayRazorpay}>BOOK NOW</button> */}
                <button className="btn-alt " >BOOK NOW</button>
              </Link>
              <div>
                <h1 className="alt-font">{room.title}</h1>
                <p>{room.description}</p>
              </div>
              <div className="img-container">
                <img src={`img/rooms/${room.mainImage}`} alt={room.mainImage} />
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Rooms;
