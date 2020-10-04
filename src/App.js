import React from 'react';
import Title from  './Title'
import Selection from './Selection'
import About from './About'


class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <About />
        <Title />
        <Selection />
      </React.StrictMode>
    );
  }
}

export default App;
