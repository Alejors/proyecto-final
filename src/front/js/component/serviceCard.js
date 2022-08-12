import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Card = ({ content }) => {
    const { store } = useContext(Context);
    let topicFound = store.topicQuestions.find((element) => element.topicname == content)
    let imgSrc = topicFound['img']

    return (
        <div className='col mb-5'>
              <div className='card h-100'>
                <img
                  className='card-img-top'
                  style={{ width: 223, height: 148 }}
                  src={imgSrc}
                  alt={content}
                />
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder' style={{'textTransform': 'capitalize'}}>{content}</h5>
                  </div>
                </div>
                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <Link className='btn btn-outline-dark mt-auto' to={'/'+content}>
                      Checkout!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Card;