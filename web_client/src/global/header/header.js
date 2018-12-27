import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './header.css';

import { HomeComponent } from '../../home/home';

import { MathematicsComponent, MathematicsPropsComponent } from '../../mathematics/mathematics';
import { LinearAlgebraPropsComponent } from '../../mathematics/linearAlgebra/linearAlgebra';

import { ProgrammingComponent, ProgrammingPropsComponent } from '../../programming/programming';
import { JavaPropsComponent } from '../../programming/java/java';
import { SQLPropsComponent } from '../../programming/SQL/SQL';

import { FinanceComponent, FinancePropsComponent } from '../../finance/finance';

class TopHeaderComponent extends Component {
  render() {
    return (
      React.createElement(
        'div', 
        {className: 'top-header'}, 
        'Gregory A. Barron'
      )
    )
  }
}

class FixedHeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    
    this.state = {
      classUpdate: 'top-nav'
    }
  }

  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  // Don't put a setState() in here - it won't show up in window anywhere afterwards
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll() {

    window.scrollY > 64 ? this.setState({classUpdate: 'top-nav top-nav-stick-on-scoll'}) : this.setState({classUpdate: 'top-nav'})
  };

  render() {
    return (
      React.createElement(
        'nav', 
        {className: this.state.classUpdate}, 
        React.createElement(HeaderListComponent)
      )
    )
  }
}

class HeaderListComponent extends Component {
  constructor(props) {
    super(props)

    this.headerMap = {
      '': HomeComponent,
      'mathematics': MathematicsComponent,
      'programming': ProgrammingComponent,
      'finance': FinanceComponent,
      'about': HomeComponent,
      'contact': HomeComponent,
    }

    this.headerElements = Object.keys(this.headerMap).map((v, i) =>      
      React.createElement(
        'li', 
        {className: 'header-list-element', key: i},
        React.createElement(
          Link, 
          {className: 'header-list-link', to: v, key: 'link' + i}, 
          v ? v : 'home'
        )
      )
    )
  }

  render() {
    return (
      React.createElement('div', {}, [
        React.createElement(
          'ul', 
          {className: 'header-list', key: 'header-list'}, 
          this.headerElements
        ),
      ])
    );
  }
}

export class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.routingArray = [
      React.createElement(TopHeaderComponent, {key: 'top-header'}),
      React.createElement(FixedHeaderComponent, {key: 'fixed-header'}, HeaderListComponent),
      React.createElement(Route, {exact: true, path: '/', component: HomeComponent, key: 'home-route'}),
      React.createElement(Route, {path: '/mathematics', component: MathematicsComponent, key: 'mathematics-route'}),
      React.createElement(Route, {path: '/programming', component: ProgrammingComponent, key: 'programming-route'}),
      React.createElement(Route, {path: '/finance', component: FinanceComponent, key: 'finance-route'}),
    ]

    this.routingArray.push(this.getRoutes(Object(new MathematicsPropsComponent()).mathematics))
    this.routingArray.push(this.getRoutes(Object(new LinearAlgebraPropsComponent()).linearAlgebra))

    this.routingArray.push(this.getRoutes(Object(new ProgrammingPropsComponent()).programming))
    this.routingArray.push(this.getRoutes(Object(new JavaPropsComponent()).java))
    this.routingArray.push(this.getRoutes(Object(new SQLPropsComponent()).SQL))


    this.routingArray.push(this.getRoutes(Object(new FinancePropsComponent()).finance))

  }

  getRoutes = (directory) => {
    let divElements = Object.keys(directory.topics).map(
      (ele) => React.createElement(
        Route, 
        {
          path: '/' + ele.toLowerCase().replace(' ', '-'), 
          key: ele,
          component: directory.topics[ele]
        }
      )
    )
    return divElements
  }

  render() {
    return (
      React.createElement('div', {}, this.routingArray)
    );
  }
}
