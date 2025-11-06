import React, { useEffect, useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
const AdminSoldProperty = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/admin-sold-list');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  } 
  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1 className='text-center text-danger'>AdminPropertySoldList</h1>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th>Sr.No.</th>
                <th>Name </th>
                <th> Email </th>
                <th> Contact </th>
                <th>Title  </th>
                <th>Price  </th>
                <th>Area  </th>
                <th>Location  </th>
                <th> Media </th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item,index) => {
                  console.log(item,"loop");
                  
                  return (<>
                    <tr>
                      <td>{index+1}</td>
                      <td>{item?.name} </td>
                      <td> {item?.email}  </td>
                      <td> {item?.contact}   </td>
                      <td>{item?.title}    </td>
                      <td>{item?.price}    </td>
                      <td>{item?.area}    </td>
                      <td>{item?.location}    </td>
                      <td><img  height="60" width="100" src={`http://localhost:9000/img/${item?.pic}`} alt=''/>    </td>
                    </tr>
                  </>)
                })
              }
              
            </tbody>
          </table>
          {data?.length==0 && <p className='text-center'>No Record Found!</p>}
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  )
}

export default AdminSoldProperty
