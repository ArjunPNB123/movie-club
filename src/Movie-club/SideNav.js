import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <div
          className={
            this.props.active_nav === "user"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("user")}
        >
          {""}
          User {""}
        </div>
        <div
          className={
            this.props.active_nav === "group"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("group")}
        >
          {""}
          Group{""}
        </div>
        <div
          className={
            this.props.active_nav === "movie"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("movie")}
        >
          {""}
          Movie{""}
        </div>
        <div
          className={
            this.props.active_nav === "Test"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("test")}
        >
          {""}
          Test{""}
          </div>

          <div
          className={
            this.props.active_nav === "UpComing"
              ? "side-nav-list-active"
              : "side-nav-list"
          }
          onClick={() => this.props.handleChangeSideNav("UpComing")}
        >
          {""}
          UpComing{""}
          </div>



</div>

    );
  }
}
export default SideNav;
