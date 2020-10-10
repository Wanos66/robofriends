import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          this.setState({robots: users});
        });
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
          <div className="text-center">
            <h1 className="mt-4">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filterRobots}/>
              </ErrorBoundry>
            </Scroll>
          </div>
      );
    }
  }
}

export default App;
