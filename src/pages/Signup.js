import React, { Component } from 'react';
import Auth from "../utils/Auth";
import MainLayout from "../layout/MainLayout";
const auth = new Auth();

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = { 
      user : {
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        email:''
      },
      error: null
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange = (e)=> {
    let user = {...this.state.user}
    user[e.target.name] = e.target.value // within the square brackets "[]" you can use dynamic keyss
    this.setState({ 
      user:user //
    })
  }

  handleFormSubmit = (e)=> {
    e.preventDefault();
    auth.signup(this.state.user)
      .then(()=> {
        this.setState({error: ""});
        debugger
        this.props.history.push("/"); // to redirect
      })
      .catch(({response})=> {
        this.setState({error: response.data.message});
        console.log(response.data.message)
      })
  }

  render(){
    return (
      <MainLayout>
        <div className="NewUser">
          <form onSubmit={this.handleFormSubmit} style={{display: "flex", "flex-wrap": "wrap"}}>{/* we don't want the default form submitting behaviour, so we're adding own submit handler   */}
            <div>
              <label>Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.user.username} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.user.password} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
              <label>Firstname</label>
              <input type="text" name="firstname" placeholder="Firstname" checked={this.state.user.firstname} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
              <label>Lastname</label>
              <input type="text" name="lastname" placeholder="Lastname" checked={this.state.user.lastname} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" checked={this.state.user.email} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
              <input type="submit" value="Create account" />
            </div>
          </form>
        </div>
      </MainLayout>
    )
  }
}

export default Signup;