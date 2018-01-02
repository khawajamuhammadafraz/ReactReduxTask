import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
 addUserData
} from '../Actions/userActions.js'

@connect((store) => {
	return {
		user: store.user
	};
})

class Home extends Component {
   constructor(props) {
      super(props);
		
      this.state = {
	 FirstName: "",
	 LastName:  "",
         Company: "",
	 Address: "",
         Tel:"",
	 DOB:""
      };
    
	
}  ;

   render() {
     return (
			
         <div>
            <form
		onSubmit={e => { e.preventDefault();  this.props.dispatch(addUserData(this.state)); alert("Values Added"); }}
		>
		<div class="form-row">

		<div class="col-12  col-md-5 mb-2 mb-md-0">
		<input
		required="required"
		name="firstname"
		class="form-control form-control-lg " 
		placeholder ='First Name'
		required pattern="[a-zA-Z]+"
		value={this.state.FirstName} 
                onChange={e=>this.setState({FirstName:e.target.value})}
                 />
		</div>
		</div>
		<br/>
		<center>
		<div class="form-row">
		<div class="col-12 col-md-5 mb-2 mb-md-0">
		<input
		name="lastname" 
		placeholder ='Last Name'
		required="required"
		required pattern="[a-zA-Z]+" 
		class="form-control form-control-lg"
		value={this.state.LastName} 
		onChange={e=>this.setState({LastName:e.target.value})}
		/>
		</div>
		</div>
		</center>
		<br/>
		<div class="form-row">
		<div class="col-12 col-md-5 mb-2 mb-md-0">
		<textarea rows="4" cols="50" 
		name="address"
		placeholder ='Address'
		required="required"
		class="form-control form-control-lg" 
		value={this.state.Address} 
		onChange={e=>this.setState({Address:e.target.value})}
		/>
		</div>
		</div>
		<br/>
		<div class="form-row">
		<div class="col-12 col-md-5 mb-2 mb-md-0">
		<input 
		name="company"
		placeholder ='Company'
		required="required"
		class="form-control form-control-lg" 
		value={this.state.Company} 
		onChange={e=>this.setState({Company:e.target.value})}		
		/>
		</div>
		</div>
		<br/>
		<div class="form-row">
		<div class="col-12 col-md-5 mb-2 mb-md-0">
		<input
		name="telnum"
		required="required" 
		required pattern="[\+]\d{2}[\-]\d{3}[\-]\d{7}"
		placeholder ='TelePhone Number pattern= +92-336-1234567'
		class="form-control form-control-lg" 
		value={this.state.Tel} 
		onChange={e=>this.setState({Tel:e.target.value})}		
		/>
		</div>
		</div>
		<br/>
		<div class="form-row">
		<div class="col-12 col-md-5 mb-2 mb-md-0">
		<input 
		type="date"
		required="required"
                required pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([0-9]{4})"
		name="dob"
		placeholder ='Date of Birth (pattern=DD-MM-YYYY)'
		class="form-control form-control-lg"
		value={this.state.DOB} 
		onChange={e=>this.setState({DOB:e.target.value})}
		/>
		</div>
		</div>
		<br/>
                 <div class="form-row">
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-block btn-lg btn-primary" >Sign up!</button> 
		
              </div>
		
	      </div>  
    </form>
         </div>
		
      );
   }
}



export default Home;
