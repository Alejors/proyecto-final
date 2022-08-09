import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const Profile = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    if(store.currentUser == null) history('/login');
    actions.loadProfile();
  },[])

  useEffect(() => {
    actions.loadProfile();
  }, [store.currentUser])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <img
            style={{ height: 200, width: 200 }}
            className='mt-2 mx-5 rounded img-thumbnail'
            src='https://alfabetajuega.com/hero/2020/07/saitama-one.jpg'
            alt='profile pic'
          />
        </div>
        <div className='col-md-6'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Name</th>
                <td>{store.name}</td>
              </tr>
              <tr>
                <th scope='row'>Lastname</th>
                <td>{store.lastname}</td>
              </tr>
              <tr>
                <th scope='row'>Email</th>
                <td>{store.email}</td>
              </tr>
              <tr>
                <th scope='row'>Phonenumber</th>
                <td>{store.phonenumber}</td>
              </tr>
              <tr>
                <th scope='row'>Facebook</th>
                <td>{store.facebook}</td>
              </tr>
              <tr>
                <th scope='row'>Instagram</th>
                <td>{store.instagram}</td>
              </tr>
              <tr>
                <th scope='row'>Twitter</th>
                <td>{store.twitter}</td>
              </tr>
              <tr>
                <th scope='row'>Linkedin</th>
                <td>{store.linkedin}</td>
              </tr>
              <tr>
                <th scope='row'>Category</th>
                <td>Student</td>
              </tr>
              <tr>
                <th scope='row'>Favorite topics</th>
                <td>
                  <ul>
                    <li>
                      <Link to='/outdoor'>Outdoor-Living</Link>
                    </li>
                    <li>
                      <Link to='/gaming'>Gaming</Link>
                    </li>
                    <li>
                      <Link to='/spirituality'>Spirituality</Link>
                    </li>
                    <li>
                      <Link to='/healthy'>Health</Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to='/update' ><span className='btn btn-primary mb-3 float-end'>Update Information</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
