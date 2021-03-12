import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const inputHandleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const formHandleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 0)
            setCategories(estadoAnterior => [inputValue,...estadoAnterior]);
        setInputValue('');
    }
    return (
        <form onSubmit={formHandleSubmit}>
            <h2>Add Category</h2>
            <input 
            onChange={inputHandleChange}
            value={inputValue}
            type="text"

            />
        </form>
    )
}


AddCategory.propTypes = {
setCategories: PropTypes.func.isRequired
}