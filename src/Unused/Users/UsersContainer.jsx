import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { connect } from "react-redux";
import { followSuccess, setCurrentPage } from "../../Redux/UsersReducers";
import { unfollowSuccess } from "../../Redux/UsersReducers";
import { toggleFollowingProgress } from "../../Redux/UsersReducers";
import { getUsers } from "../../Redux/UsersReducers";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber); //в гет юзерс не принимает пагенамбер
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  //  в классовой компоненте мы НЕ можем объявлять переменные
  // только методы!!!!!!!
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.followSuccess}
          unfollow={this.props.unfollowSuccess}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
} //любая класс компонента должна содержать рендер!,
// без передачи пропсов в параметры
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
