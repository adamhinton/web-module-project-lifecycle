import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {
  
  state={
    currentUser: 'adamhinton',
    userInfo: {},
    followersArray: [],
  };

  componentDidMount(){
    axios.get('https://api.github.com/users/adamhinton')
        .then(resp =>{
            console.log('Here is the initial data:', resp.data)
            this.setState({
                ...this.state,
                userInfo: resp.data,
               })
        })
        .catch(err =>{
            console.log(err);
        })
}

componentDidUpdate(prevProps, prevState){

  if(prevState.currentUser !== this.state.currentUser){
    console.log('this shouldnt show up');
    console.log('UserInfo is now:', this.state.userInfo)
    axios.get('https://api.github.com/users/adamhinton/followers')
    .then(resp =>{
      // console.log(resp)
        console.log('Here is the follower data:', resp.data)
        this.setState({
            followersArray: resp.data,
           })
           console.log(followersArray)
    })
    .catch(err =>{
        console.log(err);
    })
  }

}

handleClick = (e) =>{
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(resp => {
    console.log(resp.data)
      this.setState({
          ...this.state,
          userInfo: resp.data,
      })
  })
  .catch(err =>{
    console.error(err)
  })

}

// handleChange = (e) => {
//   this.setState({
//       ...this.state,
//       currentUser: e.target.value
//   })
// }

  render() {
    console.log('UserInfo is now:' , this.state.userInfo)
    return(<div className='container'>
      <h1>SEARCH USER GITHUB INFO</h1>
      <User userInfo={this.state.userInfo}/>
    <FollowerList followersArray={this.state.followersArray}/>
    <form>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Search Github Handle</button>
      </form>

    </div>);
  }
}

export default App;


// followersArray: [
//   {
//     login: 'jamesjones',
//     id: 12345,
//     type: '123456'
//   }
// ],


// name: 'Adam',
// handle: 'adamhinton',
// followerCount: '1234'