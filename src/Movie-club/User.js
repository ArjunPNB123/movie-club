import React, {Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <div> 
                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover className col-3 mt-4">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
<h1> User Info</h1>

      <table class="table table-dark table-striped">
  


<thead>
<tr>

    <th> Name</th>
    <th> Mob</th>
    <th> City</th>
    <th> email</th>

</tr>

</thead>
<tbody>
<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>

<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>

<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>
<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>
<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>
<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>
<tr>
    <td> Arjun</td>
    <td> Mob</td>
    <td> City</td>
    <td> email</td>
</tr>



</tbody>
</table>
            </div>
        )
    }
}

export default User;