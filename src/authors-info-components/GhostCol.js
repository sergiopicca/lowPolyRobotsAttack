import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as GhostLogo} from '../img/ghost.svg'

class GhostCol extends React.Component {
 render() {
   return (
    <div className='ghost-col'>
      <Link to='/lowPolyRobotsAttack/'><h5> &#x3C;&#x3C; BACK TO THE HOMEPAGE</h5></Link>
      <h4>What does the ghost say?</h4>
      <div>
        <GhostLogo />
      </div>
      <h5 className='ghost-desc'> This is not the first project we do together, we really appreciate our team-work, if you have time take a look to our other projects.</h5>
    </div>
   )
 }
}

export default GhostCol;