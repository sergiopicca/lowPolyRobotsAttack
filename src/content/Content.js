import React from 'react';
import ContentDescription from './ContentDescription';
import ContentTitle from './ContentTitle';
import './content.scss'

class Content extends React.Component { 
  constructor(props){
   super()
   this.title = props.title
   this.desc = props.desc
  }
  render() {
    return (
      <div className='content-page'>
        {new ContentTitle(this.title).render()}
        {new ContentDescription(this.desc).render()}
      </div>
    );
  }
}

export default Content;
