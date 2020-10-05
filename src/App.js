import React from 'react';
import Title from  './Title'
import Selection from './Selection'
import About from './About'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <About />
        <Title />
        <Selection />
      </div>
    );
  }
}

export default App;
