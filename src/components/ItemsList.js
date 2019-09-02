import React, { Component } from 'react'
import Item from './Item';

export default class ItemList extends Component {
render() {
        return (
            <div className="py-4">
             <div className="container">
                   <div className="row">
                   <h3> ALL ITEMS </h3>
                  <div className="row">
              {this.props.displayitems.map(item => <Item item={item} handleDetail={this.props.handleDetail}/>)}
            </div>
            </div>
            </div>
          </div>  
        )}
            
              