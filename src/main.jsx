// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './App.css'
// import Auth from './components/Auth.jsx'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// const A = () => {
//   return (
//     <Router>
//       <div>
//         <Route path="/" component={Auth} exact />
//         <Route path="/App" component={App} />
//       </div>
//     </Router>
//   );
// };

// ReactDOM.createRoot(<A />, document.getElementById('root'));

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Auth />
// //     <App />
// //   </React.StrictMode>,
// // )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './App.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)