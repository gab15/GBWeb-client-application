import React, { Component } from 'react';

import { InlineMath, BlockMath } from 'react-katex';

import '../../../global/global.css';
import { BlogViewComponent } from '../../../global/global';


export class VectorsContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='vectors'>

        <h1 className='blogHeader'>
          Vectors
        </h1>
        
        <div className='blogSpacing'>
          A vector is a list of information which is significant to some context.  Entries or elements in a vector could be objects, numbers, or abstractions denoted by a letter.  In physics, quantities with magnitude and direction that emanate from a reference point are referred to as vectors.  
        </div>
        
        <div className='blogSpacing'>
          Let <InlineMath math='\overrightharpoon{v}, \overrightharpoon{u} \in \Re^3' /> where <InlineMath math='\overrightharpoon{v} = \left[a, b, c\right]' /> and <InlineMath math='\overrightharpoon{u} = \left[a\prime, b\prime, c\prime\right]' />, with a reference point <InlineMath math='\theta = \overrightharpoon{0}' />.  Each vector emanates from <InlineMath math='\theta' /> as follows:
        </div>
        
        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_abstract.png')} alt='u, v abstract' />
        </div>
               
        <div>
          Scalar multiplication amplifies the magnitude, and retains the direction of the vector unless the constant is negative, in which case the direction is flipped.  Each element in the vector is multiplied by the constant.  Given a constant <InlineMath math='k' />, <BlockMath math='k\overrightharpoon{v} = k[a, b, c] = [ka, kb, kc]' />
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_abstract_negative_scalar.png')} alt='v negative scalar abstract' />
        </div>

        <div>
          Vector addition is done using the parallelogram law, where <InlineMath math='\overrightharpoon{v} + \overrightharpoon{u}' /> is the diagonal of the parallelogram created by <InlineMath math='\overrightharpoon{v}' /> and <InlineMath math='\overrightharpoon{u}' /> via 'tail-to-tip'.
          This diagonal can be obtained by adding the respective elements of the vectors together: <BlockMath math='\overrightharpoon{v} + \overrightharpoon{u} = \left[a + a\prime, b + b\prime, c + c\prime\right]' />
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_abstract_parallelogram.png')} alt='u, v abstract' />
        </div>

        <div>
          Vector subtraction is the same as vector addition, except one of the vectors is multiplied by a negative scalar: <BlockMath math='\overrightharpoon{v} - \overrightharpoon{u} = \overrightharpoon{v} + (-1)\overrightharpoon{u} = \left[a + (-1)a\prime, b + (-1)b\prime, c + (-1)c\prime\right]' />
        </div>

        <div>
          In n-space, <InlineMath math='\Re^n'/>, vectors can be represented using letters and subscripts: <BlockMath math='\overrightharpoon{v_{n}} = [a_{1}, a_{2}, \dotsc, a_{n}]' />
        </div>

        <div>
          where each subscript represents the coordinates, or elements of <InlineMath math='\overrightharpoon{v_{n}}' />.  When working with matrices, it may be valuable to write vectors as columns: <BlockMath math='\overrightharpoon{v_{n}} = \small{\left[ \begin{matrix} a_{1} \cr a_{2} \cr \dotsc \cr a_{n} \end{matrix}\right]}' />
        </div>

        <div className='blogSpacing'>
          Orientation matters when dealing with matrices and matrix multiplication.  Pay close attention to how matrices are constructed to determine which vector orientation is suitable for the problem at hand.  
        </div>

        </div>
        ]
      )
    )
  }
}


