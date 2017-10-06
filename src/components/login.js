import React from 'react';
import { Well } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: {} };
    this.logUserIn = this.logUserIn.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
  }

  onChangeItem(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  logUserIn() {
    window.location = "/admin";
  }

  onSubmitItem(e) {
    e.preventDefault();
    const {
      userEmail,
      userPass
    } = this.state;

    if(userEmail && userPass){
      if(userEmail === 'sthorpe' || userEmail === 'dadams' || userEmail === 'bwayne' || userEmail === 'scampbell'){
        this.logUserIn();
      }
      console.log('Sorry incorrect username');
    }
  }

  render() {
   let options = {
      email: {
        label: "Username",
        placeholder: "Username"
      },
      password: {
        label: "Password",
        placeholder: "Password"
      },
      checkbox: {
        text: "Remember me"
      },
      submitButton: {
        text: "Submit"
      }
   };
   options = Object.assign(options, this.props.options || {});

   return <div>
      <Well>
      <form>
          <div className="form-group">
            <label>{options.email.label}</label>
            <input type="email" name="userEmail" onChange={this.onChangeItem} className="form-control" placeholder={options.email.placeholder} />
          </div>
          <div className="form-group">
            <label>{options.password.label}</label>
            <input type="password" name="userPass" onChange={this.onChangeItem}  className="form-control" placeholder={options.password.placeholder} />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.onChangeItem}  /> {options.checkbox.text}
            </label>
          </div>
          <button type="submit" onClick={this.onSubmitItem} className="btn btn-default">{options.submitButton.text}</button>
        </form>
      </Well>
    </div>
  }
};

export default Login
