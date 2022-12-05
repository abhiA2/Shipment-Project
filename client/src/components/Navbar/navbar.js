// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import classes from './Navbar.module.css';

// const Navbar = () => {
//     return (
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

// <div className={classes.header}>
//     <div className={classes.logo}><a href='/'>Shipment</a></div>

//     <nav>
//         <ul>
//             <li>
//                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/'>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/aboutUs'>AboutUs</NavLink>
//             </li>
//             <li>
//                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/contact'>Contact</NavLink>
//             </li>
//             <li>
//                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/signUp'>SignUp</NavLink>
//             </li>
//             <li>
//                 <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/signIn'>SignIn</NavLink>
//             </li>
//         </ul>
//     </nav>
// </div>



import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div
            className={
                clicked
                    ? `${styles.nav} ${styles.responsive}`
                    : `${styles.nav} ${styles.desktop__nav}`
            }
        >
            {!clicked && (
                <Link to='/' className=
                    {`${styles.list}${styles.logo}`}>
                    <li>Tejas and Co</li>
                </Link>
            )}
            <ul>
                <Link to='/' className={styles.list}>
                    <li>Home</li>
                </Link>
                <Link to='/aboutUs' className={styles.list}>
                    <li>AboutUs</li>
                </Link>
                <Link to='/contact' className={styles.list}>
                    <li>Contact</li>
                </Link>
                <Link to='/signUp' className={styles.list}>
                    <li>SignUp</li>
                </Link>
                <Link to='/signIn' className={styles.list}>
                    <li>SignIn</li>
                </Link>
                <a className={styles.icon} onClick={() => setClicked(!clicked)}>
                    <i className='fa fa-bars'></i>
                </a>
            </ul>
        </div>
    );
};
export default Navbar;


