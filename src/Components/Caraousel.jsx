import React from "react";
function Caraousel(){
    return(
        <div className="container my-3">
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/q/v/p58421-16295734196121512be5310.jpg?w=400" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://b.zmtcdn.com/data/pictures/2/19830002/7431d41972b4819510ecbbbc43f92c56.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.hotelierindia.com/cloud/2021/11/22/Ru1oBizU-interiorshot1_1.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}
export default Caraousel;