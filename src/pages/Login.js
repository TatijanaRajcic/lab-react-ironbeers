import React, { Component } from 'react';
import MainLayout from "../layout/MainLayout";
import Auth from "../utils/Auth";
const auth = new Auth();

class Login extends Component {
  constructor(props){
    super(props);

    this.state = { 
      user : {
        username:'',
        password:''
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
    auth.login(this.state.user.username, this.state.user.password)
        .then(()=> {
            this.setState({error: ""});
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
        <div className="Login">
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
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </MainLayout>
    )
  }
}

export default Login;