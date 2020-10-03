import React from 'react';

class Card extends React.Component {
 render(props) {
   return (
   <div className='card'>
    <div>
     <h1 className='level'>{props.level}</h1>
    </div>
    <h3>{props.title}</h3>
   <p>{props.description}</p>
   <button className='access-level'>GO!</button>
   </div>)
 }
}

export default Card;