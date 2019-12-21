import React from 'react';
import Card from './Card';
const CardList = ({robots}) =>
{
	console.log('CardList')
   const roboList = Object.keys(robots).map((i) =>
   {
   	   return(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
   })
   return(<div>{roboList}</div>)
}

export default CardList;