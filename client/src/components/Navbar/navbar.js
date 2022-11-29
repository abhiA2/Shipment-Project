import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        // <header className={classes.header}>
        //     <div className={classes.logo}>Shipment</div>
        //     <nav className={classes.nav}>
        //         <ul>
        //             <li>
        //                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/'>Home</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to='/aboutUs' activeClassName={classes.activeClassName}>
        //                     AboutUs
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to='/contact' activeClassName={classes.activeClassName}>
        //                     Contact
        //                 </NavLink>
        //             </li>
        //             {/* <NavLink to='/' activeClassName={classes.activeClassName}>
        //         Home
        //     </NavLink> */}
        //         </ul>
        //     </nav>
        // </header>

        <div className={classes.header}>
            <div className={classes.logo}><a href='/'>Shipment</a></div>

            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/aboutUs'>AboutUs</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/signUp'>SignUp</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/signIn'>SignIn</NavLink>
                    </li>
                </ul>
            </nav>
        </div>




    )
}

export default Navbar