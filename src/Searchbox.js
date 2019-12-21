import React from 'react';
const Searchbox = ({searchfield,searchChange}) =>
{
	console.log('SearchBox')
	return(<div><input  className="tc pa2 br2 bg-lightest-blue" type="search" placeholder="Search Robots" onChange={searchChange} /></div>)
}
export default Searchbox;