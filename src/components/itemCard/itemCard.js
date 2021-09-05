import React from 'react';
import { useDispatch } from 'react-redux';

import './itemCard.css';

export default function ItemCard(props) {
	const { item } = props;
	const dispatch = useDispatch();

	function onChange(type) {
		const id = item.id-1;
		dispatch({ type: 'change_type', payload: {id, type} });
	}
	return (
		<div className="item-card">
				<span className="item-name">{item.name}</span>
				<span className="item-type">
					<select value={item.type} id="type" onChange={ (e) => onChange(e.target.value)}>
						<option value="admin">Admin</option>
						<option value="editor">Editor</option>
						<option value="viewer">Viewer</option>
					</select>
				</span>
		</div>
	);
}
