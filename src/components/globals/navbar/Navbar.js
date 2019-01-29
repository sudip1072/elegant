import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'


export default class Navbar extends Component {
  
    state ={
        NavbarOpen:false
    }

    handleNavbar = ()=>{
        this.setState(()=>{
            return {NavbarOpen:!this.state.NavbarOpen}
        })
    }
    
  render() {
    return (
      <NavWrapper> 
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks NavbarOpen={this.state.NavbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
@media (min-width: 768px) {
    display: flex;
    align-items: center;

}

`