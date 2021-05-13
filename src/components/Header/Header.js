import React from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import { auth } from '../../firebase'


const Header = () => {
    const [{cart, user}, dispatch] = useStateValue()
    const handleAuth = () => {
        if(user) {
            auth.signOut();
            
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src={logo}
                    alt="logo"
                    className="header-logo"
                />
            </Link>
            <div className="header-search">
                <input type="text" className="header-search_input" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className="header-option">
                        <span className="header-option_lineOne">
                            Hello, {!user ? 'Guest' : `${user.email}`}
                        </span>
                        <span className="header-option_lineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to={user ? '/orders' : '/'}>
                <div className="header-option">
                    <span className="header-option_lineOne">
                        Returns
                    </span>
                    <span className="header-option_lineTwo">
                        Orders
                    </span>
                </div>
                </Link>
                <div className="header-option">
                    <span className="header-option_lineOne">
                        Your
                    </span>
                    <span className="header-option_lineTwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header-option_basket">
                        <ShoppingBasket />
                        <span className="header-option_lineTwo header-basket_count">{cart?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    );
};

export default Header;