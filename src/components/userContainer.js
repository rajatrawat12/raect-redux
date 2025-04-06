import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApi } from "../redux";

function UserContainer({ fetchApi, userData }) {
  useEffect(() => {
    fetchApi();
  }, []);

  return userData.loading ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div>
        <h2>User List</h2>
        {userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => dispatch(fetchApi()) // Fix the action creator function name here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
