
import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useHref, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const {theme, setTheme} = useTheme()
  const navigate = useNavigate()
  const href = useHref()
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
          onClick={() => navigate('/profile')}>
          icon user
        </div>
        }
        {href === '/profile' && 
        <div className='right-user' 
          onClick={() => navigate('/')}>
            icon user
        </div>
        }
        
      </div>
    </>
  );
};

export default NavBar;