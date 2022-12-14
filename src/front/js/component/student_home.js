import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import Card from '../component/serviceCard';

const StudentHome = () => {
    const {store, actions } = useContext(Context);
    
    return (
        <>
            <header className='bg-dark py-3'>
                <Link to='/profile'><img
                    style={{ height: 200, width: 200 }}
                    className='ms-5 img-thumbnail rounded-circle float-start'
                    src={(store.picture == "") ? 'https://i.pinimg.com/280x280_RS/12/75/75/12757564e7b83387bb5fc7634db783a5.jpg' : store.picture}
                    alt='profile pic'
                /></Link>
                <div className='container px-4 px-lg-5 my-5'>
                    <div className='text-center text-white'>
                        <h1 className='display-4 fw-bolder'>{store.name} {store.lastname}</h1>
                        <p className='lead fw-normal text-white-50 mb-0'>{store.rol}</p>
                    </div>
                </div>
            </header>
            <section className='pt-3'>
                <div className='container px-4 px-lg-5'>
                    <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                        {
                            !!store.currentUser &&
                            store.currentUser?.user?.profile?.services.length > 0 &&
                            store.currentUser?.user?.profile?.services.map((ele, i) => {
                                return <Card key={i} content={ele} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentHome;