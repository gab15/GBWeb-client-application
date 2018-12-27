import React, { Component } from 'react';
import { VectorsComponent } from './linearAlgebraReference/vectors';

export class LinearAlgebraPropsComponent extends Component {
  constructor(props) {
    super(props)

    this.linearAlgebra = {
      header: 'Mathematics',
      topics: {
        'Vectors': VectorsComponent
      }
    }
  }
}

export class LinearAlgebraComponent extends LinearAlgebraPropsComponent {
  render() {
    return (
      React.createElement('div', {}, 'Linear Algrebra works!')
    )
  }
}