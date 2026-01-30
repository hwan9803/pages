import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import Footer from './common/Footer'
=======
>>>>>>> parent of 30846d8 (Updates)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <div style={{
      diplay: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <App style={{
        flex: '1'
      }}/>
      <Footer style={{
        height: '10%',
        marginBottom: '0'
      }}/>
    </div>
=======
    <App />
>>>>>>> parent of 30846d8 (Updates)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
