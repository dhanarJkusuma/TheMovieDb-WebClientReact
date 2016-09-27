import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user-actions'

@connect((store) => {
  return {
    users : store.users
  };
})
class Home extends React.Component{
  constructor(){
      super();
  }

  componentWillMount(){
    this.props.dispatch(fetchUser());
  }

  render(){
    const { users } = this.props.users;
    console.log(this.props.users);
    const mappedUser = users.map((user) => <li>{user.name}</li>);
    console.log("mappedUser " : mappedUser);
    return (
      <div>
        <ul>
          {mappedUser}
        </ul>
      </div>
    );
  }
}

export default Home;
