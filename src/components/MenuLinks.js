import React from 'react'
//import { Link } from 'gatsby'


class MenuLinks extends React.Component{
    constructor(props) {
        super(props);
        this.state = { containerId: "" };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let parentElement = (((e.currentTarget.parentNode).parentNode).parentNode).parentNode;
        let parentID = parentElement.getAttribute("id");

        if(parentID === "header"){
            // for the nav on header
            window.location.href = e.currentTarget.getAttribute('href');

        }else if(parentID === "menu"){
            // for the nav modal 
            let nav_visible_class = parentElement.parentNode.getAttribute('class');
            let nav_not_visible_class = nav_visible_class.replace("is-menu-visible", "");
            parentElement.parentNode.setAttribute("class",nav_not_visible_class);
        }
        
    }
    render(){
        return(
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a onClick={this.handleClick} href="#section-about">About</a></li>
                <li><a onClick={this.handleClick} href="#section-skills">Skills</a></li>
                <li><a onClick={this.handleClick} href="#section-projects">Projects</a></li>
                <li><a onClick={this.handleClick} href="#">Blog</a></li>
                <li><a onClick={this.handleClick} href="#section-contact">Contact</a></li>

            </ul>
        );
    }
}

export default MenuLinks