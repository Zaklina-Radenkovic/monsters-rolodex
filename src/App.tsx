// import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";

import { getData } from "./utils/data";
import "./App.css";


//we need to export Monster further
export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers =async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users)
    }
    fetchUsers();
  }, []);
  
  const onSearchChange = (e:ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
