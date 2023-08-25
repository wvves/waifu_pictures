import React, { useState } from 'react';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, getImages } from './reducer/ImgReducer';


const Profile = () => {
  const imgArray = useSelector(state => state.url)
  console.log(imgArray)
  const dispatch = useDispatch()
  console.log(dispatch(getImages()))
  return (
    <>
    <NavBar></NavBar>
    <div className='grid-container'>

    <div className='profile-block'>
      <div>profile</div>
      <div>name</div>
    </div>
    <div className='content-block'>
      <div>content</div>
      <div>saved images</div>
      <div className='content-wrap'>
        {imgArray.items.map((item, index) => (
          <div key={index} className='content-item'>
            <a href={item.url}>{item.id}</a>
            <div onClick={() => dispatch(deleteImage(index))}>deleteItem</div>
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