import React, { useState, useEffect } from 'react'
import { fetchData } from '../service/utils/FetchData'
import RiseLoader from 'react-spinners/RiseLoader'
import axios from 'axios'
import './Admin.css'

const AdminView = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const subAdminId = '1'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetchData('/admin/get-requests')
        const customersData = response.data
        setCustomers(customersData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching customers:', error)
      }
    }
    fetchCustomers()
  }, [])

  const assignCustomer = async customerId => {
    try {
      await axios.post(`//${customerId}`, { subAdminId })
    } catch (error) {
      console.error('Error assigning customer:', error)
    }
  }

  return (
    <div className='admin-view-container'>
      <h1>Customer Details</h1>
      {loading ? (
        <div className='sweet-loading'>
          <RiseLoader
            size={80}
            aria-label='Loading Spinner'
            data-testid='loader'
            color={'blue'}
          />
        </div>
      ) : (
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Service Code</th>
                <th>Address</th>
                <th>Country</th>
                <th>State</th>
                <th>District</th>
                <th>Pincode</th>
                <th>Query</th>
                <th>Assign</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.first_name}</td>
                  <td>{customer.last_name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.service_code}</td>
                  <td>{customer.complete_address}</td>
                  <td>{customer.country}</td>
                  <td>{customer.state}</td>
                  <td>{customer.suburb}</td>
                  <td>{customer.postcode}</td>
                  <td>{customer.query}</td>
                  <td className='assign-button'>
                    <button
                      style={{ minWidth: '150px', minHeight: '50px' }}
                      onClick={() => assignCustomer(customer.id)}
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminView
