import React from 'react';
import Follower from './Follower';


class FollowerList extends React.Component{
    render(){
        return(
            <section className='followers'>
            This person's followers are:
            {/* //MAP OVER FOLLOWERS HERE */}
            {this.props.followersArray.map(follower =>{
                return(
                    <Follower followersArray={this.props.follower} key = {this.props.follower.id}/>
                )   
            })}

          </section>
        )
    }
}

export default FollowerList;