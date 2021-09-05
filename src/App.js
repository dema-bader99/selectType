import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from './components/card/card';

const data = require('./data/data.json');

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
		  type: 'FETCH_DATA',
		  payload: data
		})
	  }, []);

	  return (
		  <div className="container">
				<div className="items-wrapper">
					<Card/>
				</div>
		  </div>
	  );
}

export default App;
