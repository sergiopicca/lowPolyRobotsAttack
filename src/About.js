import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
 render() {
   return (
   <div className='about'>
    <Link to='/lowPolyRobotsAttack/about'><h5>About us</h5></Link>
   </div>)
 }
}

export default About;