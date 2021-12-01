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

        axios.get('https://api.github.com/users/adamhinton/followers')
        .then(res=>{
          this.setState({
            ...this.state,
            followersArray: res.data
          })
        })
        .catch(err=>{
          console.error(err)
        })
        console.log('Heres the followers array:'
        , followersArray)
}

componentDidUpdate(prevProps, prevState){

  if(prevState.userInfo !== this.state.userInfo){
    console.log('this shouldnt show up')
    // console.log('UserInfo is now:', this.state.userInfo)
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(res=>{
      this.setState({
        ...this.state,
        followersArray: res.data,
      })
    })
    .catch(err=>{
      console.error(err)
    })
  }
  console.log('Followers array is:'
  , this.state.followersArray)
}

handleClick = (e) =>{
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(resp => {
      this.setState({
          ...this.state,
          userInfo: resp.data,
      })
      console.log('search returns:', resp.data)
  })
  .catch(err =>{
    console.error(err)
  })
}

handleChange = (e) => {
  this.setState({
      ...this.state,
      currentUser: e.target.value
  })
}

  render() {
    console.log('UserInfo is now:' , this.state.userInfo)
    return(<div className='container'>
      <h1>SEARCH USER GITHUB INFO</h1>
      <User userInfo={this.state.userInfo} currentUser={this.state.currentUser}/>
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