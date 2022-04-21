

import React, { useState } from "react";

export const Checkbox = () => {
  // state={

  //     chkclick = (e)=>{
  //         var {name,checked}=e.target;
  //         this.setState((e)=>{

  //         });
  //     }
  // }


  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
    
  return (
    <>
      <div className="">
        <div className="">
          <h3 className="">
            Choose all the facilities your hotel offer !
          </h3>
  
          <form>
            <div className="">
              <div className="">
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Elevator"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Elevator
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="DryCleaning"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      DryCleaning
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Housekeeping"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Housekeeping
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Parking"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Parking
                  </label>
                </div>
              </div>
              <div className="">
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="SmokingRoom"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      SmokingRoom
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Indoor Sports"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Indoor Sports
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Lounge"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Lounge
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Bar"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Bar
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Cafe"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Cafe
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Gym"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Gym
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="Spa and Salon"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      Spa and Salon
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="CCTV"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      CCTV
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="HomeTheatre"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      HomeTheatre
                  </label>
                </div>
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    name="languages"
                    value="KidsClub"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className=""
                    htmlFor="flexCheckDefault"
                  >
                      KidsClub
                  </label>
                </div>
              </div>
            </div>
  
            <div className="">
              <label htmlFor="exampleFormControlTextarea1">
                {" "}
              </label>
              <textarea
                className=""
                name="response"
                value={userinfo.response}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
