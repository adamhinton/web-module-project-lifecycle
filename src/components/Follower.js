import React from 'react';

class Follower extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <p>Name:</p>
                <p>id:</p>
                <p>Type:</p>         
            </div>
        )
    }
}

export default Follower;


{/* <p>Name:{this.props.followersArray[0].login}</p>
<p>id: {this.props.followersArray[0].id}</p>
<p>Type:{this.props.followersArray[0].type}</p>     */}