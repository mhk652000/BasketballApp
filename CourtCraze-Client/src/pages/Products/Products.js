import React, { useState, useEffect } from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import ModalVideo from 'react-modal-video';
import { Button } from '../../globalStyles';

function Products() {

  const [acToken, setAccToken] = useState('');
  const [sType, setType] = useState('');

  useEffect(() => {
    const accTkn = localStorage.getItem("accessToken");
    const subType = localStorage.getItem("subType");

    setType(subType);
    setAccToken(accTkn);
  }, []);

  function handleBtn() {
    window.location.href = 'http://localhost:3000/Subscribe';
  }
  return (


<>
  {!acToken || sType === "" ? (
    <div style={{ backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ backgroundColor: "#000000", color: "#ffffff", justifyContent: "center" }}>You haven't subscribed to any package</h1>
        <Button onClick={handleBtn} style={{ width: "40%" }} variant="contained" color="primary">Subscribe Now</Button>
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200vh', backgroundColor:"#000000" }}>
  <h1 style={{color:"#ffffff", textAlign:"center", marginTop:"150px"}}>Live Matches</h1>
  {sType === "Basic" && (
    <>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}>Los Angeles Lakers vs Golden State Warriors</p>
        <iframe
          title="Embedded Video Player"
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21118&authkey=!ADoq9sc_n_b0Yzo"
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </>
  )}
  {sType === "Gold" && (
    <>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}>Los Angeles Lakers vs Golden State Warriors</p>
        <iframe
          title="Embedded Video Player"
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21118&authkey=!ADoq9sc_n_b0Yzo"
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}>Los Angeles Clippers vs Philadelphia 76ers</p>
        <iframe
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21125&authkey=!AMAQ8Ktin8mHyaI"
          title='VV'
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </>
  )}
  {sType === "Premium" && (
    <>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}>Los Angeles Lakers vs Golden State Warriors</p>
        <iframe
          title="Embedded Video Player"
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21118&authkey=!ADoq9sc_n_b0Yzo"
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}>Los Angeles Clippers vs Philadelphia 76ers</p>
        <iframe
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21125&authkey=!AMAQ8Ktin8mHyaI"
          title='VV'
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
      <div style={{padding:"2%"}}>
        <p style={{color:"#ffffff", textAlign:"center"}}> Phoenix Suns vs Brooklyn Nets</p>
        <iframe
          title='V'
          src="https://onedrive.live.com/embed?resid=FE75BBBCA5EC887D%21116&authkey=!APWLAhinRaoCItw"
          width="320"
          height="320"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </>
  )}
</div>
  )}

  
</>
  )
}
export default Products;
