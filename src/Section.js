import React,{Component} from 'react';
import MyComponent from './MyComponent';
class Section extends Component{
	render()
	{
		return(<MyComponent>
			       <MyComponent.First/>
			       <MyComponent.Second/>
		       </MyComponent>
			       
			   
			     
			)
	}
}
export default Section;