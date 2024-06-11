import React from 'react';

import Matches from '../../components/Matches/Matches';

import { homeObjOne } from '../Products/Data';
import { InfoSection } from '../../components';
import {users, addData, removeData} from '../../userAccess';

function Games() {
  return (
    <div style={{backgroundColor:"#00000" }}>
      <h2 style={{color:"#ffffff", width:"100%",marginBottom:"0px", textAlign:"center", backgroundColor:"#000000", height:"auto"}}>Upcoming NBA Games</h2>

      
      <Matches style={{backgroundColor:"#00000", display:"flex", alignItems:"center" }}/>
      
      
      <div style={{backgroundColor:"#000000", marginBottom:"0px", height:"200px", border:"0"}}>
                
      </div>
    </div>
    // <>
    //   <MyCarousel style={{backgroundColor:"#00000"}}/>
    // </>
  );
}

export default Games;