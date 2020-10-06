import React from 'react';
import Card from './Card'

class Selection extends React.Component {
 render() {
  const firstCard = {level: 'LVL1', title: 'Game and models', desc: 'Take a look on what is the logic of the and how the  models are made!'}
  const secondCard = {level: 'LVL2', title: 'Technology', desc: 'Read about the technology used and some of the requirements.'}
  const thirdCard = {level: 'LVL3', title: 'Animations', desc: 'Discover how we implemented the animations of all the characters.'}
  const playCard = {level: 'PLAY', title: 'No title', desc: 'Enjoy the game  kill all the Robots and be  the champion!'}

   return (
   <div className="lvl-selection">
    <div className="card-container">
     {new Card(firstCard).renderCard()}
     {new Card(secondCard).renderCard()}
     {new Card(thirdCard).renderCard()}
     {new Card(playCard).renderPlayCard()}
    </div>
   </div>)
 }
}

export default Selection;