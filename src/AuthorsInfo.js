import React from 'react';
import './authors-info-components/authors-info.scss';
import GhostCol from './authors-info-components/GhostCol';
import InformationCol from './authors-info-components/InformationCol';

class AuthorsInfo extends React.Component {
  render() {
    return (
      <div className='authors-section'>
        <GhostCol />
        <InformationCol />
      </div>
    );
  }
}

export default AuthorsInfo;