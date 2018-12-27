import React, { Component } from 'react';

import './global.css';

import { 
  VectorsContentComponent, 
  LinearCombinationContentComponent,
  DotProductContentComponent,
  NormsContentComponent,
  VectorProjectionsContentComponent,
} from '../mathematics/linearAlgebra/linearAlgebraReference/vectors';

import {
  JavaAccessLevelsContentComponent,
  JavaClassContentComponent,
  JavaImportContentComponent,
} from '../programming/java/javaReference/javaKeywords';
import { 
  SQLSelectContentComponent 
} from '../programming/SQL/SQLReference/SQLKeywords';


export class BlogSelectViewComponent extends Component { 

  generateToggles = (toggleObject) => {
    let divElements = Object.keys(toggleObject).map(
      (ele) => React.createElement(
        'div', 
        {
          key: ele,
          className: 'blogToggle',
        },
        React.createElement('a', {className: 'blogToggleText', onClick: () => this.props.onClick(ele)}, toggleObject[ele])
      )
    )
    return divElements
  }

  render () {
    return (
      React.createElement('div', {key: 'blogTogglesBin', className: 'blogTogglesBin'}, [
        React.createElement('div', {key: 'blogTogglesHeader', className: 'blogTogglesHeader'}, [
          <div key='toggleHeader' className='blogToggleDecoration'>

            <h5>Reference Links:</h5>

          </div>
        ]),
        React.createElement('div', {key: 'blogToggles', className: 'blogToggles'}, this.generateToggles(this.props.toggles))
      ])
    )
  }

}


export class BlogLoadingComponent extends Component {
  render () {
    return (
      React.createElement('div', {}, 'Loading...')
    )
  }
}


export class BlogViewComponent extends Component {
  constructor(props) {
    super(props)
  
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      'view': this.props.initialView
    }
  }

  componentDidMount() { }

  handleClick(view) {
    switch(view) {
      /* SQL Views */
      case 'SQLSelectView':
        this.setState({'view': SQLSelectContentComponent})
        break

      /* Java Views */
      case 'javaAccessLevelsView':
        this.setState({'view': JavaAccessLevelsContentComponent})
        break

      case 'javaClassView':
        this.setState({'view': JavaClassContentComponent})        
        break

      case 'javaImportView':
        this.setState({'view': JavaImportContentComponent})
        break

      /* Linear Algebra Views */
      case 'dotProductsView':
        this.setState({'view': DotProductContentComponent})
        break

      case 'normsView':
        this.setState({'view': NormsContentComponent})
        break

      case 'linearCombinationsView':
        this.setState({'view': LinearCombinationContentComponent})
        break
      
      case 'vectorsView':
        this.setState({'view': VectorsContentComponent})
        break

      case 'vectorProjectionsView':
        this.setState({'view': VectorProjectionsContentComponent})
        break

      default:
        this.setState({'view': BlogLoadingComponent})
        break
    }
  }

  render () {
    return (
      React.createElement('div', {className: 'blogContent'},
        [        
          React.createElement(BlogSelectViewComponent, {key: 'viewContent', onClick: this.handleClick, toggles: this.props.toggles}),
          React.createElement(this.state.view, {key: 'globalContent'})
        ]
      )
    )
  }
}


export class InlineCodeBlock extends Component {
  render() {
    return (
      React.createElement('span', {className: this.props.className}, [this.props.sampleCode])
    )
  }
}


export class CodeBlockTypesTab extends Component {

  createLanguageTabs = () => {
    let codeTabs = this.props.languages.map(
      (ele) => React.createElement('div', {key: 'k' + ele, className: 'codeBlockToggleBar'}, [
        React.createElement(
          'a', {key:'languageTab' + ele, className: ele === this.props.selectedLanguage ? 'codeBlockToggleText codeBlockToggleTextClicked' : 'codeBlockToggleText', onClick: () => this.props.languageClick(ele)}, [ele])
      ])
    )

    return codeTabs
  }

  render() {
    return (
      React.createElement('div', {key: 'thing', className: 'codeBlockToggleContainer'}, 
        this.createLanguageTabs(this.props.languages)
      )
    )
  }
}


export class CodeBlockTypesTabs extends Component {
  render() {
    return (
      React.createElement('div', {}, [
        <CodeBlockTypesTab key='codeBlockTypeTab' selectedLanguage={this.props.selectedLanguage} languageClick={this.props.languageClick} languages={this.props.languages} />
      ])
    )
  }
}

/* <CodeBlockTypes languageObject={{'java': thing, 'python': 'also does things'}} /> */
export class CodeBlockTypes extends Component {
  constructor(props) {
    super(props);

    this.languageClick = this.languageClick.bind(this)

    this.languages = Object.keys(this.props.languageObject)

    this.state = {
      'language': this.languages[0]
    }
  }

  languageClick(language) {
    this.setState({'language': language})
  }

  render() {
    return (
      React.createElement('div', {}, [
        <CodeBlockTypesTabs key='codeBlockTypes' languageClick={this.languageClick} languages={this.languages} selectedLanguage={this.state['language']} />,
        <CodeBlock key='codeBlock' className={'blogCodeBlock compiledCodeBlock'} sampleCode={this.props.languageObject[this.state['language']]} />
      ])
    )
  }
}

export class CodeBlock extends Component {
  render() {
    return (
      React.createElement('pre', {className: this.props.className}, [this.props.sampleCode])
    )
  }
}