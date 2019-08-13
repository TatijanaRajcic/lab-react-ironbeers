import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../stylesheets/Nav.css";
import { withRouter } from "react-router"; 
import Auth from "../utils/Auth";
const auth = new Auth();
// withRouter is a Higher Order Component (HOC).
// HOC's are functions that take a react component as an argument.
// The HOC returns that react component with added functionality.
// In this case that functionality is having all the props that 
// belong to components rendered by <Route />, like match and history.
// For the Navbar we need the history prop, because we want to be able to
// redirect if the user click on logout.
// withRouter: https://reacttraining.com/react-router/web/api/withRouter
// HOCS in general: https://reactjs.org/docs/higher-order-components.html


class Nav extends Component {
  constructor(props){
    super(props);

    this.state = { 
      user: null
    }

  }

  handleLogout = (e)=> {
    e.preventDefault();
    var fixProps = this.props;
    // we are fixing this because we  
    // want to use the value of this at this particular moment
    // in a callback function (the one passed to setState)
    // setState is going to call that function in a different context 
    // and therefore the value of this will change as well (because it's contextual)
    // the keyword this in javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    auth.logout()
      .then(()=> {
        // setState is an asynchronous function
        // it can take an optional second argument, which
        // has to be a call back function
        // this function will be called after the state is set
        this.setState({user: null}, ()=> {
          fixProps.history.push("/");
        })
          
      })
      .catch((error)=> {
        this.setState({error: error.message})
      })
  }

  componentDidMount() {
    this.setState({
      user: auth.getUser()
    })
  }

  render(){
    return (
      <nav className="Nav">

        <Link to="/">
          <img src="./images/home.png" alt="home img"/>
        </Link>

        {
          this.state.user? 
          
          <div>
            <p className="welcome">Welcome {this.state.user.username}</p>
            <a href="#" onClick = {this.handleLogout} >Logout</a>    
            {/* {instead of using the default behavious of links we are using this.handleLogout} */}
          </div>

          :

          <div>
            <Link to="/login">
              Login
            </Link>
            <Link to="/signup">
              Sign up
            </Link>
          </div>

        }

      </nav>
    )
  }
}


// Adding the props that belong to components rendered by Route to Nav
// by using withRouter, which is a HOC.
export default withRouter(Nav);