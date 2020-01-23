import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuLinks from './MenuLinks'


class Header extends React.Component{
    static propTypes ={
        onToggleMenu: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0,
            scroll: "nav_transparent"
        }
        
    }
    
    componentDidMount() {
        if(this.props.page_origin === "detail_page"){
            this.setState({ scroll:"nav-colored" })
        }
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }
    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }
    handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY
        this.setState({ scrollPositionY })
        
        let scrollPosition = this.state.scrollPositionY; 
        if(scrollPosition === 0){
            if(this.props.page_origin === "detail_page"){
                this.setState({ scroll:"nav-colored" })
            }else{
                this.setState({ scroll:"nav-transparent" })
            }
            
        }else{
            this.setState({ scroll:"nav-colored" })
        }
    }
    render(){
        
        return(
            <header id="header" className={"alt nav-colored"}>
                
                <Link to="/" className="logo" style={{backgroundImage: "url(images/logo.png)"}}></Link>
                <nav className="nav-desktop">
                    <ul className="social_media">
                        <li><a href="https://github.com/rianaandrianome" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/riana-andrianome/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="/" className="icon alt fa-skype"><span className="label">Skype</span></a></li>
                    </ul>
                    <div>
                        <MenuLinks/>
                        <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;"> </a>
                    
                    </div>
                    
                    
                </nav>
            </header>
            
        )
    }
}

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
}
  

export default Header
