import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home.scss";
import Navbar from "../../navbar/Navbar";
import ReactStars from 'react-rating-stars-component'
import { AmentiesCard } from "./AmentiesCard";
import RoomCard from "./RoomCard";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';
import BackgroundImage from '../auth/assets/homepageImage.jpg'

import basicroom from '../auth/assets/basicroom.jpg'
import deluxroom from '../auth/assets/delux.jpg'
import twinroom from '../auth/assets/twinroom.jpg'

const HotelPage = () => {
  const id= window.location.pathname.split("/")
  const hotelId=id[2]
  const [hotelDetail, setHotelDetail] = useState([])
  const [address, setAddress] = useState({})
  const [locality, setLocality] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [pincode, setPincode] = useState()
  const [country, setCountry] = useState()
  const [rating, setRating] = useState(0)
  const [amenties, setAmenties] = useState([])
  const [pics, setPics] = useState([])

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  let arr=[]
  useEffect(()=>{
    const fetchHotel = async() =>{
      const res = await axios.get(`http://localhost:5000/hotel/getHotel/${hotelId}`, {
        hotelId: hotelId
      })
      setHotelDetail(res.data)
      console.log(hotelDetail)
      setLocality(res.data.address.locality)
      setCity(res.data.address.city)
      setState(res.data.address.state)
      setPincode(res.data.address.pincode)
      setCountry(res.data.address.country)
      setAmenties(res.data.amenties)
      console.log(amenties)
      setRating(res.data.hotel_rating)
      setPics(res.data.photos)
 
      
      for(let i = 0; i<amenties.length; i++){
        arr.push(amenties[i])
      }
      console.log(arr, "ARRRAYA")

      // setAddress(res.data.addresss)   

    }
    fetchHotel()
  })

  const itemLength = pics.length  - 1

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ?
        itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
}

// Next button for Carousel
const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ?
        0 : activeIndex + 1;
    setActiveIndex(nextIndex);
}

const carouselItemData = pics.map((item) => {
  return (
      <CarouselItem
          key={item.src}
          onExited={() => setAnimating(false)}
          onExiting={() => setAnimating(true)}
      >
          <img style={{height:"22rem", width:"38rem "}} src={item.base64} alt={item.altText} />
      </CarouselItem>
  );
});

  return (
    <div className="Home" style={{background:"#F5F5F5"}}>
    <Navbar></Navbar>
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url(${BackgroundImage})`,
        }}
      >
      </header>

      <section className="desc">
        {/* Hotel Name */}
        <h1 style={{fontSize:"5.5rem", textTransform: "uppercase"}} className="alt-font">{hotelDetail.hotel_name}</h1>

        {/* Hotel Address */}
        <p style={{fontSize:"1.4rem", fontWeight:"400"}}>{`${locality}, ${city}, ${state}, ${country}, ${pincode}`}</p>
        
        {/* Hotel Description */}
        {/* <p style={{marginTop:"3rem"}}>{hotelDetail.hotel_desc}</p> */}
        
        {/* Hotel Rating */}
        <div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
          <ReactStars
              count={5}
              value={4}
              size={50}
              edit={false}
              activeColor="#ffd700"
            />
        </div>
      </section>

      {/* AMENTIES */}
      <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
        {
          amenties.map((amenty)=>(
            <AmentiesCard data={amenty}></AmentiesCard>
          ))
        }
      </div>

      {/* TIMING */}
      <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
        <p style={{marginRight:"2rem", fontSize:"1rem", background:"black", padding:"10px", color:"#ffffff"}}>Check In Time: {hotelDetail.check_in}</p>
        <p style={{fontSize:"1rem", background:"black", padding:"10px", color:"#ffffff"}}>Check Out Time: {hotelDetail.check_out}</p>
      </div>

      {/* PHOTO ALBUM */}
      <section style={{display:"flex", justifyContent:"center", backgroundColor:"#ffffff", padding:"2rem"}} className="desc_main">
        <article className="descLeft" style={{width:"40%"}}>
          {/* <div className="bg-light"></div> */}
          <h1 className="alt-font" style={{fontWeight:"bold", fontSize:"1.5rem"}}>ABOUT US</h1>
          <p>
            {hotelDetail.hotel_desc}
          </p>
          {/* <Link to="/rooms">
            <button className="btn contrast">Discover More</button>
          </Link> */}
        </article>
        <div className="descRight" style={{width:"60%"}}>
        <div style={{
            // margin: 2 ,padding: 30
        }}>
            <Carousel previous={previousButton} next={nextButton}
              interval={2000}
                activeIndex={activeIndex}>
                <CarouselIndicators items={pics}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
        </div>
      </section>

      <Link to="/rooms" style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
                <button style={{backgroundColor:"#000000", color:"white"}}  className="btn contrast">Book Now!</button>
      </Link>

    </div>
  );
};

export default HotelPage;
