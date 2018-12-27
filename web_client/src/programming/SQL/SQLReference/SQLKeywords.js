import React, { Component } from 'react';

import '../../../global/global.css';
import { BlogViewComponent } from '../../../global/global';
import { tableStyle as ts } from '../../../global/dataTables/dataTables' 

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const products = [
  {
    id: 1,
    name: 2,
    price: 3
  },
  {
    id: 4,
    name: 5,
    price: 6
  },
 ];
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerStyle: ts.headerStyle,
  style: ts.style
}, {
  dataField: 'name',
  text: 'Product Name',
  headerStyle: ts.headerStyle,
  style: ts.style
}, {
  dataField: 'price',
  text: 'Product Price',
  headerStyle: ts.headerStyle,
  style: ts.style
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />

export class SQLSelectContentComponent extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='SQLSELECT'>
          
          <h1 className='blogHeader'>
            SELECT
          </h1>

          <div className='blogSpacing'>

          </div>

          <div className='tableMargins'>
            The SELECT statment is used to get rows of data from a table, typically seen with a FROM 
          </div>

        </div>
      ])
    )
  }
}


export class SQLKeywordsComponent extends Component {
  constructor(props) {
    super(props)

    this.toggles = {
      'SQLSelectView': 'SELECT'
    }
  }

  render () {
    return (
      React.createElement(BlogViewComponent, {
        initialView: SQLSelectContentComponent, toggles: this.toggles})
    )
  }
}