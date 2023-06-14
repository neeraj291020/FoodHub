import React from "react";
function Footer(){
    const date =new Date();

    return (
        
       <footer className="gcd ">
  <strong> © {date.getFullYear()} Made With ❤️ By Neeraj Chanchlani </strong>
  </footer>
    )
}
export default Footer;