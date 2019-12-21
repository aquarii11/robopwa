import React from 'react';

const Scroll = (props) =>
{
	console.log('Scroll')
	console.log(props)
	return(<div style={{overflowY:'scroll'}}>{props.children}</div>)
}
export default Scroll;
