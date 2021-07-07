import React, { useState } from 'react';

const EditBudget = ({handleSaveClick, budget}) => {
	const [value, setValue] = useState(budget);
  
	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;