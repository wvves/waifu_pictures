import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../reducer/authReducer/AuthActionThunk';
import NavBar from '../components/NavBar';


const LoginPage = () => {

  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const onSubmit = () => {
    dispatch(fetchUser(username))
    setUsername('')
  }
  console.log(auth)
  return (
    <>
      <NavBar/>
      <div className='login-page'>
        <label>login</label>
        <input 
          type="text" 
          value={username}
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}/>
          <div>
            <button  style={{width: '150px', height: '20px'}}
              onClick={onSubmit}>Sign in</button>
          </div>
      </div>
    </>
  );
};

export default LoginPage;