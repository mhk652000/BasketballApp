import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication,EventType }from '@azure/msal-browser';
import { msalConfig } from './auth-config';


const msalInstance= new PublicClientApplication(msalConfig);

// if(!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length >0){
//   msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
// }

msalInstance.addEventCallback((event)=>{
  if(event.eventType===EventType.LOGIN_SUCCESS && event.payload.account){
    const account=event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App instance={msalInstance}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
