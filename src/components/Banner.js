import React from 'react'
import About from "./About"
import Image from 'react-bootstrap/Image'

const Banner = (props) => (
    <section id="banner" className="major"  style={{backgroundImage: "url(images/banner.jpg)"}}>
        <div className="inner">
            {/* <header className="major">
                
            </header> */}
            <div className="content grid-wrapper">
                <div className="banner_left col-4">
                    <h1>Riana ANDRIANOME</h1>
                    <Image src="images/profile_pic_linkedin.jpg" roundedCircle />
                    <h2>Software Engineer</h2>
                    <p>Full stack developer.</p>
                </div>
                <div className="banner_right col-8">
                    <About/>
                </div>
                
            </div>
            
        </div>
    </section>
)

export default Banner
