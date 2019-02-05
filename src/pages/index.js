import React from 'react'


import Layout from '../components/layout'
import {Link} from 'gatsby'

import SEO from '../components/seo'
import {Header ,Banner,BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import Menu from '../components/HomePageComponents/Menu'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
    <Header img={img}>

      <Banner title="eatery" subtitle="Janakpuri, District center - New Delhi">
      <Link to="/menu/" style={{textDecoration: 'none'}}>
      <BannerButton style={{margin:'2rem auto'}}>menu</BannerButton>
      </Link>
      
      
      </Banner>
    </Header>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)
  





export default IndexPage
