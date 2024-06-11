import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import { useEffect } from 'react';
import MyCarousel from '../../components/Upcoming/Upcoming';

const Home = () => {
    
    return (
        <>
            <div style={{backgroundColor:"#0072ef", marginBottom:"0px"}}>
                <InfoSection {...homeObjOne} />
            </div>
            <MyCarousel />

            <Pricing />

        </>
    )
}

export default Home;