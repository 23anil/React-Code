import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesList() {
  let navigator = useNavigate();

  let SelectTheater = () => {
    navigator("/theater");
  };

  let Loginpage = () => {
    navigator("/login");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [movies] = useState([
    "https://www.filmibeat.com/fanimg/movie/20755/kaatera-photos-images-2023102359725400.jpg",
    "https://www.filmibeat.com/img/popcorn/movie_posters/upadhyaksha-kan-20221007120423-1560.jpg",
    "https://pbs.twimg.com/media/FNPi0iVVIAYFdtH.jpg:large",
    "https://pbs.twimg.com/media/F_Wyejga0AAAYWA.jpg:large",
    "https://m.media-amazon.com/images/M/MV5BMDhhMjBlMWYtMDVlMy00ZjM3LTg3MTUtZDg0NjA0YzcxOGY4XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/c/b/d/small-pathan-shah-rukh-khan-bollywood-hindi-movie-poster-small-original-imagmt3dgxh7avyg.jpeg?q=20",
    "https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20",
    "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU",
    "https://onlookersmedia.in/wp-content/uploads/2020/03/Master-Kannada-First-Look-Poster-Thalapathy-Vijay-2.jpg",
    "https://filmfare.wwmindia.com/content/2023/sep/salaar11695982515.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71FlIOW3lCL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91zTlD7AY1L.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi45u3INRr1Zhf_Oql78e03me6v74Q3hqXpQ&usqp=CAU",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
  ]);
  return (
    <div style={{ backgroundColor: "#272525", height: "auto" }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="nav-bar col-12"
            style={{ position: "sticky", top: "0" }}
          >
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
        <div
          className="row mt-1"
          style={{ height: "300px",width:"90%", backgroundColor: "lightskyblue" }}
        >
          <Slider {...settings}>
            <div
              style={{
                height: "100px",
                width: "80%",
                backgroundColor: "lightpink",
              }}
            >
              1
            </div>

            <div
              style={{
                height: "100px",
                width: "90%",
                backgroundColor: "lightpink",
              }}
            >
              2
            </div>
          </Slider>
        </div>
        <div className="row">
          <p
            className="mt-2 ms-5 fs-5"
            style={{
              color: "white",
              fontFamily: "Sofia pro, sans-serif",
              width: "120px",
            }}
          >
            Movie lists
          </p>
          <div className="movies-div">
            {movies.map((val, idx) => {
              return (
                <Card
                  key={idx}
                  style={{ width: "14rem", borderRadius: "15px" }}
                  className="d-flrx align-items-center justify-content-end mb-5 border-0"
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "280px", borderRadius: "15px" }}
                    src={val}
                  />
                  <button
                    className="btn position-absolute border mb-2 movie-card-btn"
                    onClick={SelectTheater}
                  >
                    Book Now
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
