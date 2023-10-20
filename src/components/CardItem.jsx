import React, { memo, useEffect, useState } from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import { useFetching } from '../utils/hooks/useFetching';
import { useDispatch } from 'react-redux';
import { addImage } from '../reducer/imageReducer/ImgReducer';
import { fetchDataImgage } from '../reducer/imageReducer/fetchThunk/ActionThunk';
import { useImage } from '../context/PreviousImage/useImage';
import { preview_image } from '../utils/constants/previewImage';
import { NavLink } from 'react-router-dom';

const CardItem = function CardItem ({ allSelectParams }) {

  // console.log(allSelectParams);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const {previousImages, setPreviousImg } = useImage();

  const [fetchImage, isLoadingImage, errorImage] = useFetching();
  const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL

  const [urlImage, setUrlImage] = useState(preview_image);
  useEffect(() => {
    if(previousImages.length >= 1) {
      setUrlImage(Object.values(previousImages[Object.values(previousImages).length - 1])[0]);
    } else {
      setPreviousImg(urlImage.image_id, urlImage);
    }
  }, [])
  const params = allSelectParams.randomImg === false ? {
    included_tags: allSelectParams.tag,
    // is_nsfw: allSelectParams.isNsfw,
  } 
  :
  {
    order_by: 'RANDOM'
  };
  
  const queryParams = new URLSearchParams(params);
  const requestUrl = `${apiUrl}?${queryParams}`;

  const nextImage = () => {
    
    fetchImage( async () => {
      const response = await dispatch(fetchDataImgage(requestUrl))
      .unwrap()
      .then(data => data)
      setUrlImage(response.images[0])
      setPreviousImg(response.images[0].image_id, response.images[0]);
    });
  }

  const previousImage = () => {
    previousImages.pop();
    const key = Object.values(previousImages[Object.values(previousImages).length - 1])[0];
    setUrlImage(key);
  }

  return (
    <>
      {isLoadingImage === true ? <h2>загрузка...</h2>: 
      <div className='card'
      style={{
        background: `linear-gradient(${urlImage.dominant_color}, ${theme === 'dark' ? '#000' : '#fff'})`,
        border: `solid 2px ${urlImage.dominant_color}`
        }}>
        <div className='card-image'>
          <img src={urlImage.url} alt=""/>
        </div>
        <div className='card-tags'>
          <div>tags:&nbsp;</div>
            {urlImage.tags.map(item => (
              <div
                key={item.tag_id}>{item.name}&nbsp;
              </div>
              ))
            }
        </div>
        <div className='card-src'>
          <div>img source:&nbsp;</div>
          <NavLink style={() => {
            return {
              color: !urlImage.source && 'red',
              cursor: 'default',
              display: 'block',
              fontSize: (urlImage.source.length > 40 ? '.7em' : '1em')
            }
          }} to={urlImage.source}>{urlImage.source || 'not src'}</NavLink>
        </div>
      </div>
      }
        <div className='arrows'>
          <div>
            <button 
              disabled={previousImages.length === 1} 
              onClick={previousImage}>previousImage</button>
          </div>
          <div>
            <button onClick={nextImage}>nextImage</button>
          </div>
          <div>
          <button onClick={() => dispatch(addImage({id: urlImage.image_id, url: urlImage.url}))}>saveImage</button>
          </div>
        </div>
    </>
  );
}

export default CardItem;