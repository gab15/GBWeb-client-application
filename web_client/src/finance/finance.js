import React, { Component } from 'react';
import { ContentBlockComponent } from '../global/contentBlocks/blockContent';

export class FinancePropsComponent extends Component {
  constructor(props) {
    super(props)

    this.finance = {
      header: 'Finance',
      topics: {
        'Options': FinanceComponent,
        'Portfolio Theory': FinanceComponent,
        'Cash Flow': FinanceComponent,
        'Derivatives': FinanceComponent,
        'Financial Mathematics': FinanceComponent,
        'etc.': FinanceComponent
      }
    }
  }
}

export class FinanceComponent extends FinancePropsComponent {
  render() {
    return (
      React.createElement('div', {className: 'home-content-blocks'}, [
        React.createElement(ContentBlockComponent, 
          {header: this.finance.header, topics: this.finance.topics, key: this.finance.header}),
      ])
    );
  }
}