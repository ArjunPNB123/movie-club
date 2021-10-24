import React, { Component } from "react";
import Group from "./Group";
import Header from "./Header";
import SideNav from "./SideNav";
import User from "./User";
import Movie from "./Movie";
import Test from "./Test";
import UpComing from "./UpComing";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_nav: "",
    };
  }

  handleChangeSideNav = (name) => {
    console.log(name);
    this.setState({ active_nav: name });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div className="">
            <SideNav
              active_nav={this.state.active_nav}
              handleChangeSideNav={this.handleChangeSideNav}
            />
          </div>
          <div>
            {this.state.active_nav === "user" && <User />}
            {this.state.active_nav === "group" && <Group />}
            {this.state.active_nav === "movie" && <Movie />}
            {this.state.active_nav === "test" && <Test />}
            {this.state.active_nav === "upComing" && <UpComing />}
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