export class LinearCombinationContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='linearCombination'>
          
        <h1 className='blogHeader'>
          Linear Combinations
        </h1>

        <div>
          It can be useful to break down or construct vectors with other vectors.  Consider the vector  <InlineMath math='\overrightharpoon{v} = \left[ 0, 2, 5 \right]' />.  We can express the same vector through scalar multiplication: <BlockMath math='\overrightharpoon{v} = (2) \left[ 0, 1, 2.5 \right]' />
        </div>

        <div>
          Furthermore, we could add vectors together element-wise, each having their own scalar constant to create the same vector. <BlockMath math='\small{\begin{aligned}  \overrightharpoon{v} &= (-3)\left[ 2, 4, 1 \right] + (2) \left[ 1, 3, 2 \right] + (2)\left[ 2, 4, 2 \right] \\ &= \left[ 0, 2, 5 \right] \end{aligned}}' />
        </div>

        <div className='blogSpacing'>
          The above vector <InlineMath math='\overrightharpoon{v}'/> is called a linear combination. Recall that vectors are put tail to tip as they are added together.  The geometry as the  defined vectors are added together looks like this:
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_linear_combination.png')} alt='linear combination example' />
        </div>

        <div>
          For a formal definition of the linear combination, let <InlineMath math='\overrightharpoon{v_{1}}, \overrightharpoon{v_{2}}, \dotsc, \overrightharpoon{v_{n}} \in \Re^{n}' />, where each element of <InlineMath math='\Re^{n}' /> is a vector, and let <InlineMath math='c_{1}, c_{1}, \dotsc, c_{n}' /> be scalar constants.  The resulting vector <InlineMath math='\overrightharpoon{w}' /> formed from the vector addtion of each scaled vector is called a linear combination. <BlockMath math='\overrightharpoon{w} = c_{1}\overrightharpoon{v_{1}} + c_{2}\overrightharpoon{v_{2}} + \dotsc + c_{n}\overrightharpoon{v_{n}}' />
        </div>

        <div className='blogSpacing'>
          It can be ambiguous if the resulting values, or the equations of linear combinations are being referred to at a given time, but it may be safer to consider the linear combiation in terms of the equation of summed vectors since the value can always be extracted from it. The scalar constants multiplying the vectors may be called weights in some instances.
        </div>

        </div>
      ])
    )
  }
}


export class NormsContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='norms'>

        <h1 className='blogHeader'>
          Vector Norms
        </h1>

        <div>
          To give a frame of reference for the concept of vector norms, recall Pythagoras' theorem, used to find the length of a side on a right triangle: <BlockMath math='a^{2} + b^{2} = c^{2}' />
        </div>

        <div className='blogSpacing'>
          Solving for a letter will give the length of its respective line forming the triangle.  In the context of vector math, the length of vector will always be the hypotenuse; the <InlineMath math='\large{c}' /> in the above equation.  Consider the vector <InlineMath math='\overrightharpoon{c} = \large{\left[ a, b \right]}' /> in <InlineMath math='\Re^{2}' />, with a reference point at the origin.  The vector <InlineMath math='\overrightharpoon{c}' />, similar to our basic algebra equation up top, is formed by the right triangle created by the coordinates <InlineMath math='\large{\left[ a, b \right]}' />:
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_linear_combination.png')} alt='linear combination example' />
        </div>

        <div>
          Vector length is calculated in the same way as solving for <InlineMath math='\large{c}' /> in  Pythagoras' theorem, namely <InlineMath math='\overrightharpoon{c} = \sqrt{\small{a^{2} + b^{2}}}' />.  In terms of vector math and linear algebra, the same result can be acquired with the dot product: <BlockMath math='\small{\begin{Vmatrix} \overrightharpoon{c} \end{Vmatrix}} = \sqrt{\small{\overrightharpoon{c} \cdot \overrightharpoon{c}}} = \large{\sqrt{a^{2} + b^{2}}}' />
        </div>

        <div>
          To extend this to n-space, let <InlineMath math='\overrightharpoon{v} \in \Re^{n}' />, where <InlineMath math='\overrightharpoon{v} = \left[ v_{1}, v_{2}, \dotsc, v_{n} \right]' />. The norm, or length of the vector <InlineMath math='\overrightharpoon{v}' /> is then <BlockMath math='\small{\begin{Vmatrix} \overrightharpoon{v} \end{Vmatrix}} = \sqrt{\overrightharpoon{v} \cdot \overrightharpoon{v}} = \sqrt{ v_{1}^{2} + v_{2}^{2} + \cdots + v_{n}^{2} }' />
        </div>

        <div className='blogSpacing'>
          where <InlineMath math='\overrightharpoon{v}' /> is the non-negative square root of <InlineMath math='\overrightharpoon{v} \cdot \overrightharpoon{v}' />.  By definition, <InlineMath math='\small{\begin{Vmatrix} \small{\overrightharpoon{v}} \end{Vmatrix} } \large{ \ge 0}' />, and is only zero when <InlineMath math='\overrightharpoon{v} = \overrightharpoon{0}' />.  The underlying geometry is still the same, there are just more elements forming the vector.
        </div>

        <div className='blogSpacing'>
          When the norm of a vector is equal to one, or if <InlineMath math='\overrightharpoon{v} \cdot \overrightharpoon{v} = 1' />, then it is referred to as a unit vector. Here are a few examples of what unit vectors could look like in <InlineMath math='\Re^{2}' />, again each emanating from the origin:
        </div>
        
        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_linear_combination.png')} alt='linear combination example' />
        </div>

        <div>
          To obtain a unit vector <InlineMath math='\large{\widehat{\small{v}}}' /> pointing in the same direction as <InlineMath math='\overrightharpoon{v}' />, referred to as normalizing a vector, divide <InlineMath math='\overrightharpoon{v}' /> by its norm. This unit vector is unique to the vector used to create it. <BlockMath math='\large{\widehat{\small{v}}} = \frac{1}{\tiny{\begin{Vmatrix} \tiny{\overrightharpoon{v}} \end{Vmatrix}}} \overrightharpoon{v} = \frac{\small\overrightharpoon{v}}{\tiny{\begin{Vmatrix} \tiny{\overrightharpoon{v}} \end{Vmatrix}}}' />
        </div>

        <div className='blogSpacing'>
          Consider THIS VECTOR defined in <InlineMath math='\Re^{2}' />.  Notice these cool things about the picture that I generate in the future.
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_linear_combination.png')} alt='linear combination example' />
        </div>

        <div className='blogSpacing'>
          These are so cool and will be useful in the future for the purpose that I will figure out at another time.
        </div>

        <div>
          Distance is defined as the norm of the difference between two vectors.  Recall that vector subtraction is the same as vector addition, but with a negative scalar multplying one of the vectors, resulting in a vector. The distance between two vectors is the length of the resulting hyponenuse of the vector subtraction. <BlockMath math='\small{\begin{Vmatrix} \overrightharpoon{u} - \overrightharpoon{v} \end{Vmatrix} = \sqrt{(\overrightharpoon{u} - \overrightharpoon{v}) \cdot (\overrightharpoon{u} - \overrightharpoon{v})} = \sqrt{\left( u_{1} - v_{1} \right)^{2} + \left( u_{2} - v_{2} \right)^{2} + \cdots + \left( u_{n} - v_{n} \right)^{2} }}' />
        </div>

        </div>
      ])
    )
  }
}


