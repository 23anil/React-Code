import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import Payment from "./Payment";
import PamentStatus from "./PamentStatus";

function Locations() {
  const [paymentShow, setpaymentShow] = useState(false);
  const [PayStatusShow, setPayStatusShow] = useState(false);

  const [places] = useState([
    {
      p_Id: 1,
      p_Name: "Bangalore",
      p_Img:
        "https://static.toiimg.com/thumb/msid-52357529,width-550,height-433/52357529.jpg",
    },
    {
      p_Id: 2,
      p_Name: "Kashi",
      p_Img:
        "https://d3k1i85mml78tf.cloudfront.net/Blogs/1658946850086_post_image_1.jpg",
    },
    {
      p_Id: 3,
      p_Name: "LakshaDweep",
      p_Img: "https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg",
    },
    {
      p_Id: 4,
      p_Name: "Maldives",
      p_Img:
        "https://img.etimg.com/thumb/width-640,height-480,imgsize-2314793,resizemode-75,msid-106894287/news/india/easemytrip-ceo-on-instigating-india-maldives-row-they-wanted-india-and-its-tourist-out-we-only-/cms-14.jpg",
    },
    {
      p_Id: 5,
      p_Name: "Switzerland",
      p_Img:
        "https://s30876.pcdn.co/wp-content/uploads/Switzerland-e1634207571492-1170x630.jpg.optimal.jpg",
    },
    {
      p_Id: 6,
      p_Name: "Chennai",
      p_Img:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
    },
    {
      p_Id: 7,
      p_Name: "Mumbai",
      p_Img:
        "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
    },
    {
      p_Id: 8,
      p_Name: "Dubai",
      p_Img:
        "https://deih43ym53wif.cloudfront.net/dubai-palm-jumeirah-island-shutterstock_1291548640.jpg_3ab124c2b9.jpg",
    },
    {
      p_Id: 9,
      p_Name: "Ayodhya",
      p_Img:
        "https://images.news18.com/telugu/uploads/2022/10/1665893370_ram-mandir.jpg",
    },
    {
      p_Id: 10,
      p_Name: "Mathura",
      p_Img: "https://static.javatpoint.com/temples/images/prem-mandir.png",
    },
    {
      p_Id: 11,
      p_Name: "New-Delhi",
      p_Img:
        "https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg",
    },
    {
      p_Id: 12,
      p_Name: "Bangkok",
      p_Img:
        "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg",
    },
  ]);

  const [currentpage, setcurrentpage] = useState(1);
  const recordsPerpage = 6;
  const lastIndex = currentpage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const data = places.slice(firstIndex, lastIndex);

  function prePage() {
    if (currentpage !== firstIndex) {
      setcurrentpage(currentpage - 1);
    }
  }

  function nextPage() {
    if (currentpage !== lastIndex) {
      setcurrentpage(currentpage + 1);
    }
  }

  // ---------------------------
  // pack card data
  const [cardtypes] = useState([
    {
      Id:1,
      packName: "standard pack",
      Pack_Amount: "₹ 4,500 /-",
      feedback: [
        {
          f_name: "V_Kas",
          Img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },

        {
          f_name: "Ram",
          Img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
        {
          f_name: "Pikny",
          Img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content.Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem. ",
        },
        {
          f_name: "Tayshoo",
          Img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },
        {
          f_name: "Leyo",
          Img: "https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          f_name: "Sundar",
          Img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
      ],
    },
    {
      Id:2,
      packName: "Gold pack",
      Pack_Amount: "₹ 7,500 /-",
      feedback: [
        {
          f_name: "V_Kas",
          Img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },

        {
          f_name: "Ram",
          Img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
        {
          f_name: "Pikny",
          Img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content.Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem. ",
        },
        {
          f_name: "Tayshoo",
          Img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },
        {
          f_name: "Leyo",
          Img: "https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          f_name: "Sundar",
          Img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
      ],
    },
    {
      Id:3,
      packName: "Platinum pack",
      Pack_Amount: "₹ 10,500 /-",
      feedback: [
        {
          f_name: "V_Kas",
          Img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },

        {
          f_name: "Ram L K",
          Img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
        {
          f_name: "Pikny",
          Img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content.Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem. ",
        },
        {
          f_name: "Tayshoo",
          Img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content",
        },
        {
          f_name: "Leyo",
          Img: "https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content..",
        },
        {
          f_name: "Sundar",
          Img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
          feedback_data:
            "Some quick example text to build on the card title and make up the bulk of the card's content. Sunt dolor omnis harum totam nostrum laudantium quae unde illo veritatis quidem.",
        },
      ],
    },
  ]);

  let HidePaymentShow = () => {
    setpaymentShow(false);
  };

  let HidePayStatusShow = () => {
    setPayStatusShow(false);
  };

  return (
    <div>
      <div className="container-fluid p-0">
        <div
          className="position-fixed z-3 top-0 bg-white d-flex align-items-center justify-content-between"
          style={{
            height: "50px",
            width: "100%",
            boxShadow: "0px 3px 6px #3F9FA129",
          }}
        >
          <div className="ms-3" style={{ height: "25px", width: "150px" }}>
            <img src="utosia-2.png" alt="Nav-Logo" height={"30px"} />
          </div>
          <div className="me-4 " style={{ height: "25px", width: "50px" }}>
            <div className="dropdown">
              <button
                className=" mb-2 border-0 bg-white"
                type="button"
                title="Profile"
                data-bs-toggle="dropdown"
                style={{ height: "25px", width: "50px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-fill nav-profile-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/myBookings">
                    My Bookings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="..">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/loginpage">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid ps-2 pe-2 mt-5">
          <div className="row mt-4 m-0 " style={{ height: "35px", width: "100%" }}>
            <p className="fs-5 fw-semibold col-6 mb-0 ms-5 mt-4">
              Choose Location
            </p>
            <div
              className="row p-0 m-0 d-flex align-items-center border-bottom"
              style={{ height: "250px" }}
            >
              <div
                className="d-flex bg-warning-subtle flex-wrap justify-content-between align-items-center"
                style={{ height: "auto" }}
              >
                <div
                  className="location-page-indicator border rounded-circle "
                  onClick={prePage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="#07595B"
                    class="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </div>
                {data.map((val) => {
                  return (
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-end "
                      style={{
                        width: "150px",
                        height: "150px",
                        backgroundImage: `url(${val.p_Img})`,
                        backgroundSize: "cover",
                      }}
                      key={val.p_Id}
                    >
                      <button
                        className="rounded-2 border-0 pe-2 ps-2 pt-1 pb-1"
                        style={{
                          color: "#fff",
                          backgroundColor: "#097374",
                          fontSize: "14px",
                        }}
                      >
                        {val.p_Name}
                      </button>
                    </div>
                  );
                })}
                <div
                  className="location-page-indicator border rounded-circle "
                  onClick={nextPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="#07595B"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="row col-11 mt-4 ms-5 d-flex justify-content-center">
              <div className="row mt-4">
                <p className="fs-5 fw-semibold col-12 mb-0  ">
                  Choose Location
                </p>
              </div>
              {cardtypes.map((value) => {
                return (
                  <div key={value.Id}
                    className="row col-11 mt-3 mb-2
               border border-dark-subtle rounded-4 d-flex justify-content-evenly"
                  >
                    <div
                      className="col-4 text-center mt-2 mb-2 pb-5"
                      style={{ borderRight: "2px solid #064D4F" }}
                    >
                      <p className="fs-3 fw-semibold text-center">
                        {value.packName}
                      </p>
                      <p className="fs-1 fw-bold mb-5">{value.Pack_Amount}</p>
                      <button
                        type="button"
                        class="btn text-white ps-5 pe-5"
                        style={{ backgroundColor: "#064D4F", width: "80%" }}
                        onClick={() => setpaymentShow(true)}
                      >
                        Book Now
                      </button>
                    </div>
                    <div
                      className="col-4 text-start mt-2 mb-2 pb-5"
                      style={{ borderRight: "2px solid #064D4F" }}
                    >
                      <p className="fs-4 fw-semibold mb-0">Includes</p>
                      <ul>
                        <li
                          className="fw-semibold mb-2 "
                          style={{ fontSize: "12px" }}
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing{" "}
                        </li>
                        <li
                          className="fw-semibold lh-base mb-2"
                          style={{ fontSize: "12px" }}
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Alias nobis eius sapiente temporibus quos minus
                          nemo beatae non! Sunt dolor omnis harum totam nostrum
                          laudantium quae unde
                        </li>
                        <li
                          className="fw-semibold mb-2"
                          style={{ fontSize: "12px" }}
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing{" "}
                        </li>
                        <li
                          className="fw-semibold mb-2 "
                          style={{ fontSize: "12px" }}
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing{" "}
                        </li>
                        <li
                          className="fw-semibold lh-base mb-2"
                          style={{ fontSize: "12px" }}
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Alias nobis eius sapiente temporibus quos minus
                          nemo beatae non! Sunt dolor omnis harum totam nostrum
                          laudantium quae unde
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <p className="fs-4 fw-semibold mb-0 ">Feedback</p>
                      <div
                        className="overflow-y-scroll mb-3 mt-2  "
                        style={{ height: "300px" }}
                      >
                        <div className="bg-primary-subtle d-flex flex-wrap justify-content-evenly ">
                          {value.feedback.map((val) => {
                            return (
                              <div
                                className="card mb-2 "
                                style={{ width: "45%", height: "10%" }}
                              >
                                <div className="card-body ">
                                  <div
                                    className="d-inline-block position-avs"
                                    style={{
                                      height: "20px",
                                      width: "20px",
                                      borderRadius: "20px",
                                      backgroundColor: "lightblue",
                                    }}
                                  >
                                    <img
                                      src={val.Img}
                                      alt="image01"
                                      height={"100%"}
                                      width={"100%"}
                                      style={{ borderRadius: "50%" }}
                                    />
                                  </div>
                                  <h5 className="card-title d-inline-block ms-3 fs-6 w-50">
                                    {val.f_name}
                                  </h5>
                                  <p
                                    className="card-text mb-0 "
                                    style={{ fontSize: "10px" }}
                                  >
                                    {val.feedback_data}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Payment
        paymentShow={paymentShow}
        HidePaymentShow={HidePaymentShow}
        setPayStatusShow={setPayStatusShow}
      />
      <PamentStatus
        PayStatusShow={PayStatusShow}
        HidePayStatusShow={HidePayStatusShow}
      />
    </div>
  );
}

export default Locations;
