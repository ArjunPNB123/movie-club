import React, {Component} from "react";

class Group extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <div className= "mt-3"> 
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action bg-dark text-primary">Upcoming Movie List </a>

  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Bahuballi</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Suryavanshi</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Gadder 2</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Avenger 5</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Water world</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">Thallivi</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">Zurasic world</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Nirahuwa Hindusstani 3</a>
</div>

            </div>
        )
    }
}

export default Group;