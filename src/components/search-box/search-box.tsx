import React from 'react';
import {ChangeEventHandler} from 'react';
import './search-box.css'

interface ISearchBoxProps {
    className : string;
    placeholder: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = (props: ISearchBoxProps) =>{
    return(
        <input
        className={`search-box ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        />
    )
}
 export default SearchBox;