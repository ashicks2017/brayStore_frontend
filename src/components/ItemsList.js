import React, { Component } from 'react'
import Item from './Items';
import { Container } from 'react-bootstrap';



export default class ItemList extends Component {
render() {
        return (
        <div className="py-4">
            <div className="container">
                 <div className="row">
                 <h1 className="display-3  jumbo-head-text">Shopping on the Fly</h1>
                 <img className="center-fit" src= 'https://www.canva.com/learn/wp-content/uploads/2015/09/visual-design-composition-tb-1320x743.jpg' alt='Rose Background'/>
                   <h3> ALL ITEMS </h3>
                    <Container>
                      <div className= 'product-list'>
                     {this.props.displayproducts.map(item => <Item item={item} handleDetail={this.props.handleDetail}/>)}
                      </div>
                  </Container>
                </div>
             </div>
          </div>  
        )}
    }     