

import React from 'react';
import MicrosoftLogin from "react-microsoft-login";
import { useState } from 'react';
import { Button } from '../../globalStyles';
import '../SignUp/signup.css';

export default function SignUp({ instance }) {

 const [accToken, setAccToken]= useState(localStorage.getItem('accessToken'));
 const [nameee, setNameee]= useState(localStorage.getItem('userName'));


  const authHandler = (err, data) => {

    
    // const { access_token, id_token } = data.authResponse; // Extract access token and ID token from auth response
    var newdat=data;
    console.log(newdat);

    const namee=newdat?.idTokenClaims?.name;
    const accessToken = newdat?.accessToken;
    const emaill=  newdat?.account?.username;


    setAccToken(accessToken);
    setNameee(namee);

    
    
    

    alert(namee+" is logged in successfully");
    async function setterr() {
      await localStorage.setItem("userName",namee);
      await localStorage.setItem("accessToken",accessToken);
      await localStorage.setItem("email", emaill);
    }

    setterr();

       
    fetch(`https://graph.microsoft.com/v1.0/me/drive/sharedWithMe`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  var vidData=data
  console.log(vidData);
  const filteredItems = vidData.value.filter(item => {
    const allowedNames = ["LalGs.mp4", "LacPhi.mp4", "PhxBkn.mp4"];
    return allowedNames.includes(item.name);
  });
  
  // Map filtered items to extract required data
  const result = filteredItems.map(item => ({
    downloadUrl: item["@microsoft.graph.downloadUrl"],
    name: item.name
  }));
  
  console.log(result);
  if(result.length===0){
    localStorage.setItem('videos',"Empty");
  }
  else{
    localStorage.setItem('videos',result.value);
  }
  window.location.reload(); 

})
.catch(error => {
  // console.error('Error fetching image:', error);
});
  

}

const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  setAccToken('');
  window.location.reload();

}

  return (
    // <MsalProvider instance={instance}>
    //   <WrappedView instance={instance} />
    // </MsalProvider>
    // <>
    //   <MicrosoftLogin clientId={'13c38fe9-78a0-4635-b3b6-246ecad40d59'} authCallback={authHandler} redirectUri={'http://localhost:3000'} graphScopes={[ 'profile', 'https://graph.microsoft.com/User.Read', 'https://graph.microsoft.com/Files.Read.All', 'https://graph.microsoft.com/Files.ReadWrite.All','https://graph.microsoft.com/Directory.ReadWrite.All', "offline_access"]} />
    //   {/* <img src="https://public.ph.files.1drv.com/y4m7KdJEZNSFAId_sSVDt3f8wobslVCulbWhY7aPQILSMQR_8xkDGdfyP4eqa7DQY6vz0FjyhFfab9rs3dRvzT8luWZxH6-75eTnxzp7MkvHKXfBtNGbxB6uGm6fwp7HhoMt2Z15wKtFs27RsHn5A6mB3WjzI0Bc93PuVLKBv-6VZxaT06gusqhhkHFQSRFI9xBnSNnSDiSCLQA_jscKwUhBg" alt='notyet'/> */}
      
    // </>

    <>
      {accToken ? (
        

        <div style={{ backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ backgroundColor: "#000000", color: "#ffffff", justifyContent: "center" }}>Hello {nameee}!</h1>
            <Button onClick={handleLogout} style={{ width: "40%" }} variant="contained" color="primary">Logout</Button>
          </div>
        </div>
        
        
      ) : (
        <div style={{backgroundColor:"#000000", display: "flex", alignItems: "center", justifyContent: "center", height: "50vh",flexDirection: "column"}}>
        <h1 style={{ backgroundColor: "#000000", color: "#ffffff", justifyContent: "center"}}>Hello User, Let's get started!</h1>
        <div style={{marginTop:"50px"}}>
        <MicrosoftLogin
          className='microsoftButton'
          buttonTheme="dark"
            clientId={'13c38fe9-78a0-4635-b3b6-246ecad40d59'}
            authCallback={authHandler}
            redirectUri={'http://localhost:3000'}
            graphScopes={[
              'profile',
              'https://graph.microsoft.com/User.Read',
              'https://graph.microsoft.com/Files.Read.All',
              'https://graph.microsoft.com/Files.ReadWrite.All',
              'https://graph.microsoft.com/Directory.ReadWrite.All',
              "offline_access"
            ]}
          />
        </div>
          
        </div>
      )}
    </>
  );
  }