import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'


class Projects extends React.Component{
     render(){
       
            const projects = this.props.data.allProjectsJson.nodes.map((node, key) => {
            var technologies = node.tech_used;
            let tech = technologies.split(',');
            const techs = tech.map((item, key)=>
                <div key = {key} className="tags">{item}</div>
            );

            return ([
                <Link to={"/"+node.fields.slug} className="projectLink col-4" style={{backgroundImage: `url(${node.image})`}}>
                    <article key={node.id} >
                        <header className="major">
                            <h3>{node.title}</h3>
                            <p className="project_type">{node.project_type}</p>
                            <p>{node.description}</p>
                            
                        </header>
                        <p className="date">Realisation date: {node.date}</p>
                        <div className="tags-wrapper">{techs}</div>
                    </article>
                </Link>
            ]);
            
        })

         return(
             <section id="section-projects">
                 <div className="inner">
                     
                     <header className="major">
                         <h2>Projects</h2>
                     </header>
                     <div className="tiles grid-wrapper">
                        {projects}
                     </div>
                     
                 </div>
             </section>
         );
     }
 }


 export default () => (
    <StaticQuery
      query={graphql`
      query {
        allProjectsJson {
          nodes {
            title
            description
            id
            image
            fields {
                slug
            }
            long_description
            tech_used
            project_type
            date
            link
          }
        }
      }
    
      `}
      render={(data) => (
        <Projects data={data} />
        
      )}
    />
  )