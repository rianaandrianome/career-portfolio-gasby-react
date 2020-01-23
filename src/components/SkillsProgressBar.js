import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


class SkillsProgressBar extends React.Component{
    render(){
        return(
            <div className="progress-bar-wrapper grid-wrapper">
                <div className="skill-cat col-3">
                    <ProgressBar animated now={100} label="HTML, CSS, Bootstrap" />
                    <ProgressBar animated now={100} label="Sass, Scss" />
                    <ProgressBar animated now={100} label="JS, Jquery" />
                    <ProgressBar animated now={90} label="React JS" />
                    <ProgressBar animated now={90} label="Angular JS" />
                    <ProgressBar animated now={90} label="Node JS" />
                    <ProgressBar animated now={90} label="Gatsby JS" />
                    <ProgressBar animated now={100} label="Adobe Photoshop" />
                    <ProgressBar animated now={80} label="Adobe Illustrator" />
                    <ProgressBar animated now={80} label="Adobe Flash" />
                </div>
                <div className="skill-cat col-3">
                    <ProgressBar animated now={100} label=".NET technologies" />
                    <ProgressBar animated now={100} label="C#" />
                    <ProgressBar animated now={100} label="Java" />
                    <ProgressBar animated now={80} label="Python" />
                    <ProgressBar animated now={100} label="PHP" />
                    <ProgressBar animated now={100} label="Object Oriented programming" />
                    <ProgressBar animated now={100} label="Wordpress" />
                    <ProgressBar animated now={100} label="Drupal" />
                    <ProgressBar animated now={70} label="Magento" />
                    <ProgressBar animated now={100} label="Windev 22" />
                </div>
                <div className="skill-cat col-3 ">
                    <ProgressBar animated now={100} label="Android Studio" />
                    <ProgressBar animated now={100} label="Xamarin" />
                    <ProgressBar animated now={70} label="Flutter" />
                    <ProgressBar animated now={100} label="Jquery Mobile" />
                    <ProgressBar animated now={100} label="Adobe Cordova" />
                </div>
                <div className="skill-cat col-3">
                    <ProgressBar animated now={100} label="SQL, Mysql" />
                    <ProgressBar animated now={100} label="SQlite" />
                    <ProgressBar animated now={70} label="MongoDB" />
                    <ProgressBar animated now={100} label="Oracle" />
                    <ProgressBar animated now={100} label="Microsoft Access" />
                </div>
                
            </div>

            
        );
    }
}

export default SkillsProgressBar

