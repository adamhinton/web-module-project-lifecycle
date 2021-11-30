import React from 'react';

class User extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <section className='user'>
            <img src='https://unsplash.com/photos/XChzBEI6x50'/>
            <h3>Name: {this.props.userInfo.name}</h3>
            <p>Handle: {this.props.userInfo.handle}</p>
            <p>Followers Count: {this.props.userInfo.followerCount}</p>
          </section>
        )
    }
}

export default User;