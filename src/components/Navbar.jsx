import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {Link} from 'react-router-dom';
// export default function Navbar() {
//     return(
//     <nav>
//         <h1>Navbar</h1>
//     </nav>
//     )
// }


export default function Navbar () {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">BadBank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <a id="nav-link" className="nav-link" title="Register as a new user" href="/CreateAccount/">Create Account</a>
                        <a className="nav-link" href="/Login/">Login</a>
                        <a id="nav-link"className="nav-link" title="Make a deposit to your account"href="/Deposit/">Deposit</a>
                        <a id="nav-link"className="nav-link" title="Withdraw funds from your account"href="/Withdraw/">Withdraw</a>
                        <a className="nav-link" href="/Balance/">Balance</a>
                        <a id="nav-link"className="nav-link" title="View User Data"href="/Alldata/">AllData</a>
                    </div>
                </div>
            </div>
            </nav>

        </>

    );
}