import React from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'






// const Subcategory = ({product})=>{
//   <div>
// <h2>{product.name}</h2>

// <ul>
// {product.menuItems.map(menuItem => (
//  <li key={menuItem .description}>
//    {menuItem .description}
//      <span menuItem ="price">{menuItem .price}</span>
//   </li>
// ))}
// </ul>
// </div>

// }



// const Category =({product})=>{

// const subcat = product.childMeetupsJson.data.subcategories  

// {subcat.map(subcategory=>{
// return  <Subcategory key={subcategory.name} product={subcategory} />

// })}

// }




export default function Bar({product}){

  const {categories,id,subcategories,name, price,description} = product;
    //console.log(product);
  
    return (
       
      <BarWrapper>
    <div className="menu" >
     <ul>
      {product.childMeetupsJson.data.categories.map(category=>{
        
      return   <li>{category.name} </li>
      

      })}
       </ul>
    </div>

    </BarWrapper>

       
     
    )
    
   

}



const BarWrapper = styled.div`
.menu {
    background: #eee;
    padding: 10px;
    max-width: 100%;
    overflow: hidden;
    min-height: 100vh;
  }

`
const MenuWrapper = styled.div`
.category:nth-child(even) {
    background: #0b0b09;
  }
  .category:nth-child(odd) {
    background: #a72203;
  }
  .category {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 90vw 1fr;
  }
  @media (min-width: 750px) {
    .category {
      grid-template-columns: 1fr 700px 1fr;
    }
  }
  .category > :global(div) {
    grid-column-start: 2;
  }


`

const CategoryWrapper = styled.div`
ul,
h2 {
  margin: 0;
  text-transform: lowercase;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-family: Arial;
}
.subcategory {
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: rotate(-5deg);
  justify-content: flex-end;
}
@media (min-width: 750px) {
  .subcategory {
    flex-direction: row;
  }
}
.subcategory > h2 {
  font-size: 3rem;
  margin-right: 20px;
  margin-bottom: 20px;
}
.price {
  margin-left: 20px;
}

`

const LogoWrapper = styled.div`
h1 {
    margin: 0;
    grid-column-start: 2;
    justify-self: flex-end;
    transform: rotate(-5deg);
    padding: 20px;
    font-size: 5rem;
  }


`

