import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Rating from "../../Rating";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

export default function HotelCard(props) {

  useEffect (() =>{
    console.log(props.photos);  
  },[]);

  return (
    <div style={{margin: "1.5rem"}}>
      {/* <Rating/> */}

      <Card style={{width: "20rem", padding: "0.5rem"}}>
        <Card.Img
          variant="top"
          src= {props.photos[0].base64} 
          style={{height:"30vh",width:"100%"}}
        />

        <Card.Body style={{padding: "0.5rem", margin: "0 auto"}}>
          <Card.Title style={{padding: "0rem"}}>{props.hotel_name} </Card.Title>
          <Card.Text style={{padding: "0rem"}}>{props.city}.</Card.Text>
          <Card.Title style={{padding: "0rem"}}>
            <div
              style={{
                width: "110%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ReactStars
                count={5}
                value={props.hotel_rating}
                size={22}
                edit={false}
              />
              <Card.Link href="#" style={{fontSize: "16px", marginTop: "4px"}}>
                {" "}
                {props.user_rating} User Rating{" "}
              </Card.Link>
            </div>
          </Card.Title>
        </Card.Body>

        <div style={{padding: "0rem"}} className="list-group-flush">
          <p>Rs. {props.price} - Free Cancellation</p>
        </div>
        <Card.Body>
          <Link to={`/hotel/${props.id}`}>Read More</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
