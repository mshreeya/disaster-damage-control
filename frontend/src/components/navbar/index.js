import classes from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useUserAuth } from "../../context/UserAuthContext";


export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenu = useMediaQuery({ query: '(max-width:815px)' });

    useEffect(() => {
        if (!mobileMenu && menuOpen) setMenuOpen(false);
    }, [mobileMenu, menuOpen])

    const mobileItemClicked = () => {
        setTimeout(() => {
            setMenuOpen(false);
        }, 300);
    }

    const { pathname } = useLocation();

    const { googleSignIn, logOut, user } = useUserAuth();

    const handleGoogleBtn = async (e) => {
        e.preventDefault();
        try {
            if (user) {
                await logOut();
            }
            else {
                await googleSignIn();
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <nav className={classes.navBar}>
                <div className={classes.innerNav}>
                    <HashLink className={classes.navLink} to="/"><img src="/logo.svg" alt="logo" className={classes.logo} /></HashLink>
                    <div className={classes.midLinks}>
                        <HashLink className={classes.navLink + (pathname === "/" ? (" " + classes.activePath) : "")} to="/">HOME</HashLink>
                        <HashLink className={classes.navLink + (pathname === "/disasters" ? (" " + classes.activePath) : "")} to="disasters">DISASTERS</HashLink>
                        {user ? <HashLink className={classes.navLink} to="/panel">PANEL</HashLink> : null}
                    </div>
                    <div onClick={handleGoogleBtn} className={classes.loginBtn + (menuOpen ? (" " + classes.menuOpen) : "")} to="/login">
                        {user ? "LOGOUT" : "LOGIN"}
                    </div>
                    <div className={classes.mobileMenu + (menuOpen ? (" " + classes.menuOpen) : "")} onClick={() => setMenuOpen(!menuOpen)}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </nav>
            <div className={classes.menuBack + (menuOpen ? (" " + classes.menuOpen) : "")}>
                <HashLink onClick={mobileItemClicked} className={classes.navLink + (pathname === "/" ? (" " + classes.activePath) : "")} to="/">HOME</HashLink>
                <HashLink onClick={mobileItemClicked} className={classes.navLink + (pathname === "/disasters" ? (" " + classes.activePath) : "")} to="disasters">DISASTERS</HashLink>
                {user ? <HashLink onClick={mobileItemClicked} className={classes.navLink} to="/panel">PANEL</HashLink> : null}
                <HashLink onClick={mobileItemClicked} className={classes.navLink + " " + classes.mobLogin} to="#">LOGIN</HashLink>
            </div>
            <div className={classes.bottomSpace} />
        </div>
    );
}