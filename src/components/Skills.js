import React from 'react'
import SkillsProgressBar from './SkillsProgressBar';

class Skills extends React.Component{
    render(){
        return(
            <section id="section-skills">
                <div className="inner">
                    <header className="major">
                        <h2>Expertise</h2>
                    </header>
                    <div className="icon-and-text-wrapper grid-wrapper">
                        <div className="icon-and-text col-3">
                            <span className="icon fa-laptop"></span>
                                <h5>Front-end Development</h5>
                                <p>Implementation, integration and maintenance of clean user interfaces for web responsive applications.</p>
                        </div>
                        <div className="icon-and-text col-3">
                            <span className="icon fa-code"></span>
                                <h5>Back-end development</h5>
                                <p>Implementation, maintenance, improvement of server side logic of a web responsive applications and APIs. </p>
                        </div>
                        <div className="icon-and-text col-3">
                            <span className="icon fa-mobile"></span>
                                <h5>Mobile Application Development</h5>
                                <p>Design, implementation and maintenance of native mobile applications (iOs & android). </p>
                        </div>
                        <div className="icon-and-text col-3">
                            <span className="icon fa-database"></span>
                                <h5>Database Management</h5>
                                <p>Database design and administration (RDBMS, big data)</p>
                        </div>
                    </div>
                    
                    <header className="major">
                        <h2>Skills</h2>
                    </header> 
                    <SkillsProgressBar/>
                    
                </div>
            </section>
        );
    }
}

export default Skills