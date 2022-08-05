import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";

const PrivateHome = () => {
    const { store, actions } = useContext(Context);

  return (
    <>
      <header className='bg-dark py-3'>
        <Link to='/profile'><img
          style={{ height: 200, width: 200 }}
          className='ms-5 img-thumbnail rounded-circle float-start'
          src={'https://alfabetajuega.com/hero/2020/07/saitama-one.jpg'}
          alt='profile pic'
        /></Link>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Pepito Lospalotes</h1>
            <p className='lead fw-normal text-white-50 mb-0'>Student</p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            <div className='col mb-5'>
              <div className='card h-100'>
                <div
                  className='badge bg-dark text-white position-absolute'
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Recently added
                </div>
                {/* Product image*/}
                <div style={{ width: 223, height: 148, overflow: 'hidden' }}>
                  <img
                    className='card-img-top'
                    src='https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                    alt='...'
                  />
                </div>
                {/* Product details*/}
                <div className='card-body p-4'>
                  <div className='text-center'>
                    {/* Product name*/}
                    <h5 className='fw-bolder'>Outdoor Skills</h5>
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                    </div>
                  </div>
                </div>
                {/* Product actions*/}
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <Link className='btn btn-outline-dark mt-auto' to='/services/1'>
                      Checkout!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                {/* Sale badge*/}
                <div
                  className='badge bg-dark text-white position-absolute'
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Most Visits
                </div>
                {/* Product image*/}
                <img
                  className='card-img-top'
                  style={{ width: 223, height: 148 }}
                  src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  alt='...'
                />
                {/* Product details*/}
                <div className='card-body p-4'>
                  <div className='text-center'>
                    {/* Product name*/}
                    <h5 className='fw-bolder'>Upgrade Gaming Skills</h5>
                    {/* Product reviews*/}
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                      <div className='bi-star-fill' />
                    </div>
                  </div>
                </div>
                {/* Product actions*/}
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <Link className='btn btn-outline-dark mt-auto' to='/courses/1'>
                      Checkout!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                {/* Sale badge*/}
                <div
                  className='badge bg-dark text-white position-absolute'
                  style={{ top: '0.5rem', right: '0.5rem' }}
                >
                  Otro badge que no se me ocurre
                </div>
                {/* Product image*/}
                <img
                  className='card-img-top'
                  style={{ width: 223, height: 148 }}
                  src='https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  alt='...'
                />
                {/* Product details*/}
                <div className='card-body p-4'>
                  <div className='text-center'>
                    {/* Product name*/}
                    <h5 className='fw-bolder'>Meditation</h5>
                  </div>
                </div>
                {/* Product actions*/}
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <Link className='btn btn-outline-dark mt-auto' to='/meditation/1'>
                      Checkout!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='card h-100'>
                {/* Product image*/}
                <img
                  className='card-img-top'
                  style={{ width: 223, height: 148 }}
                  src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                  alt='...'
                />
                {/* Product details*/}
                <div className='card-body p-4'>
                  <div className='text-center'>
                    {/* Product name*/}
                    <h5 className='fw-bolder'>Healthy Food</h5>
                  </div>
                </div>
                {/* Product actions*/}
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <Link className='btn btn-outline-dark mt-auto' to='/healthy/1'>
                      Checkout!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateHome
