import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

class ProjectDetail extends React.Component{
    
    
    render(){
        const current_project = this.props.pageContext
        
        return(
            <div>
                <Header page_origin="detail_page"/>
                <section id="section-projectdetail">
                    <div className="inner">
                        <header className="major">
                            <h2>{current_project.title}</h2>
                            <a className="btn_demo" href={current_project.link}>Go to Github Repo</a>
                        </header>
                        <div className="content">
                            <div className="content_left">
                                <img className="main_image" src={current_project.image} alt={current_project.image}/>     
                            </div>
                            <div className="content_right">
                                
                                <div className="italic_info">
                                    <p>Project type: {current_project.project_type}</p>
                                    <p>Realisation date: {current_project.date}</p>
                                </div>      
                                
                                {/* <p>{current_project.description}</p> */}
                                
                                <div dangerouslySetInnerHTML={{ __html:current_project.long_description }}/>
                                
                                <div className="tags-wrapper">
                                    {
                                        current_project.tech_used === undefined 
                                        ? <div className="tags"></div>
                                        :current_project.tech_used.split(',').map(function(item, key){ return <div key = {key} className="tags">{item}</div>;})
                                    }
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        
            
                    </div>
                    
                </section>
                <Footer/>
            </div>
           
                
        );
    }
}


export default ProjectDetail
  
