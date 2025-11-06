import React, { useEffect } from 'react';
import { FaUser, FaEnvelope, FaKey, FaMapMarkerAlt } from 'react-icons/fa'; // FaMapMarkerAlt is now imported
import { IoMdCall } from 'react-icons/io';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from '../landingComponents/NavBar';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup.string().required('Contact number is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
  address: yup.string().required('Address is required'),
  profile: yup.mixed().required('Profile picture is required'),
});

const UserProfile = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (userData) {
      setValue('name', userData.name);
      setValue('email', userData.email);
      setValue('contact', userData.contact);
      setValue('password', userData.password);
      setValue('address', userData.address);
      // Note: You can't directly set a file input's value, but the field can be pre-filled
      // with a placeholder or handled differently in the UI. For now, the field is left empty.
    }
  }, [setValue]);

  const handleRegister = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('contact', data.contact);
      formData.append('password', data.password);
      formData.append('address', data.address);
      formData.append('profile', data.profile[0]);

      const response = await axios.post('http://localhost:9000/api/user-register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Swal.fire({
          title: 'Registration Successful',
          text: response?.data?.message,
          icon: 'success',
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        title: 'Registration Failed',
        text: error.response?.data?.message || 'An error occurred during registration.',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className='bg-light py-5'>
        <div className='container my-5'>
          <h2 className='text-center fw-bold text-dark mb-4'>User Profile</h2>
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-8'>
              <div className='card p-4 shadow-lg border-0 rounded-4'>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className='row g-4'>

                    {/* Name Field */}
                    <div className='col-md-6'>
                      <label htmlFor='name' className='form-label fw-bold'>Your Name</label>
                      <div className='input-group'>
                        <span className='input-group-text'><FaUser /></span>
                        <input id='name' type='text' {...register('name')} className='form-control' placeholder='Enter your name' />
                      </div>
                      {errors.name && <p className='text-danger mt-1'>{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className='col-md-6'>
                      <label htmlFor='email' className='form-label fw-bold'>Your Email</label>
                      <div className='input-group'>
                        <span className='input-group-text'><FaEnvelope /></span>
                        <input id='email' disabled type='email' {...register('email')} className='form-control bg-light' placeholder='Enter your email' />
                      </div>
                      {errors.email && <p className='text-danger mt-1'>{errors.email.message}</p>}
                    </div>

                    {/* Contact Field */}
                    <div className='col-md-6'>
                      <label htmlFor='contact' className='form-label fw-bold'>Phone Number</label>
                      <div className='input-group'>
                        <span className='input-group-text'><IoMdCall /></span>
                        <input id='contact' type='tel' {...register('contact')} className='form-control' placeholder='Enter phone number' />
                      </div>
                      {errors.contact && <p className='text-danger mt-1'>{errors.contact.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className='col-md-6'>
                      <label htmlFor='password' className='form-label fw-bold'>Password</label>
                      <div className='input-group'>
                        <span className='input-group-text'><FaKey /></span>
                        <input id='password' type='text' {...register('password')} className='form-control' placeholder='Password' />
                      </div>
                      {errors.password && <p className='text-danger mt-1'>{errors.password.message}</p>}
                    </div>

                    {/* Address Field */}
                    <div className='col-md-6'>
                      <label htmlFor='address' className='form-label fw-bold'>Address</label>
                      <div className='input-group'>
                        <span className='input-group-text'><FaMapMarkerAlt /></span>
                        <input id='address' type='text' {...register('address')} className='form-control' placeholder='Enter Your Address' />
                      </div>
                      {errors.address && <p className='text-danger mt-1'>{errors.address.message}</p>}
                    </div>

                    {/* Profile Picture Field */}
                    <div className='col-md-6'>
                      <label htmlFor='profile' className='form-label fw-bold'>Profile Picture</label>
                      <div className='input-group'>
                        <span className='input-group-text'><MdAddPhotoAlternate /></span>
                        <input id='profile' type='file' {...register('profile')} className='form-control' />
                      </div>
                      {errors.profile && <p className='text-danger mt-1'>{errors.profile.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className='col-12 text-center mt-4'>
                      <button type='submit' className='btn btn-primary w-50 py-2 fw-bold'>
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;