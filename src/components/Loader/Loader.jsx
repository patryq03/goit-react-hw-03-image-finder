import React from 'react';
import {ThreeCircles} from 'react-loader-spinner';


const Loader = () => (
  <div>
    <ThreeCircles type="ThreeDots" color="#3F51B5" height={50} width={50} />
  </div>
);

export default Loader;