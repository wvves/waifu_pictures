import React, { useState } from 'react';

const versatile = [
  'waifu',
  'maid',
  'marin-kitagawa',
  'mori-calliope',
  'raiden-shogun',
  'oppai',
  'selfies',
  'uniform',
]

const nsfw = [
  'ero',
  'ass',
  'hentai',
  'milf',
  'oral',
  'paizuri',
  'ecchi',
]

const SelectParams = ({ setIsOpen, onSave }) => {
  const [isNsfw, setIsNsfw] = useState(false)
  const [randomImg, setRandomImg] = useState(false)
  const [tag, setTag] = useState('waifu')
  console.log('18+', isNsfw)
  console.log('tags', tag)
  console.log('random', randomImg)

  const onsaveParams = () => {
    const saveParams = {
      // isNsfw: isNsfw,
      randomImg: randomImg,
      tag: tag
    }
    onSave(saveParams)
    setIsOpen(false)
  }

  const closeModal = (e) => {
    e.stopPropagation()
    setIsOpen(false)
  };
  return (
    <div className='modal'
      onClick={closeModal}>
      <div className='modal-content'
        onClick={(e) => e.stopPropagation()}>
        <div>modal window</div>
        <div>
          <input style={{marginRight: '10px'}} type="checkbox" name='nsfw' 
            value={randomImg} 
            onClick={() => {
              setTag('waifu')
              setRandomImg(!randomImg)
            }}/>
            <span>random image</span>
        </div>
        {/* <div>
          <input style={{marginRight: '10px'}} type="checkbox" name='randomWaifu' 
            value={isNsfw} onClick={() => {
              setIsNsfw(!isNsfw)
              setTag('ero')
            }} 
            disabled={randomImg === true}/>
            <span>18+</span>
        </div> */}
        <select 
          name="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          disabled={randomImg === true}>
            {isNsfw 
            ? 
            nsfw.map(item => 
              <option key={item} value={item}>{item}</option>)
            :
            versatile.map(item => 
              <option key={item} value={item}>{item}</option>)}
        </select>
        <div className='close'
          onClick={() => setIsOpen(false)}>
          close
        </div>
        <div>
          <button onClick={onsaveParams}>save options</button>
        </div>
      </div>
    
    </div>
  );
};

export default SelectParams;