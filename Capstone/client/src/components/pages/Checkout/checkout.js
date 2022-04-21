import React from 'react'
import Button from "@material-ui/core/Button";

export const checkout = () => {
  return (
    <div className="Checkout">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/booking/checkout_header.jpg")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Finish Your Reservation</h2>
        </div>
      </header>
      <section className="desc">
        <h1 className="alt-font">YOUR DETAILS</h1>
      </section>
      <section className="room-info">
        {/* {room &&  */}
        
          <>
            <h1>BOOKING SUMMARY</h1>
            <div>
              <h4>Room:</h4> <span>Sexy Room</span>
            </div>
            <div>
              <h4>Dates:</h4>
              <span>
                {/* {`${guestDetails.booking.dates[0].toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })} - ${guestDetails.booking.dates[1].toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}`} */}
              12 March,2022
              </span>
            </div>
            <div>
              <h4>Number of Nights:</h4>
              <span>69</span>
            </div>
            <div>
              <h4>Guests</h4>
              <span>
                2 Adults 
              </span>
            </div>
            <div>
              <h4>Total</h4>
              <span style={{ fontWeight: "bold" }}>$1200</span>
            </div>
          </>
        
      </section>
      <section className="details">
        <h1 className="alt-font">Enter Your Information</h1>
        {/* {error &&  */}
        <span className="error-msg">Error</span>
        <form className="" autoComplete="off">
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="firstName"
            label="First Name"
            variant="outlined"
          />
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="lastName"
            label="Last Name"
            variant="outlined"
          />
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
          />
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="confirmEmail"
            label="Confirm Email"
            variant="outlined"
          />
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="phone"
            label="Phone Number"
            variant="outlined"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <input type="text"
            // onChange={handleChange}
            required
            className="outlined-basic"
            name="paymentType"
            select
            label="Select"
            
            /*       onChange={handleChange} */
            helperText="Card Type"
            variant="outlined"
          />
            {/* {card.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
          
          <input type="text"
            required
            className="outlined-basic"
            name="cardNum"
            label="Card Number"
            
            
            variant="outlined"
            helperText="This value cannot be changed"
          />
          {/* <div className="btn-container">
            <Button  variant="outlined">
              Submit
            </Button>
          </div> */}
        </form>
      </section>
    </div>
  )
}

export default checkout;