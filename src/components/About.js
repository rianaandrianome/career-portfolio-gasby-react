import React from 'react'

class About extends React.Component{
    render(){
        
        return(
            <section id="section-about">
                <div className="inner">
                    <header className="major">
                        <h2>About</h2>
                    </header>
                    <p>I am a software solution developer who likes to discover new technologies and participate in innovative projects. I am passionate about web development, mobile application development, the Internet of things and most recently the integration of machine learning concepts in web applications.</p>
                    <p>In my work, my primary focus is to provide a software solution that satisfies user needs and criteria. I am meticulous and careful to always offer a clean and maintainable code along with a well designed and user-friendly interface.</p>
                    <p>For more details, see my Resume below</p>
                    
                    <a className="button next scrolly" href="images/rianaandrianome_resume.pdf">Resume</a>
                        
                    
                </div>
            </section>
        );
    }
}

export default About