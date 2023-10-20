import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../reducer/imageReducer/ImgReducer';
import { Link } from 'react-router-dom';


const Profile = () => {
  const imgArray = useSelector(state => state.url)
  const { auth, entities } = useSelector((state) => state.auth)
  console.log(imgArray)
  const dispatch = useDispatch()
  return (
    <>
    <NavBar></NavBar>
    <div className='grid-container'>

    <div className='profile-block'>
      <div>profile</div>
      <div>
        <span>name: </span>
        {auth ? entities.name + entities.emoji: 'unknown'}
      </div>
    </div>
    <div className='content-block'>
      <div>content</div>
      <div>saved images</div>
      <div className='content-wrap'>
        {imgArray.items.map((item, index) => (
          <div key={index} className='content-item'>
            <Link target='_blank' rel='noopener noreferrer' to={item.url}>{item.id}</Link>
            <div onClick={() => dispatch(deleteImage(index))} 
              style={{color: '#ff3434', cursor: 'pointer'}}>delete item</div>
          </div>
        ))
        }
      </div>
    </div>
    </div>

     
    </>
  );
};

export default Profile;