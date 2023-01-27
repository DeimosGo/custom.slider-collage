import React from 'react';
import skeleton from './MobileSkeleton.css';

const MobileSkeleton = () => (
  <div className={skeleton.loader__container}>
    <div className={skeleton.loader}></div>
    <div className={skeleton.loader}></div>
  </div>
);

export default MobileSkeleton;
