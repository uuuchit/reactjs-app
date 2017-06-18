import React, {Component} from 'react';


class Header extends Component{

    render(){
        return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#p_destination">BEST DEALS</a></li>
                    <li><a href="#p_package">POPULAR PACKAGES</a></li>
                    <li><a href="#dest_mood">DESTINATION BY MOODS</a></li>
                    <li><a href="#testimonials">TESTIMONIALS</a></li>
                    <li><a href="#articles_section">ARTICLES</a></li>
                    <li><a href="#">LOG IN</a></li>
                    <li><a href="#" class="btn header-signup">SIGN UP</a></li>
                </ul>
            </nav>
            
        </div>
        )
    }
}

export default Header;