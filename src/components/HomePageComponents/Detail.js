import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Section,Title,SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Bar from './Bar'

const MENUS = graphql`
{
    menus: allFile (filter: { 
      name: { eq : "data" } 
      sourceInstanceName: { eq : "meetups" }
    }) {
      edges {
        node {
            id
          childMeetupsJson{
            data{
              categories{
                name
                subcategories{
                  name
                  menuItems{
                    description
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  }



`


export default function Detail() {
  return (
    <Section>
     <StaticQuery   query={MENUS} render={data=>{
        
     const products = data.menus.edges

     return products.map(menu=>{
        return <Bar key={menu.node.id} product={menu.node}        />
     })

     }}  />
      
    </Section>
  )
}

const MenuList = styled.div`
margin: 3rem 0;
display:flex;


`