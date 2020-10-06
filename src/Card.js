import React from 'react';

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
   <button className='access-level'>PLAY!</button>
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
   <button className='access-level'>GO!</button>
   </div>)
 }
}

export default Card;