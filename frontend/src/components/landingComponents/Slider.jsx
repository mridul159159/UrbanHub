import React from 'react'
import { FaHome } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
const Slider = () => {
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="fs-5">
                <FaHome className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['Discover Most Suitable Property.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className='mt-3'>
                Find a variety of properties that suit you very easilty 
                Forget all difficulties in finding a residence for you.
              </p>
              <button className="btn btn1">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/mgg.jpg"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
