import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {
  
  state={
    currentUser: '',
    userInfo: {
      name: 'Adam',
      handle: 'adamhinton',
      followerCount: '1234'
    },
    followersArray: [],
  };

//   componentDidMount(){
//     axios.get('https://api.github.com/users/adamhinton')
//         .then(resp =>{
//             this.setState({
//                 // ...this.state,
//                 // currentUser: 'adamhinton',
//                console.log(resp.data)
//             })
//         })
//         .catch(err =>{
//             console.log(err);
//         })
// }


  render() {
    return(<div className='container'>
      <h1>SEARCH USER GITHUB INFO</h1>
      <User userInfo={this.state.userInfo}/>
    <FollowerList/>
    <form>
        <input></input>
        <button>Search Github Handle</button>
      </form>

    </div>);
  }
}

export default App;
