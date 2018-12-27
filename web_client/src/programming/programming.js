import React, { Component } from 'react';
import { ContentBlockComponent } from '../global/contentBlocks/blockContent';

import { JavaComponent } from './java/java';
import { SQLComponent } from './SQL/SQL';

export class ProgrammingPropsComponent extends Component {
  constructor(props) {
    super(props)

    this.programming = {
      header: 'Programming',
      topics: {
        'Python': ProgrammingComponent,
        'C#': ProgrammingComponent,
        'Bash': ProgrammingComponent,
        'Javascript': ProgrammingComponent,
        'MongoDB': ProgrammingComponent,
        'SQL': SQLComponent,
        'Java': JavaComponent,
      }
    }
  }
}

export class ProgrammingComponent extends ProgrammingPropsComponent {
  render() {
    return (
      React.createElement('div', {className: 'home-content-blocks'}, [
        React.createElement(ContentBlockComponent, 
          {header: this.programming.header, topics: this.programming.topics, key: this.programming.header}),
      ])
    );
  }
}