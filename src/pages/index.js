import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


class HomeIndex extends React.Component {
    
    render() {

        return (
                <Layout>
                    <Helmet title="Portfolio - Riana Andrianome" meta={[{ name: 'description', content: 'Sample' },{ name: 'keywords', content: 'sample, something' },]}>
                    </Helmet>
            
                    <Banner />

                    <div id="main">
                        
                        <Skills/>
                        <Projects/>
                        
                    </div>

                </Layout>
        )
    }
}

export default HomeIndex