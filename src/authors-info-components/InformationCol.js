import React from 'react';
import AuthorDesc from './AuthorDesc';
import sergiopxl from '../img/sergio_pixeled.png'
import andreapxl  from '../img/andrea_pixeled.png'

class InformationCol extends React.Component {
 render() {
   const sergio = {name: 'Sergio', task: 'Hi, everyone I worked mainly on the game logic and the model creation forthe main character.', src: sergiopxl, git: 'https://github.com/sergiopicca', lnk:'https://www.linkedin.com/in/sergio-picca-801b0b173/'}
   const andrea = {name: 'Andrea', task: 'Hello guys, I worked on the models and on the environment, including lights and shadows.', src: andreapxl, git: 'https://github.com/andreanapoletani', lnk:'https://www.linkedin.com/in/andrea-napoletani-aa0b87166/'}
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