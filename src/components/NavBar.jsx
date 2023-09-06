
import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useHref, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const {theme, setTheme} = useTheme()
  const navigate = useNavigate()
  const href = useHref()
  const {auth, entities} = useSelector((state) => state.auth)
  console.log(auth)
  console.log(entities)
  return (
    <>
      <div className='App-bar'>
        <div>
          <FormControlLabel 
            control={
            <Switch onClick={() => (setTheme(theme === 'dark' ? 'light' : 'dark'))} checked={(theme === 'dark')}/>
            }
            label='theme switch'
            labelPlacement='end'/>
        </div>
        {href === '/' &&
        <div className='right-user' 
          onClick={() => auth ? navigate('/profile') : navigate('/login-page')}>
            {entities?.emoji || 'icon user'}
        </div>
        }
        {href === '/profile' && 
        <div className='right-user' 
          onClick={() => navigate('/')}>
            {entities?.emoji || 'icon user'}
        </div>
        }
        {href === '/login-page' &&
        <div className='right-user' 
          onClick={() => navigate('/')}>
            {entities?.emoji || 'icon user'}
        </div>
        }
      </div>
    </>
  );
};

export default NavBar;