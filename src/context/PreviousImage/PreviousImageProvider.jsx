import React, { useMemo, useState } from 'react';
import { PreviousImageContext } from './PreviousImageContext';


const PreviousImageProvider = ({ children }) => {
  const [previousImages, setPreviousImgages] = useState([]);
  const setPreviousImg = (image_id, urlImage) => {
    setPreviousImgages([...previousImages, {[image_id]: urlImage}])
  }

  const value = useMemo(() => ({
    previousImages: previousImages, setPreviousImg: setPreviousImg}), [previousImages]);
  // console.log(value)
  return (
    <PreviousImageContext.Provider value={value}>
      {children}
    </PreviousImageContext.Provider>
  );
};

export default PreviousImageProvider;