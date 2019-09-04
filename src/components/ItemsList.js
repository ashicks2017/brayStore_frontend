import React, { Component } from 'react'
import Item from './Items';
import { Container } from 'react-bootstrap';

export default class ItemList extends Component {
render() {
        return (
        <div className="py-4">
            <div className="container">
                 <div className="row">
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