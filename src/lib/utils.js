import { doc } from "prettier";

export function setColors(lightMode) {
    console.log("setColors: lightMode = " + lightMode);
    document.documentElement.style.setProperty('--back',  lightMode ? '#d3dceb' : '#1c1c1c' );
        document.documentElement.style.setProperty('--text',  lightMode ? 'black' : 'white' );
        document.documentElement.style.setProperty('--text-inv',  lightMode ? 'white' : 'black' );
        document.documentElement.style.setProperty('--accent',  lightMode ? '#012a4a' : '#fff' );
        document.documentElement.style.setProperty('--section',  lightMode ? 'rgba(242,242,242,1)' : '#303030' );
        if (lightMode) {
            document.documentElement.style.setProperty('--section-f',  'rgba(0,0,0,.05)' );
        }
        else {
            document.documentElement.style.setProperty('--section-f',  'rgba(255,255,255,.075)' );
        }


    window.localStorage.setItem('lightMode', JSON.stringify(lightMode));


 }
