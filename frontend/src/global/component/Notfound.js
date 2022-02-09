import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Notfound = () => {
  return <div>
        <div className="notfound-main">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>    
				<h2>404 - The Page can't be found</h2>
			</div>
			
			<Link to="/">Go To Homepage</Link>
		</div>
	</div>
  </div>;
};

export default Notfound;
