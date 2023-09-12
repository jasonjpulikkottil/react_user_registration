import React from "react";
import axios from "axios";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  register = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.isSubmitting) {
        return;
      }
    

    var data = {
      username: this.state.username,
      password: this.state.password
    };

    if (
      this.state.username.trim() === "" ||
      this.state.password.trim() === ""
    ) {
      alert("Please fill out both fields");
      return;
    }

    axios.post("http://localhost/api/api.php", data).then((response) => {
      alert(response.data);
    });
  };
  render() {
    return (
      <div className="container">
        <h2>React User Registration</h2>

        <form>
          <div className="form-group m-2">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={this.inputSet}
              className="form-control"
            />
          </div>

          <div className="form-group m-2">
            <label>Password</label>
            <input
              type="text"
              name="password"
              onChange={this.inputSet}
              className="form-control"
            />
          </div>

          <div className="form-group m-2">
            <button onClick={this.register} className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        {/* <p>{this.state.username}</p>
        <p>{this.state.password}</p> */}
      </div>
    );
  }
}
export default Form;
