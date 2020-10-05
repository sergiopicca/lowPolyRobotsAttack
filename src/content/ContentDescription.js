import React from 'react';

class ContentDescription extends React.Component {
 constructor(props){
  super()
  this.props = props
 }
 render(){
  return (
   <div className='chapter-content' dangerouslySetInnerHTML={{ __html: this.props }} />
  )
 }
}

export default ContentDescription;