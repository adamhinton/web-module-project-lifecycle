import React from 'react';

class User extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <section className='user'>
            <img src='https://unsplash.com/photos/XChzBEI6x50'/>
            <h3>Name: </h3>
            <p>Handle: </p>
            <p>Followers Count: </p>
          </section>
        )
    }
}

export default User;


// {this.props.userInfo.followerCount}
// {this.props.userInfo.handle}
// {this.props.userInfo.name}