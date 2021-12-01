import React from 'react';

class User extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <section className='user'>
            <img src='https://unsplash.com/photos/XChzBEI6x50'/>
            <h3>Name: {this.props.userInfo.login}</h3>
            <p>ID: {this.props.userInfo.id}</p>
            <p>Followers Count:{this.props.userInfo.followers}</p>
          </section>
        )
    }
}

export default User;


// {this.props.userInfo.followerCount}
// {this.props.userInfo.handle}
// {this.props.userInfo.name}