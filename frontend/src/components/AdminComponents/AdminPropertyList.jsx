import React, { useEffect, useState } from 'react';
import { FaVectorSquare, FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';
import NavBar from '../landingComponents/NavBar';
import axios from 'axios';
import { FaRupeeSign } from "react-icons/fa";

const AdminPropertyList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/property-list');
      if (response?.data?.code === 200) {
        setListData(response?.data?.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // You can add a confirmation dialog here for a better user experience
      // const confirmDelete = window.confirm("Are you sure you want to delete this property?");
      // if (!confirmDelete) return;

      await axios.delete(`http://localhost:9000/api/property-list/${id}`);
      // After successful deletion, refetch the data to update the list
      fetchData();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='bg-light py-5'>
        <div className='text-center'>
          <div className='text-primary fw-bold text-uppercase fs-6 mb-2'>Properties</div>
          <h2 className='fs-1 fw-bold text-dark'>Featured Listings</h2>
        </div>
        <div className='container'>
          <div className='row py-5 g-4'>
            {listData?.map((item) => (
              <div key={item._id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className='card h-100 shadow-lg border-0 rounded-3 overflow-hidden'>
                  <img
                    src={`http://localhost:9000/img/${item?.pic}`}
                    className='card-img-top w-100'
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt={item?.title}
                  />
                  <div className='card-body d-flex flex-column'>
                    {/* Price */}
                    <p className='text-success fw-bold fs-5 mb-1'><FaRupeeSign />{item?.price}/Month</p>

                    {/* Title & Location */}
                    <h5 className='card-title text-dark fw-bold mb-2'>{item?.title}</h5>
                    <div className='d-flex align-items-center text-muted mb-3'>
                      <FaMapMarkerAlt className='me-2 text-primary' />
                      <span>{item?.location || 'Location not specified'}</span>
                    </div>

                    {/* Description */}
                    <p className='card-text text-muted flex-grow-1' style={{ maxHeight: '72px', overflow: 'hidden' }}>
                      {item?.description}
                    </p>

                    {/* Features Row */}
                    <div className='mt-3 pt-3 border-top d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center text-muted'>
                        <FaVectorSquare className='me-2 text-primary' />
                        <span>{item?.area || 'N/A'} sqft</span>
                      </div>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => handleDelete(item._id)}
                      >
                        <FaTrashAlt className='me-1' /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {listData?.length === 0 && (
              <div className='col-12'>
                <h1 className='text-center text-danger fw-bold'>No Record Found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPropertyList;