import { Component } from "react";
import './search-box.css'

class SearchBox extends Component{
    render(){
        //making search input generic
        return(
            <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
          />
        )
    }
}
export default SearchBox;