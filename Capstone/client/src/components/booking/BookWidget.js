import React, { useState } from 'react'
import styles from "./BookWidget.module.css"
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import City from '../booking/city';


export default function BookWidget() {
  const [inputStart, setInputStart] = useState("01/08/2020")
  const [inputFinish, setInputFinish] = useState("01/08/2020")
  
  const handleEvent = (event, picker) => {
    setInputStart(picker.startDate.format("DD/MM/YYYY"));
    setInputFinish(picker.endDate.format("DD/MM/YYYY"));
  };
  
  return (
    <div>
      <div className="row justify-content-center flex-wrap">
                <div > 
                  <City></City>
                </div>
                <div id={styles.homeCalender}>
                  <DateRangePicker autoUpdateInput={false} startDate={inputStart} endDate={inputFinish} locale={{ format: "DD/MM/YYYY" }} onApply={handleEvent} autoApply={true}>
                    <div>
                      <span>{inputStart} </span>
                      <span>-</span>
                      <span>{inputFinish}</span>
                    </div>
                  </DateRangePicker>
                </div>
                
                <div id={styles.homeRoom}>
                  <input type="number" placeholder='Rooms'></input>
                </div>
                
                <div id={styles.homeRoom}>
                  <input type="number" placeholder='Guests'></input>
                </div>

                {/* <div id={styles.homebutton} style={{ height: "67px" }}>
                  <button id={styles.homebutton} >
                    Search
                  </button>
                </div> */}

              </div>
    </div>
  )
}
