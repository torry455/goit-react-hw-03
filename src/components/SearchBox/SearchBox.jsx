import { useState } from 'react';
import css from './SearchBox.module.css';
import ContactList from '../ContactList/ContactList'; 

const SearchBox = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return (
        <div>
            <p>Find contacts by name</p>
            <input
                className={css.searchBox}
                type="text"
                value={inputValue}
                onChange={handleChange} />
            <ContactList inputValue={inputValue} /> {/* Передача значення */}
        </div>
    )
};

export default SearchBox;