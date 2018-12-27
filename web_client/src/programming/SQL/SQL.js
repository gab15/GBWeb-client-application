import React, { Component } from 'react';

import { SQLKeywordsComponent } from './SQLReference/SQLKeywords';

export class SQLPropsComponent extends Component {
  constructor(props) {
    super(props)

    this.SQL = {
      header: 'SQL',
      topics: {
        'SQL Keywords': SQLKeywordsComponent
      }
    }
  }
}

export class SQLComponent extends SQLPropsComponent {
  render() {
    return (
      React.createElement('div', {}, 'SQL works!')
    )
  }
}

/*

If you can't start mysql, run services.msc, and check if mysql is running.  You can start it manually if not

*/
