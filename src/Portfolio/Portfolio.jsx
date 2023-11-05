import React from 'react'
import img1 from "../Assets/Images/poert1 (1).png"
import img2 from "../Assets/Images/port2 (1).png"
import img3 from "../Assets/Images/port3 (1).png"



export default function Portfolio()
{
    return <>
        <div className="portfolio text-center ">
            <div className="container ">
                <h3 className="p-3 fw-bold textColor fs-3 mt-2">PORTFOLIO COMPONENT</h3>
                <i className="fa-solid fa-star textColor mt-2 fs-3"></i>
                <hr />

                <div className="row gy-4 my-5">
                  <div className="col-md-4">
                    <div className="item">
                    <img src={img1} className="w-100" alt="" />
                    <div className="layer d-flex align-items-center justify-content-center">
                      <i className='fa-solid fa-plus text-white fa-6x'></i>
                    </div>

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                    <img src={img2} className="w-100" alt="" />
                    <div className="layer d-flex align-items-center justify-content-center">
                      <i className='fa-solid fa-plus text-white fa-6x'></i>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                    <img src={img3} className="w-100" alt="" />
                    <div className="layer d-flex align-items-center justify-content-center">
                      <i className='fa-solid fa-plus text-white fa-6x'></i>
                    </div>
                    </div>
                  </div>
                
              
                </div>
              
              
             
            </div>
        </div>

    </>
}