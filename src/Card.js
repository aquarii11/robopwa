import React from 'react';
const Card = ({id,name,email}) =>
{
	console.log('Card')
	return(
		    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
			    
			       <img alt="robots" src= {`https://robohash.org/${id}?300x300`} />
			    <div>
		            <h2>{name}</h2>
		            <h3>{email}</h3>
		        </div>
	        </div>
	           
		    )
}
export default Card;