import React from 'react';

class Follower extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <div>
               <h3>Name: {this.props.followersArray.login}</h3>
            <p>ID: {this.props.followersArray.id}</p>
            <p>Followers Count:{this.props.followersArray.followers}</p>   
            </div>
        )
    }
}

export default Follower;


{/* <p>Name:{this.props.followersArray[0].login}</p>
<p>id: {this.props.followersArray[0].id}</p>
<p>Type:{this.props.followersArray[0].type}</p>     */}