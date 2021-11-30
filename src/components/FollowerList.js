import React from 'react';
import Follower from './Follower';


class FollowerList extends React.Component{
    render(){
        return(
            <section className='followers'>
            This person's followers are:
            {/* //MAP OVER FOLLOWERS HERE */}
            <Follower followersArray={this.props.followersArray}></Follower>
          </section>
        )
    }
}

export default FollowerList;