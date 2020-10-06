import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
 constructor(props){
  super()
  this.props = props
 }

 renderPlayCard(){
  return (
   <div className='card play'>
    <div>
     <h1 className='level'>{this.props.level}</h1>
    </div>
    <h4>{this.props.title}</h4>
   <p>{this.props.desc}</p>
   <a href='https://as-devteam.github.io/LowPolyRobots-InteractiveGraphics/'><button className='access-level'>PLAY!</button></a>
   </div>)
 }
 
 renderCard() {
   return (
   <div className='card'>
    <div>
     <h1 className='level'>{this.props.level}</h1>
    </div>
    <h4>{this.props.title}</h4>
   <p>{this.props.desc}</p>
   <Link to={'/lowPolyRobotsAttack/' + this.props.level}><button className='access-level'>GO!</button></Link>
   </div>)
 }
}

export default Card;