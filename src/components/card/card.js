import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from '../itemCard/itemCard';
import './card.css';
export default function Card() {
	const data= useSelector(state => state.product);
	const sele = useSelector(state => state.cardtype);
	const dispatch = useDispatch();

	function onClick (sel) {
		dispatch({ type: 'card_type', payload: {data, sel} });

	}
	return (
		<div className="dox-div">
			<div className="xbox">
				<span>User Name</span>
				<span className="span-type">User Type</span>
			</div>
			{(data || []).map(item => <ItemCard key={item.id} item={item}/>)}
			<div className="button-sec">
				<button onClick={ () => onClick('admin')}>Admin</button>
				<button onClick={ () => onClick('editor')}>Editor</button>
				<button onClick={ () => onClick('viewer')}>Viewer</button>
			</div>
			<div className="sel-item">
			<div className="xbox">
				<span>User Name</span>
				<span className="span-type">User Type</span>
			</div>
			{(sele || []).map(item => <ItemCard key={item.id} item={item}/>)}
			</div>
		</div>
	);
}
