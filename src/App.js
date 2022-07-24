import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((users) =>
        //  console.log(users);
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    // console.log("render from App");
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          // //why we cannot return all monsters once we start deleting the letters?
          // onChange={(e) => {
          //   // ex with console.log
          //   console.log({ startingArr: this.state.monsters });
          //   //making input values small
          //   const searchString = e.target.value.toLocaleLowerCase();
          //   const filteredMonsters = this.state.monsters.filter((monster) => {
          //     //the same here for monster of searching
          //     return monster.name.toLocaleLowerCase().includes(searchString);
          //   });
          //   this.setState(
          //     () => {
          //       return { monsters: filteredMonsters };
          //     },
          //     //the answer is because we are filtering filteredMonsters
          //     () => console.log({ endingArr: filteredMonsters })
          //   );
          // }}

          onChange={onSearchChange}
        /> */}

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
