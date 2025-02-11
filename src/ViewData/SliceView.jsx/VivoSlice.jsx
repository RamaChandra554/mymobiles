import React from 'react'
import { VivoData } from '../../Data/VivoData'
import Slice from './Slice';

function VivoSlice() {
    return (
        <Slice 
          data={VivoData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
        />
      );
  }


export default VivoSlice
