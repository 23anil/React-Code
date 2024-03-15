import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectTheater() {
  let navigator = useNavigate();

  let Loginpage = () => {
    navigator("/login");
  };
  
  const [time, settime] = useState(false)
  
  const [showSeats, setshowSeats] = useState(false);

  const [showtimes] = useState([{id:1,firstShow:"10:00 Am",btnED:false},
  {id:2,firstShow:"02:00 Pm",btnED:false},
  {id:3,firstShow:"05:00 Pm",btnED:false},
  {id:4,firstShow:"10:00 Pm",btnED:false}])

  const [pvrs] = useState([
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPyeSsIK66qBZWqYjSePlyQHUfvcqm4014w&usqp=CAU",
      theaterName: "Pallavi",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPyeSsIK66qBZWqYjSePlyQHUfvcqm4014w&usqp=CAU",
      theaterName: "Urvashi",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPyeSsIK66qBZWqYjSePlyQHUfvcqm4014w&usqp=CAU",
      theaterName: "Prasanna",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPyeSsIK66qBZWqYjSePlyQHUfvcqm4014w&usqp=CAU",
      theaterName: "Ashoka",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPyeSsIK66qBZWqYjSePlyQHUfvcqm4014w&usqp=CAU",
      theaterName: "Gopal",
    },
  ]);
  
  return (
    <div style={{ backgroundColor: "#272525", height: "100%" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="nav-bar col-12">
            <div className="navbar-logo ms-3">
              <img
                src="Group 9.png"
                alt="logoimage"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="navbar-nav-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
                color="white"
                onClick={Loginpage}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center ">
          <div className="date-div col-3 col-sm-3 col-md-3 ms-5 ">
            <input type="date" className="dateField" placeholder="date" />
          </div>
        </div>
        <div className="row mt-5" style={{ padding: "0px" }}>
          <p className="theater-outer-div-label mb-3">choose theater</p>
          <div className="theaters">
            {pvrs.map((val) => {
              return (
                <div
                  key={val.id}
                  className="card ms-3 bg-transparent border-0"
                  style={{ width: "12rem" }}
                  onClick={()=>{settime(true)}}
                > 
                    <img
                      src={val.image}
                      className="card-img-top rounded-3 theaters-image"
                      alt="..."
                      style={{ height: "100px" }}
                    />
                  <p className="card-title text-light">{val.theaterName}</p>
                </div>
              );
            })}
          </div>
        </div>
        {time && (
          <div className="row mt-5 d-flex justify-content-end">
            <p className="show-time-label col-12" style={{ width: "94%" }}>
              Show time
            </p>
            <div className="times-btn-div">
              {showtimes.map((val)=>{
                return(<button className="times-btn" key={val.id} disabled={val.btnED}>{val.firstShow}</button>)
              })}
            </div>
            <button className="times-btn me-5 mt-5" style={{height:"40px",width:"80px",borderRadius:"6px"}} onClick={()=>{setshowSeats(true)}}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectTheater;
