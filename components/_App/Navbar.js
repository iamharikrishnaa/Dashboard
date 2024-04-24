import React, {useState, useEffect} from 'react';
import Link from '../../utils/ActiveLink';
import router from 'next/router';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);  //useSelector(state => state.auth.token);

    useEffect(() => {
        const fecthToken = () => {
            if (typeof window !== 'undefined') {
              const storedToken = localStorage.getItem('token');
              if (storedToken) {
                setToken(storedToken);
                setIsAuthenticated(true);
              }
            }
          }
        fecthToken();
      }, [token]);

    const handleLoginButtonClick = () => {
        if (isAuthenticated) {
            if (typeof window !== 'undefined') {
                if (localStorage) {
                    localStorage.clear();
                    setIsAuthenticated(false);
                }
            }              
        }
          router.push('/login');
      }

    return (
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href='/'><img src="\images\logo.png" style={{maxWidth: "75%"}} alt="Novagito Logo" /></a>
        </div>
        
        {/* Spacer */}
        <div className="spacer" />
        
        {/* Login Button */}
        <button className="standard-btn" onClick={() => handleLoginButtonClick()}>
            {isAuthenticated ? <>Logout</> : <>Login</>}
        </button>
      </div>
    );
  }


export default Navbar;
