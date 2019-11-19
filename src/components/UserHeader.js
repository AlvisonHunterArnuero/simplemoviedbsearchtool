import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return null;
    }

    return <div className="text-muted"><FontAwesomeIcon icon="pencil-alt" />  Posted by {user.name}</div>
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