export class DotProductContentComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      React.createElement('div', {}, [
        <div key='dotProduct'>
          
        <h1 className='blogHeader'>
          Dot Products
        </h1>

        <div>
          There are several ways that vector multiplication could be defined, each having a different use case, and geometric implication. Dot products, also referred to as inner products, describe the angle between two vectors.  Let <InlineMath math='\overrightharpoon{v} = \left[ 2, 3 \right]' /> and <InlineMath math='\overrightharpoon{u} = \left[ 1, 4 \right]' />.  The dot product of these two vectors is obtained through summing all results of element-wise multiplication of the vectors: <BlockMath math='\overrightharpoon{v} \cdot \overrightharpoon{u} = 2(1) + 3(4) = 14' />
        </div>

        <div className="blogSpacing">
          The vertically centered dot, <InlineMath math='\cdot' />, signifies the dot product between <InlineMath math='\overrightharpoon{v}' /> and <InlineMath math='\overrightharpoon{u}' /> in the above equation.  Determining the meaning of the resulting scalar value of this equation is a bit nebulous without further context, so that will be clarified with a few pictures after the general definition.
        </div>

        <div>
          Let <InlineMath math='\overrightharpoon{v}, \overrightharpoon{u} \in \Re^{n}' />, where <InlineMath math='\overrightharpoon{v} = \left[ v_{1}, v_{2}, \dotsc, v_{n} \right]' /> and <InlineMath math='\overrightharpoon{u} = \left[ u_{1}, u_{2}, \dotsc, u_{n} \right]' />.  The dot product between <InlineMath math='\overrightharpoon{v}' /> and <InlineMath math='\overrightharpoon{u}' /> is defined as <BlockMath math='\overrightharpoon{v} \cdot \overrightharpoon{u} = \sum_{i=1}^{n} v_{i}u_{i} = v_{1}u_{1} + v_{2}u_{2} + \dotsc + v_{n}u_{n}' />
        </div>
        
        <div>
          To understand the implied geometry of the dot product resulting value, start with a simple vector in <InlineMath math='\Re^{2}' /> defining <InlineMath math='\overrightharpoon{v} = \left[ 5, 0 \right]' />.  The following graphic contains vectors emanating from the origin at several different angles between <InlineMath math='\overrightharpoon{v}' />.  Numbers at the end of the vectors represent the resulting dot product between that vector, and <InlineMath math='\overrightharpoon{v}' />.
        </div>

        <div className='blogSpacing blogPictureDiv'>
          <img className='blogPictureImg' src={require('../../../statics/pictures/vectors/vectors_linear_combination.png')} alt='linear combination example' />
        </div>

        <div>
          Notice that vectors that are orthogonal to <InlineMath math='\overrightharpoon{v}' /> have dot products equal to <InlineMath math='0' />. Recall that <InlineMath math='\large{\cos}\left( 90\degree \right) = \large{\cos}\left( -90\degree \right) = 0' />.  This hints that there may be a certain relationship with the <InlineMath math='\large{\cos}' /> of the angle between the two vectors, and the dot product.  The exact relationship between the dot product and the angle between two vectors is generalized by the following definition: <BlockMath math='\overrightharpoon{v} \cdot \overrightharpoon{u} = \begin{Vmatrix} v \end{Vmatrix} \begin{Vmatrix} u \end{Vmatrix} \Large{\cos}\left( \theta \right)' />
        </div>
        
        <div>
          where the angle <InlineMath math='\theta' /> can be found through normalizing the dot product and taking the <InlineMath math='\large{\arccos}' /> of both sides of the equation <BlockMath math='\Large{\theta} = \Large{\arccos}\left( \small\frac{\overrightharpoon{v} \cdot \overrightharpoon{u}}{\begin{Vmatrix} v \end{Vmatrix} \begin{Vmatrix} u \end{Vmatrix}} \right)' />
        </div>

        <div className='blogSpacing'>
          For a quick reminder of the trigonometry used above, in a right triangle, <InlineMath math='\large{\cos}' /> is the ratio of the line adjacent to the acute angle over the hypotenuse.  The <InlineMath math='\large{\arccos}' /> is its inverse.  Note that the dot product needs to be normalized in order to calculate the angle.  Multplying the norm, or length, of a vector by the cosine of the angle will result in the length of the adjacent.
        </div>
        
        </div>
      ])
    )
  }
}


