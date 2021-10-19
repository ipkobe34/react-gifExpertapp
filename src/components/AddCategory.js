import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories } ) => {

    // const [inputValue, setInputValue] = useState();// undefined
    const [inputValue, setInputValue] = useState('');// valor inicial string vacio

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = (e)=> {
        e.preventDefault();//previene el comportamiento x defecto del formulario
        
        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        
    };

    return (
        
        <form onSubmit= {handleSubmit}>
           <input 
                type="text"
                value= { inputValue }
                onChange = { handleInputChange }
            />
        </form>
       
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

