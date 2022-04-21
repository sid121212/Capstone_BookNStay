import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Rating from '../../Rating'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export default function RoomCard(props) {
  return (
    <div>
      {/* <Rating/> */}

      <Card style={{width: "20rem"}}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Card.Body>
            <Card.Title>Room Type</Card.Title>
        
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.price} Room Description </ListGroupItem>
            </ListGroup>

            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.price} Number of Beds: 4 </ListGroupItem>
                <ListGroupItem>{props.price} Number of People allowed: 4 </ListGroupItem>
                <ListGroupItem>{props.price} Amenty1, Amenty2, Amenty3 </ListGroupItem>
                <ListGroupItem>{props.price} Price: 3000 </ListGroupItem>
                <ListGroupItem>{props.price} Available Rooms: 30 </ListGroupItem>
            </ListGroup>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#"> {props.user_rating}  </Card.Link>
          <Link to={`/hotel/${props.id}`} style={{backgroundColor:"red"}}>Book Now</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
