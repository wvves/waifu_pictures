import React, { memo, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useFetching } from './hooks/useFetching';
import { useDispatch } from 'react-redux';
import { addImage } from './reducer/ImgReducer';
import { fetchDataImgage } from './reducer/fetchImage/ActionThunk';
import { useImage } from './context/PreviousImage/useImage';


const CardItem = memo(function CardItem ({ allSelectParams }) {

  // console.log(allSelectParams);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const {cache, setCache} = useImage();
 
  console.log(cache)

  const [fetchImage, isLoadingImage, errorImage] = useFetching();
  const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL

  const [urlImage, setUrlImage] = useState({
    "signature": "abac9ffb3f47036c",
    "extension": ".jpeg",
    "image_id": 6616,
    "favorites": 6,
    "dominant_color": "#cac0c6",
    "source": "https://reddit.com/i7qogy/",
    "artist": null,
    "uploaded_at": "2021-11-02T12:16:19.048684+01:00",
    "liked_at": null,
    "is_nsfw": false,
    "width": 1152,
    "height": 2000,
    "byte_size": 1003579,
    "url": "https://cdn.waifu.im/6616.jpeg",
    "preview_url": "https://www.waifu.im/preview/6616/",
    "tags": [
        {
            "tag_id": 12,
            "name": "waifu",
            "description": "A female anime/manga character.",
            "is_nsfw": false
        },
        {
            "tag_id": 13,
            "name": "maid",
            "description": "Cute womans or girl employed to do domestic work in their working uniform.",
            "is_nsfw": false
        }
    ]
  });

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
    setCache(urlImage.image_id, urlImage);
    fetchImage( async () => {
      const response = await dispatch(fetchDataImgage(requestUrl))
      .unwrap()
      .then(data => data)
      setUrlImage(response.images[0])
    });
  }

  const previousImage = () => {
    const key = Object.keys(cache).pop();
    console.log(key);
    setUrlImage(cache[key]);
    delete cache[key];
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
        <div>
          <span>img source:&nbsp;</span>
          <a href={urlImage.source}>{urlImage.source}</a>
        </div>
        {/* <div className='card-buttons'>
          <div>didn't like: 0</div>
          <div>liked: 0</div>
        </div> */}
      </div>
      }
      {/* <div className='separator'>
          <span></span>
          <span></span>
        </div> */}
        <div className='arrows'>
          <div>
            <button 
              disabled={Object.values(cache).length === 0} 
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
})

export default CardItem;