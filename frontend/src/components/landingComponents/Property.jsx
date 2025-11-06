import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BiRupee } from "react-icons/bi";
import { FaVectorSquare, FaMapMarkerAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const Property = () => {
  const [listData, setListData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
    if (response?.data?.code === 200) {
      setListData(response?.data?.data);
    }
  };

  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (!userData?._id) {
      navigate('/login');
      return;
    }
    const response = await axios.post('http://localhost:9000/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code === 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'error'
      });
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <NavBar />}
      <div className='row property py-5'>
        <div className="text-center">
          <div className="tagline">Properties</div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row py-3 px-3'>
            {listData?.map((item, index) => (
              <div key={index} className='col-sm-3 px-3 mb-4'>
                <div className="card mx-auto shadow-lg border border-0">
                  <img
                    src={`http://localhost:9000/img/${item?.pic}`}
                    className="card-img-top img-fluid featuredimg"
                    alt={item?.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mycolor2"><b>{item?.title}</b></h5>
                    <p className='mycolor1 d-flex align-items-center'>
                      <BiRupee className="me-1" />
                      <b>{item?.price}</b>/Month
                    </p>
                    <p className="card-text featuredp d-flex align-items-center">
                      <MdDescription className="me-2" />
                      {item?.description}
                    </p>
                    <div className='d-flex justify-content-between mt-3'>
                      <div className='d-flex align-items-center featuredp'>
                        <FaMapMarkerAlt className="me-2" />
                        <span>{item?.location}</span>
                      </div>
                      <div className='d-flex align-items-center featuredp'>
                        <FaVectorSquare className="me-2" />
                        <span>{item?.area} sq ft</span>
                      </div>
                    </div>
                    <div className='text-center mt-3'>
                      <button onClick={() => handleBuy(item?._id)} className='btn btn-outline-danger w-100'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {listData?.length === 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>
  );
};

export default Property;