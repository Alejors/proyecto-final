import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import ServiceLink from '../component/servicelink';
import { FaInstagram, FaFacebook, FaTwitterSquare, FaLinkedin, FaPhone, FaEnvelope, FaUser, FaUserEdit, FaStar, FaListUl } from 'react-icons/fa';

const Profile = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    actions.loadProfile();
    if (store.currentUser == null) history('/login');
  }, [])

  useEffect(() => {
    if (store.currentUser == null) history('/login');
    actions.loadProfile();
  }, [store.currentUser])

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-4'>
          <img
            style={{ height: 200, width: 200 }}
            className='img mt-5 mx-5 img-thumbnail'
            src={(store.picture == "") ? 'https://i.pinimg.com/280x280_RS/12/75/75/12757564e7b83387bb5fc7634db783a5.jpg' : store.picture}
            alt='profile pic'
            id="img-profile"
          />
        </div>
        <div className='col-lg-7 ms-5 p-3'
          >
          <table className='table p-3'>
            <thead>
              <tr>
                <th scope='col'><h1 className='col mb-4'>Información Personal</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'><FaUser /> &nbsp; Nombre</th>
                <td>{store.name}</td>
              </tr>
              <tr>
                <th scope='row'><FaUserEdit /> &nbsp; Apellido</th>
                <td>{store.lastname}</td>
              </tr>
              <tr>
                <th scope='row'><FaEnvelope /> &nbsp; Correo Electrónico</th>
                <td>{store.email}</td>
              </tr>
              <tr>
                <th scope='row'><FaPhone /> &nbsp;Número de teléfono</th>
                <td>{store.phonenumber}</td>
              </tr>
              <tr>
                <th scope='row'><FaFacebook /> &nbsp; Facebook</th>
                <td>{store.facebook}</td>
              </tr>
              <tr>
                <th scope='row'><FaInstagram /> &nbsp; Instagram</th>
                <td>{store.instagram}</td>
              </tr>
              <tr>
                <th scope='row'><FaTwitterSquare /> &nbsp; Twitter</th>
                <td>{store.twitter}</td>
              </tr>
              <tr>
                <th scope='row'><FaLinkedin /> &nbsp; LinkedIn</th>
                <td>{store.linkedin}</td>
              </tr>
              <tr>
                <th scope='row'><FaListUl /> &nbsp; Categoría</th>
                <td className='d-flex'>{store.rol}</td>
              </tr>
              <tr>
                <th scope='row'><FaStar /> &nbsp; Mis Temas</th>
                <td>
                  <ul>
                    {
                      !!store.currentUser &&
                      store.currentUser?.user?.profile?.services.length > 0 &&
                      store.currentUser.user.profile.services.map((ele, i) => {
                        return <ServiceLink key={i} content={ele} />
                      })
                    }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='row d-flex pt-4'>
            <div className='col-md-2 mb-2 pt-3 float-start'><span className='btn btn-danger' onClick={() => history('/private')}>Atrás</span></div>
            <div className='col-md-3 mb-2 pt-3 ms-auto'><span className='btn btn-info' onClick={() => history('/update')}>Actualizar Información</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
