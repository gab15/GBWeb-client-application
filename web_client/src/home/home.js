import React, { Component } from 'react';
import './home.css';

import { ContentBlockComponent } from '../global/contentBlocks/blockContent';
import { MathematicsPropsComponent } from '../mathematics/mathematics';
import { ProgrammingComponent } from '../programming/programming';
import { FinanceComponent } from '../finance/finance';

export class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.mathematics = (new MathematicsPropsComponent()).mathematics
    
    this.programming = (new ProgrammingComponent()).programming

    this.finance = (new FinanceComponent()).finance
  }

  render() {
    return (
      React.createElement('div', {className: 'home-content-blocks'}, [
        React.createElement(ContentBlockComponent, 
          {header: this.mathematics.header, topics: this.mathematics.topics, key: this.mathematics.header}),
        React.createElement(ContentBlockComponent, 
          {header: this.programming.header, topics: this.programming.topics, key: this.programming.header}),
        React.createElement(ContentBlockComponent, 
          {header: this.finance.header, topics: this.finance.topics, key: this.finance.header}),
      ])
    );
  }
}
