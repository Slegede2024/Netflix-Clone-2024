import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"



const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Inventor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>service_code</p>
           </div>
           <div className='copy-write'>
            &copy;1997-2025 Netflix,Inc.
           </div>  
      </div>
    </div>
  );
}

export default Footer
