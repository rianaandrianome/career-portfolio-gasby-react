import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'gatsby'
import MenuLinks from './MenuLinks'


class Menu extends React.Component{
    static propType={
        onToggleMenu: PropTypes.func
    }

    render(){
        return(
            <nav id="menu">
                <div className="inner">
                    <MenuLinks/>
                    <ul className="actions vertical">
                        <li><a href="/" className="button special fit">Contact Me</a></li>
                        <li><a href="/" className="button fit">See All Projects</a></li>
                    </ul>
                </div>
                {/*<a className="close" onClick={this.props.onToggleMenu} href="javascript:;">Close</a>*/}
                <a className="close" onClick={this.props.onToggleMenu} href="/">Close</a>
            </nav>
        );
    }
}

export default Menu

