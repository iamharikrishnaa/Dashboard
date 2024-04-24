import React, {useState, useEffect} from 'react';
import Navbar from '../components/_App/Navbar';
import Home from '../components/Home/Home';

const Index = () => {
    const [token, setToken] = useState(null);  //useSelector(state => state.auth.token);

    useEffect(() => {
        const fetchToken = () => {
          if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
              setToken(storedToken);
            }
          }
        }
    
        fetchToken();
      }, [token]);

    return (
        <>
            <Navbar />
            <Home token={token}/>
        </>
    )
}

export default Index;