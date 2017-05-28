import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SimpleForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    debugger
    const data = {
      username: this.username.value,
      password: this.password.value,
      type: this.type.value
    };
    console.log(data);
  }

  render() {
    return (
      <form
        className='top-spacer'
        onSubmit={this.onSubmit}
      >
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          ref={el => this.username = el}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          ref={el => this.password = el}
        />
        <select
          ref={el => this.type = el}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
          <option value="other">Other</option>
        </select>

        <button>Submit</button>

      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <SimpleForm/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
