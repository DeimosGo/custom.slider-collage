import React from 'react';
import skeleton from './DesktopSkeleton.css';

const DesktopSkeleton = () => (
  <div className={skeleton.desk__loader__container}>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
    <div className={skeleton.desk__loader}></div>
  </div>
);

export default DesktopSkeleton;
