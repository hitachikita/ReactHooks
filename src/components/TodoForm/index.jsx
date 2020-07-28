import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
    onSupmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSupmit: null,
}
function TodoForm(props) {
    const { onSupmit } = props;
    const [value, setValue] = useState('');
    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        // prevent reloading browers
        e.preventDefault();
        if (!onSupmit) return

        const formvalues = {
            title: value,
        };
        onSupmit(formvalues);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;