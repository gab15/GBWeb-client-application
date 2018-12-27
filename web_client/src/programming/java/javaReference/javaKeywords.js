import React, { Component } from 'react';

import '../../../global/global.css';
import { BlogViewComponent, CodeBlockTypes, CodeBlock, InlineCodeBlock } from '../../../global/global';


const thing = `\
class Stanford extends College() {
  private static void main(String args[]) {
    return 1;
  }
}
`

export class JavaAccessLevelsContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='javaAccessLevels'>
          
          <h1 className='blogHeader'>
            Access Levels
          </h1>

          <div>
            Access control for each member within a class is determined through the following keywords in Java: 
          </div>

          <div className='blogCodeBlock'>
            public, private, protected
          </div>

          <div>
            The <span className='blogInlineCodeBlock'>public</span> keyword means that the defined item is visible or accessible globally.  If it is unsuitable to call a member outside of a class, avoid the use of <span className='blogInlineCodeBlock'>public</span>. An example of a use case for public would be an integrated method call, which uses <span className='blogInlineCodeBlock'>private</span> members of the same class to complete a process or function for a desired output.
          </div>

          <div>
            The <span className='blogInlineCodeBlock'>protected</span> members of a class are accessible to the parent class, package, and subclasses. When no access level indicator is supplied, the behavior of the unindicated member mimcs that of a protected class in JDK 10.
          </div>

          <div>
            Members defined as <span className='blogInlineCodeBlock'>private</span> are only accessible by the parent class.  Note that regardless of the defined access control, any class holding methods always has access to them.
          </div>

          <div>
            After each of the above definitions, use basic linear switches as seen in abstracted electrical circuits to show access between scopes.
          </div>

        </div>
      ])
    )
  }
}

export class JavaClassContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='javaClass'>
          
          <h1 className='blogHeader'>
            class
          </h1>

          <div className='blogSpacing'>
            The class keyword is used ubiquitously in Java, due to the object oriented nature of the language.  Classes are used to define variables, methods or functions, <InlineCodeBlock className={'blogInlineCodeBlock compiledCodeBlock'} sampleCode={'if/else'} /> or other code blocks, and even if you don't define one explicitly, constructors.  Variables defined within a class and outside any method are are accessible by other constructors or methods within the class.  These are referred to as instance variables.
          </div>

          <CodeBlock className={'blogCodeBlock compiledCodeBlock'} sampleCode={thing} />

          <CodeBlockTypes languageObject={{'java': thing, 'python': 'also does things'}} />

          <div>
            Local variables, or variables defined within methods, constructors, or blocks, are destroyed after the code executes. 
          </div>

          <div className='blogCodeBlock'>
            EXAMPLE OF HOW TO DEFINE AND CALL LOCAL VARIABLES IN A CLASS METHOD
          </div>

          <div>
            Methods of a class can be called via an instance variable created through the constructor.
          </div>

        </div>
      ])
    )
  }
}


export class JavaImportContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='javaImport'>
          
          <h1 className='blogHeader'>
            import
          </h1>

        </div>
      ])
    )
  }
}


export class JavaPackageContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='javaPackage'>
          
          <h1 className='blogHeader'>
            package
          </h1>

        </div>
      ])
    )
  }
}


export class JavaKeywordsComponent extends Component {
  constructor(props) {
    super(props)

    this.toggles = {
      'javaAccessLevelsView': 'Access Levels',
      'javaClassView': 'class',
      'javaImportView': 'import'
    }
  }

  render () {
    return (
      React.createElement(BlogViewComponent, {
        initialView: JavaClassContentComponent, toggles: this.toggles})
    )
  }
}