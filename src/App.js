import React from 'react';
import axios from 'axios';

class App extends React.Component {
  render() {
    return(<div className='container'>
      <h1>MY GITHUB INFO</h1>
      <form>
        <input></input>
        <button>Search Github Handle</button>
      </form>
      
      <section className='user'>
        <img src='https://unsplash.com/photos/XChzBEI6x50'/>
        <h3>Name:</h3>
        <p>Handle: </p>
        <p>Followers Count::</p>
      </section>

      <section className='followers:'>
        blahblah
      </section>
    </div>);
  }
}

export default App;
