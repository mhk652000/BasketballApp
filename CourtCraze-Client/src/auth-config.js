import { LogLevel } from "@azure/msal-browser";


export const msalConfig = {
    auth: {
        clientId: '733e6edf-7b8d-46bc-9736-7c259ea8667c',

        authority: 'https://login.microsoftonline.com/courtcrazeeoutlook.onmicrosoft.com',

        redirectUri: '/',

        postLogoutRedirectUri: '/',

        navigateToLoginRequestUrl: false

    },

    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },


    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii)=>{
                if(containsPii){
                    return;
                }
                switch(level){
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    
                    case LogLevel.Info:
                        console.info(message);
                        return;

                    case LogLevel.Verbose:
                        console.debug(message);
                        return;

                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest={
    scopes: ['openid', 'profile', 'User.Read', 'Files.Read.All', 'Files.ReadWrite.All'],
}