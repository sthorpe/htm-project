import React from 'react';
import { Well } from 'react-bootstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { options: {} };
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onSubmitItem = this.onSubmitItem.bind(this);
  }

  onChangeItem(e) {
    console.log('this seems to be working', this.props);
    if (this.props.onChange) {
      this.props.onChange(e.target, e.target.value, e);
    };
  }

  onSubmitItem(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
   let options = {
      email: {
        label: "Email ddress",
        placeholder: "Email"
      },
      password: {
        label: "Password",
        placeholder: "Password"
      },
      confirm_password: {
        label: "Confirm Password",
        placeholder: "Confirm Password"
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
            <input type="email" onChange={this.onChangeItem} className="form-control" placeholder={options.email.placeholder} />
          </div>
          <div className="form-group">
            <label>{options.password.label}</label>
            <input type="password" onChange={this.onChangeItem}  className="form-control" placeholder={options.password.placeholder} />
          </div>
          <div className="form-group">
            <label>{options.confirm_password.label}</label>
            <input type="password" onChange={this.onChangeItem}  className="form-control" placeholder={options.confirm_password.placeholder} />
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

export default Signup
