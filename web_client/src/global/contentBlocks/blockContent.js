import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blockContent.css'


class ContentBlockHeaderComponent extends Component {
  render() {
    return (
      React.createElement('div', {className: 'content-block-header'}, this.props.header)
    )
  }
}

class ContentBlockTopicsComponent extends Component {
  constructor(props) {
    super(props)

    this.contentBlockLinks = Object.keys(this.props.topics).map(
      (v, i) => React.createElement(
        Link, 
        {
          className: 'content-topics-link', 
          to: '/' + v.toLowerCase().replace(' ', '-'), 
          key: 'link' + i,
        }, 
        v
        )
      )
  }

  render() {
    return (
      React.createElement('ul', {className: 'content-topics-links-bin'}, this.contentBlockLinks)
    )
  }
}

class ContentBlockContainerComponent extends Component {
  render() {
    return (
      React.createElement(
        'div', 
        {className: 'content-block'}, 
        [
          React.createElement(ContentBlockHeaderComponent, 
            {key: 'block-header', header: this.props.header}),
          React.createElement(ContentBlockTopicsComponent, 
            {key: 'block-topics', header: this.props.header, topics: this.props.topics})
        ]
      )
    )
  }
}

export class ContentBlockComponent extends Component {
  render() {
    return (
      React.createElement('div', {}, React.createElement(
        ContentBlockContainerComponent, Object.assign({key: 'content'}, this.props)))
    );
  }
}