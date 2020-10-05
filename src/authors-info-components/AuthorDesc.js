import React from 'react';
import {ReactComponent as Git} from '../img/pixeled_git.svg'
import {ReactComponent as LinkedIn} from '../img/pixeled_lnkdn.svg'

class AuthorDesc extends React.Component {
 constructor(props){
  super()
  this.props = props
 }

 render() {
   return (
   <div className='author-desc'>
    <div className='img-container'><img src={this.props.src} alt='No working bro...'/></div>
    <h2 className={'author-name ' + this.props.name}>{this.props.name}</h2>
    <div className='author-task'><p>{this.props.task}</p></div>
    <div className='author-links'>
     <h5 className={this.props.name + '-label'}>Check my profile on <a href={this.props.git}>GITHUB</a> and <a href={this.props.lnk}>LINKEDIN</a></h5>
     <span className={this.props.name}><a href={this.props.git}><Git /></a> <a href={this.props.lnk}><LinkedIn /></a></span>
    </div>
   </div>
   )
 }
}

export default AuthorDesc;