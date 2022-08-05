import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Profile = () => {
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
          <span className='badge bg-primary btn position-relative top-0 start-50 translate-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-pencil'
              viewBox='0 0 16 16'
            >
              <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
            </svg>
          </span>
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
                <td>Pepito</td>
              </tr>
              <tr>
                <th scope='row'>Lastname</th>
                <td>Lospalotes</td>
              </tr>
              <tr>
                <th scope='row'>Email</th>
                <td>pplospalotes@johndoe.com</td>
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

          <span className='btn btn-primary mb-3 float-end'>Update Information</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
