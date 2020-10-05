import React from 'react';

class ContentTitle extends React.Component {
 constructor(props){
  super()
  this.props = props
 }

 render(){
  return (
   <h1>{this.props}</h1>
  )
 }
}

export default ContentTitle;