export class VectorProjectionsContentComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return React.createElement('div', {}, [
      <div key='vectorProjections'>

      <h1 className='blogHeader'>
        Vector Projections
      </h1>

      <div>
        The equation for vector projections is made up of three parts, the dot product between the vector being projected and the vector being projected on, the squared norm of the vector being projected on, and the vector itself that is being projected on.  Each of these parts will be explained to give a complete example, and hopefully a complete understanding of vector projections.  The equation for projecting a vector <InlineMath math='\overrightharpoon{u}' /> onto another vector <InlineMath math='\overrightharpoon{v}' /> is <BlockMath math='\large{\text{Proj}}\left( \overrightharpoon{u}, \overrightharpoon{v} \right) = \frac{\small{\overrightharpoon{u} \cdot \overrightharpoon{v}}}{\tiny{\begin{Vmatrix} \overrightharpoon{v} \end{Vmatrix}}^{\tiny{2}}}\overrightharpoon{v} = \frac{\small{\overrightharpoon{u} \cdot \overrightharpoon{v}}}{\small{\overrightharpoon{v} \cdot \overrightharpoon{v}}}\overrightharpoon{v}' />
      </div>

      <div className='blogSpacing'>
        Since the results of dot products and norms are both scalar, we can rewrite the result of the projection as <InlineMath math='k\overrightharpoon{v}' />, where <InlineMath math='k' /> is the division in the equation.  So the result of a vector projection is scalar multiplcation of the vector being projected on.  This makes sense, since the "shadow" should fall somwhere along the length of the vector <InlineMath math='\overrightharpoon{v}' />.
      </div>

      <div>
        The cosine of the angle between the vector <InlineMath math='\overrightharpoon{v}' /> and itself is <InlineMath math='\cos{\left( 0\degree \right)} = 1' />, since the two vectors involved in the dot product are on top of each other.  We are left with the multiplication of the two norms of <InlineMath math='\overrightharpoon{v}' />, or the squared length of <InlineMath math='\overrightharpoon{v}' />.
      </div>
        
      </div>
    ])
  }
}


export class VectorsComponent extends Component {
  constructor(props) {
    super(props)

    this.toggles = {
      'vectorsView': 'Vectors',
      'linearCombinationsView': 'Linear Combinations',
      'normsView': 'Norms',
      'dotProductsView': 'Dot Products',
      'vectorProjectionsView': 'Vector Projections'
    }
  }

  render () {
    return (
      React.createElement(BlogViewComponent, {
        initialView: VectorProjectionsContentComponent, toggles: this.toggles})
    )
  }
}