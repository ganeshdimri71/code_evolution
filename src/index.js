// import React from 'react';
// import App9 from './App9'
// import './naveenSaggam.css'
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { BrowserRouter } from
//     'react-router-dom';
// import store from './componentsTwelve/redux/store'
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App9 />
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode >
//     ,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App31 from './App31'
import { BrowserRouter } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');;
/* *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body{
    font-family:'Oswald',sans-serif;
    font-size:62.5%;


@media (max-width:768px){
    font-size:50%;
}

@media (max-width:450px){
    font-size:40%;
}
}
body{
    font-size:1.6rem;
}
`; */

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
             {/* <GlobalStyle />  */}
            <App31 />
        </BrowserRouter>

    </React.StrictMode >
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

