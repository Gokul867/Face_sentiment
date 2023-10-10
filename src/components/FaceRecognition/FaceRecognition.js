import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, value }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
        </div>
        <div>
          <b className='f3'>
            Sentiment : {value.name}
            <br></br>
            Percentage : {value.val}
          </b>
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;