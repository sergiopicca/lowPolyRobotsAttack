import React from 'react';

class AuthorDesc extends React.Component {
 constructor(props){
  super()
  this.props = props
 }

 render() {
   return (
   <div className='author-desc'>
    <div className='img-container'><img src={this.props.img} alt='No working bro...'/></div>
    <h2 className='author-name'>{this.props.name}</h2>
    <p className='author-task'>{this.props.task}</p>
    <h5>Check my profile on GITHUB and LINKEDIN</h5>
   </div>
   )
 }
}

export default AuthorDesc;