import React from 'react';
class CounterButton extends React.PureComponent
{
   constructor(props)
   {
      super(props);
      this.state={
         count:0
      }
   }
	shouldComponentUpdate(nextProps,nextState)
   	  {
   	  	   console.log('ComponentUpdatenextProps',nextProps)
            console.log('ComponentUpdatenextState',nextState)
            if(nextState.count !== this.state.count)
            {
               return true
            }
            if(nextProps.color !== this.props.color)
            {
               return true
            }
            return false
   	  }
   updateCount=()=>
   {
      this.setState((State)=>{return{count:this.state.count+1}},()=>console.log(this.state.count))
   }
   render()
   {
   	  console.log('CounterButton')
   	  return <button style={{color:this.props.color}} onClick={()=>{this.updateCount()}}>Count:{this.state.count}</button>
   	  
   }
}
export default CounterButton;