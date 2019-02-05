import React from 'react'


import Layout from '../components/layout'

import SEO from '../components/seo'
import {PageHeader, Banner} from '../utils'
import menutImage from '../images/bcg/menuBcg.jpeg'
import Menu from '../components/HomePageComponents/Menu'
import Detail from '../components/HomePageComponents/Detail'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
    <PageHeader img={menutImage}>
    <Banner title="menu" subtitle={`let's dig in`}></Banner>
    
    </PageHeader>
    <Menu />
  </Layout>
)




export default MenuPage