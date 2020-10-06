import React from 'react';
import ChapterContent from './ChapterContent';
import ChapterTitle from './ChapterTitle'
import {Link} from 'react-router-dom'
import './chapter.scss'

class Chapter extends React.Component {
 constructor(props){
  super()
  this.props = props
 }

 render(){
  return (
   <div className='chapter'>
    <Link to='/lowPolyRobotsAttack/'><h5> &#x3C;&#x3C; BACK TO THE HOMEPAGE</h5></Link>
    {new ChapterTitle().render(this.props.title)}
    {new ChapterContent().render(this.props.desc)}
   </div>)
 }
}

export default Chapter;