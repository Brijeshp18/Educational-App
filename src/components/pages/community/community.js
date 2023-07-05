import React from "react";
import "./community.css";
import CI from '../../../assets/tc.png'
function community() {
  const communityBtn=()=>{
    window.open("https://www.whatsapp.com","_blank");
  }
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={CI} alt="" />
        </div>
        <div className="start-content">
          <h2>Join Our Free Community</h2>
          <p>
            Unlock the Power of Knowledge and innovation by joining our vibrant
            and free whatsapp tech community
          </p>
          <button onClick={communityBtn} className="register-btn">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default community;
