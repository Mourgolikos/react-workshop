import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SimpleForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      type: 'member',
      hasError: false
    };

    this.updateField = this.updateField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateField(event) {
    const target = event.target;
    const {name, value} = target;

    this.setState({
      hasError: false,
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {username, password} = this.state;

    if (!username || !password) {
      this.setState({
        hasError: true
      });
      return;
    }

    console.log(this.state);
  }

  render() {
    const {username, password, hasError} = this.state;

    return (
      <form className='top-spacer'>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            name='username'
            type='text'
            className={`${!username && hasError ? 'error' : ''}`}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            name='password'
            type='password'
            className={`${!password && hasError ? 'error' : ''}`}
            onChange={this.updateField}
          />
        </div>
        <div>
          <select
            name='type'
            onChange={this.updateField}
          >
            <option value="member">Member</option>
            <option value="admin">Admin</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
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
