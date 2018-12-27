import React, { Component } from 'react';
import { LinearAlgebraComponent } from './linearAlgebra/linearAlgebra';
import { ContentBlockComponent } from '../global/contentBlocks/blockContent';


export class MathematicsPropsComponent extends Component {
  constructor(props) {
    super(props)

    this.mathematics = {
      header: 'Mathematics',
      topics: {
        'Linear Algebra': LinearAlgebraComponent, 
        'Geometry': MathematicsComponent, 
        'Differential Equations': MathematicsComponent, 
        'Complex Algebra': MathematicsComponent, 
        'Calculus': MathematicsComponent, 
        'Probability': MathematicsComponent,
      },
    }    

  }
}

export class MathematicsComponent extends MathematicsPropsComponent {
  render() {
    return (
      React.createElement('div', {className: 'home-content-blocks'}, [
        React.createElement(ContentBlockComponent, 
          {header: this.mathematics.header, topics: this.mathematics.topics, key: this.mathematics.header}),
      ])
    )
  }
}