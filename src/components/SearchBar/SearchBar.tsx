import React, { ChangeEvent, FormEvent, useState } from 'react';

interface SearchBarProps {
    onSubmit: (input: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
    const [searchInput, setSearchInput] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(searchInput);
    };

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Image Search:</label>
                    <input type='text' value={searchInput} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
