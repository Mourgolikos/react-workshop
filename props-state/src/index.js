import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.displayFoods = this.displayFoods.bind(this);
  }

  displayFoods() {
    return this.props.foods.map((food, index) => {
      return <li key={index}>{food}</li>
    });
  }

  render() {
    return (
      <ul>
        {this.displayFoods()}
      </ul>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.onInputChange}
        />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: props.foods
    };

    this.filterFoods = this.filterFoods.bind(this);
  }

  filterFoods(event) {
    const filteredData = this.props.foods.filter(food => {
      return food.toLowerCase().includes(event.target.value.toLowerCase())
    });

    if (!!filteredData) {
      this.setState({
        foods: filteredData
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <div>
          <SearchBar
            onInputChange={this.filterFoods}
          />
          <FoodList
            foods={this.state.foods}
          />
        </div>
      </div>
    );
  }
}

const foods = [
  'mpugatsa',
  'souvlaki',
  'tzatziki',
  'mousakas'
];

ReactDOM.render(
  <App foods={foods}/>,
  document.getElementById('root')
);
