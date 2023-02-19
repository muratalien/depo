import { useState } from "react";
import "./App.css";
import Movie from "./components/Depot";

function App() {

  return (
    <div className="App">
      <div className="container">
       <div className="row justify-content-center">
       </div>
       <div className="row my-5">
        <h6>WELCOME TO DEPOT</h6>
        <h1 className="product-text">The best way to make news is to announce a new category, not a new product.</h1>
       </div>
       <div className="row mt-5">
        <Movie img='https://fastly.picsum.photos/id/866/300/200.jpg?hmac=vwkhhp_0HQtgJfxWytDiH1t2GX4YyYyWs3_18hlicBY' time='02.02.2017.' header='OUR PERSONAL DEPARTMENT' />
        <Movie img='https://fastly.picsum.photos/id/677/300/200.jpg?hmac=UxocKgdm2QpboJMxv-gL5iPfoOjMUfucjq1QbrgWASc' time='02.02.2017.' header='SUCCESS HAS IT’S ADVANTAGE' />
        <Movie img='https://fastly.picsum.photos/id/452/300/200.jpg?hmac=xs5paoQZddwd4waMK25K9VN_AI0jITH7aS4CX_Gucb0' time='02.02.2017.' header='SKY IS THE LIMIT' />
        <Movie img='https://fastly.picsum.photos/id/866/300/200.jpg?hmac=vwkhhp_0HQtgJfxWytDiH1t2GX4YyYyWs3_18hlicBY' time='02.02.2017.' header='OUR PERSONAL DEPARTMENT' />
        <Movie img='https://fastly.picsum.photos/id/677/300/200.jpg?hmac=UxocKgdm2QpboJMxv-gL5iPfoOjMUfucjq1QbrgWASc' time='02.02.2017.' header='SUCCESS HAS IT’S ADVANTAGE' />
        <Movie img='https://fastly.picsum.photos/id/452/300/200.jpg?hmac=xs5paoQZddwd4waMK25K9VN_AI0jITH7aS4CX_Gucb0' time='02.02.2017.' header='SKY IS THE LIMIT' />
       </div>
      </div>
      <footer id="footer">
        <div class="container">
            <div class="footer-info row pb-5">
                <div class="col-lg-3">
                    <div class="footer-menu">
                        <h6>CUSTOMER SERVICE</h6>
                        <ul class="footer-menu-list">
                            <li class="footer-menu-item">Help & Contact Us</li>
                            <li class="footer-menu-item">Returns & Refunds</li>
                            <li class="footer-menu-item">Online Stores</li>
                            <li class="footer-menu-item">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-menu">
                        <h6>COMPANY</h6>
                        <ul class="footer-menu-list">
                            <li class="footer-menu-item">What We Do</li>
                            <li class="footer-menu-item">Available Services</li>
                            <li class="footer-menu-item">What We Do</li>
                            <li class="footer-menu-item">FAQ Page</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-menu">
                        <h6>SOCIAL MEDIA</h6>
                        <ul class="footer-menu-list">
                            <li class="footer-menu-item">Twitter</li>
                            <li class="footer-menu-item">Instagram</li>
                            <li class="footer-menu-item">Tumblr</li>
                            <li class="footer-menu-item">Pinterest</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-menu">
                        <h6>PROFILE</h6>
                        <ul class="footer-menu-list">
                            <li class="footer-menu-item">My Account</li>
                            <li class="footer-menu-item">Checkout</li>
                            <li class="footer-menu-item">Order Tracking</li>
                            <li class="footer-menu-item">Help & Support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="footer-sec">
                    <div class="copy-write">
                    © 2021 Qode Interactive, All Rights Reserved
                    </div>
                    <ul class="footer-social-list">
                        <li class="footer-social-item">Follow Us </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
    
  );
}

export default App;
