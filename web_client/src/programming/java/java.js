import React, { Component } from 'react';
import { JavaKeywordsComponent } from './javaReference/javaKeywords';

export class JavaPropsComponent extends Component {
  constructor(props) {
    super(props)

    this.java = {
      header: 'Java',
      topics: {
        'Java Keywords': JavaKeywordsComponent
      }
    }
  }
}

export class JavaComponent extends JavaPropsComponent {
  render() {
    return (
      React.createElement('div', {}, 'Java works!')
    )
  }
}
