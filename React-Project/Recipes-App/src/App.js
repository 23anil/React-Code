import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Appbar from "./Components/Appbar";
import React, { Suspense, useState } from "react";
// import DisplayFood from "./Components/DisplayFood";
import Sidebar from "./Components/Sidebar";
const LazyP = React.lazy(() => import("./Components/DisplayFood"));
function App() {
  const [Racipes] = useState([
    {
      name: "Gulab jamun",
      image:
        "https://media.istockphoto.com/id/1187919400/photo/indian-dessert-or-sweet-dish-gulab-jamun-in-bowl-on-wooden-background.jpg?s=2048x2048&w=is&k=20&c=h-Cb6-gW5s0DqiYMIWnakMpPALb6z_vF2cyTOEoTmIE=",
      description:
        "  This classic Indian dessert usually enjoyed during festive occasions, might seem impossible to make at home but can actually be easily made at home without any fuss. Gulab meaning rose and Jamun meaning berry makes for Gulab Jamun as a berry-sized ball dunken in rose flavoured sugar syrup. It can be served hot with vanilla ice-cream or just a stand-alone chilled dish.",
      No: "1",
    },
    {
      name: "Veg Biryani",
      image:
        "https://media.istockphoto.com/id/469966265/photo/vegetable-biryani.jpg?s=2048x2048&w=is&k=20&c=ZV11uXBPDbvz_eiHGEzLqkPNvHfN_-WuNhZm_C7JLqE=",
      description:
        "This Hyderabadi Veg Biryani recipe is an authentic Indian vegetarian dish packed full of your favorite rice, veggies, and spices. Made with patience and lots of love, this delicious veg dum biryani requires both care and attention to detail. The savory flavors in your first bite are well worth the time and effort spent in the kitchen.",
      No: "2",
    },
    {
      name: "Upma",
      image:
        "https://media.istockphoto.com/id/1319623141/photo/upma-indian-breakfast-stock-image.jpg?s=2048x2048&w=is&k=20&c=sObRimXLIOIPEJxncclhpYjN0y8ecG5RYP7H6Jd-CYg=",
      description:
        "Upma is a popular South Indian breakfast made with cream of wheat or semolina flour (called rava or suji locally), veggies, spices and herbs. The upma recipe I share here is adapted from my mom’s recipe and continues to be a favorite in my home. The ingredients used to flavor the rava upma (also called suji ka upma) give it a deliciously satisfying taste that will make this dish one of your new preferred go-to breakfasts.",
      No: "3",
    },
    {
      name: "Puliyogare",
      image:
        "https://media.istockphoto.com/id/1277586492/photo/temple-puliyodharai-puliyogare-tamarind-rice-tangy-and-spicy-south-indian-rice-tamarind-rice.jpg?s=2048x2048&w=is&k=20&c=WfEdOgcN4aHDN6styXK5wZc5c93SSSRtV4h3AzyA-fY=",
      description:
        "puliyogare recipe | puliyogare gojju | tamarind rice – karnataka style with step by step photo and video recipe. traditional rice-based recipes are an integral part of south indian cuisine. each state of south india has its own unique traditional and authentic recipe depending upon the geography. one such flavoured and a traditional rice-based recipe is puliyogare recipe made with spiced tamarind extract.",
      No: "4",
    },
]);

  const [selectedDish, setselectedDish] = useState({});
  const [isShow, setisShow] = useState(false);

  return (
    <div className="App">
      <Appbar />
      <div className="d-flex content-div">
        <Sidebar
          Racipes={Racipes}
          setselectedDish={setselectedDish}
          setisShow={setisShow}
        />
       <Suspense fallback={<h1>Loading...</h1>}>
       {isShow &&  <LazyP selectedDish={selectedDish} />
}
     
        </Suspense> 
      
      </div>
    </div>
  );
}

export default App;
