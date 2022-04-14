
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserContextProvider from './components/context/UserContext'
import Navbar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Home from './components/home'
import Login from './components/Login'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import Balance from './components/Balance'
import AllData from './components/AllData'

export default function App() {
    

    return (
        <Router>
          <UserContextProvider>
              <Navbar />
              <div className='container' style={{ padding: '20px' }}>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/CreateAccount/' element={<CreateAccount />} />
                    <Route path='/login/' element={<Login />} />
                    <Route path='/deposit/' element={<Deposit />} />
                    <Route path='/withdraw/' element={<Withdraw />} />
                    <Route path='/balance/' element={<Balance />} />
                    <Route path='/alldata/' element={<AllData />} />
                  
                </Routes>
              </div>
            
          </UserContextProvider>
        </Router>
      );
    }




// import {HashRouter, Route } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './components/Home';
// import CreateAccount from './components/CreateAccount'
// import Login from './components/Login'
// import Deposit from './components/Deposit'
// import Withdraw from './components/Withdraw'
// import Balance from './components/Balance'
// // import UserContextProvider from './components/UserContext'

// import AllData from './components/AllData/AllData'
// import './App.css'

// export default function App() {
//     return (
//         <HashRouter>
//             <NavBar/>
//             <UserContext.Provider>

//                 <Route path="./components/Home" component={Home} />
//                 <Route path="./components/CreateAccount/" component={CreateAccount} />
//                 <Route path="./components/Login/" component={Login} />
//                 <Route path="../components/Deposit/" component={Deposit} />
//                 <Route path="./components/Withdraw/" component={Withdraw} />
//                 <Route path="./components/Balance/" component={Balance} />
//                 <Route path="./components/AllData/AllData/" component={AllData} />
//             </UserContext.Provider>
//         </HashRouter>
//     );
// }