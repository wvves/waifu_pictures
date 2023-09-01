import React, { useMemo, useState } from 'react';
import { PreviousImageContext } from './PreviousImageContext';


const PreviousImageProvider = ({ children }) => {
  const [cachePreviousImg, setCachePreviousImg] = useState([]);
  const setCacheImg = (image_id, urlImage) => {
    setCachePreviousImg([...cachePreviousImg, {[image_id]: urlImage}])
  }

  const value = useMemo(() => ({
    cache: cachePreviousImg, setCache: setCacheImg}), [cachePreviousImg]);
  // console.log(value)
  return (
    <PreviousImageContext.Provider value={value}>
      {children}
    </PreviousImageContext.Provider>
  );
};

export default PreviousImageProvider;