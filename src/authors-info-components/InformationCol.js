import React from 'react';
import AuthorDesc from './AuthorDesc';
import sergiopxl from '../img/sergio_pixeled.png'
import andreapxl  from '../img/andrea_pixeled.png'

class InformationCol extends React.Component {
 render() {
   const sergio = {name: 'Sergio', task: 'Hi, everyone I worked mainly on the game logic and the model creation forthe main character.', src: sergiopxl, links: ''}
   const andrea = {name: 'Andrea', task: 'Hello guys, I worked on the models and on the environment, including lights and shadows.', src: andreapxl, links: ''}
   return (
    <div className='information-col'>
     <h1>About us</h1>
     <div>
      {new AuthorDesc(sergio).render()}
      {new AuthorDesc(andrea).render()}
     </div>
    </div>
   )
 }
}

export default InformationCol;