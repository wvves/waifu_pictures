import './App.css'
import React, { useCallback, useState } from 'react'
import CardItem from './components/CardItem';
import NavBar from './components/NavBar';
import SelectParams from './components/SelectParams';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './components/reducer/Store';
import { Provider } from 'react-redux';
import PreviousImageProvider from './components/context/PreviousImage/PreviousImageProvider';
import LoginPage from './components/LoginPage';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [allSelectParams, setAllSelectParams] = useState({
    // isNsfw: false,
    randomImg: false,
    tag: 'waifu'
  })

  const onSave = useCallback((params) => {
    setAllSelectParams(params)
  }, [allSelectParams])

  // console.log(isOpen)
  return (
    <>
      
      <div className='App'>
      <BrowserRouter>
      <Provider store={store}>
        <PreviousImageProvider>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login-page' element={<LoginPage/>}/>
        <Route path='*' element={
          <>
          <NavBar />
            <div style={{marginTop: '30px', paddingTop: '30px', marginBottom: '10px'}}>
              <button onClick={() => setIsOpen(true)}>open modal</button>
            </div>
            {isOpen && <div>
              <SelectParams setIsOpen={setIsOpen} onSave={onSave}/>
            </div>}
  
            <CardItem allSelectParams={allSelectParams}/>
          </>
        } />
      </Routes>
        </PreviousImageProvider>
      </Provider>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
