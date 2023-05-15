import Header from "../../components/header/Header";
import Navbar from "./../../components/navbar/Navbar";
import Featured from "./../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import TourProperties from "../../components/tourProperties/TourProperties";
import MailList from "./../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer  mt-5 d-flex flex-column align-items-center gap-5">
        <div class="myMainDiv" >
        <h1>Offers</h1>
        <p>Promotions, deals and special offers for you</p>
        <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card myDive myDive1">
      <div class="card-body">
        <h5 class="card-title">Escape for a while</h5>
        <p class="card-text">
Enjoy the freedom of a monthly stay on Booking.com</p>
        <a href="#" class="btn btn-primary">Discover monthly stays</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card myDive myDive2">
      <div class="card-body">
        <h5 class="card-title">The great getaway, your way</h5>
        <p class="card-text">The great getaway, your way
Save at least 15% </p>
        <a href="#" class="btn btn-primary">Find Getaway Deals</a>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
</div>

<PropertyList />
{/* second part  */}
<div class="myMainDiv" >
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card myDive myDive3">
      <div class="card-body1" row>
        <h5 class="card-title my-text">Cairo  <image src="https://orig00.deviantart.net/936e/f/2013/330/7/4/flag_of_egypt_hd_wallpaper_by_gultalibk-d6vpi1u.png" class="logo"></image></h5>
      </div>
    </div>
  </div>
 
  <div class="col-sm-6">
    <div class="card myDive myDive4">
      <div class="card-body1">
        <h5 class="card-title my-text">Sharm El Sheikh</h5>
      </div>
    </div>
  </div>
 
</div>
<br></br>
<br></br>
 
{/* third part */}
<div class="row">
 
<div class="col-sm-4  mb-3 mb-sm-0">
    <div class="card myDive myDive5">
      <div class="card-body1">
        <h5 class="card-title my-text">Hurghada</h5>
      </div>
    </div>
  </div>
 
  <div class="col-sm-4  mb-3 mb-sm-0">
    <div class="card myDive myDive6">
      <div class="card-body1">
        <h5 class="card-title my-text">Ain Sokhna</h5>
      </div>
    </div>
  </div>
 
  <div class="col-sm-4  mb-3 mb-sm-0">
    <div class="card myDive myDive7">
      <div class="card-body1">
        <h5 class="card-title my-text">Istanbul</h5>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
 
<h3>Browse by property type</h3>
<br></br>
<div class="row">
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Hotels</h5>
  </div>
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Apartments</h5>
  </div>
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Resorts</h5>
  </div>
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Villas</h5>
  </div>
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Cottages</h5>
  </div>
 
  <div class="col-sm-2  mb-3 mb-sm-0">
    <div class="card myDive">
    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" class="card-img-top" alt="..."></img>
    </div>
    <h5 class="card-title my-text">Glamping</h5>
  </div>

 
</div>
<br></br>
<br></br>
 
</div>

 
    
        <h1 className="homeTitle"></h1>
  
        <h1 className="homeTitle">Homes guests love</h1>
        <TourProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
 
export default Home;