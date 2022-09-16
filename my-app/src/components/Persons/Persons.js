import React, {PureComponent} from 'react';
//import { render } from 'react-dom';
import Person from './Person/Person';


class  Persons extends PureComponent{

// static getDerivedStateFromProps(props,state){
//   console.log(['[Persons.js] getDerivedStateProps']);
//   return state;
// }

// componentWillReceiveProps(Props){
//   console.log('[Persons.js] componentWillReceivveProps', props);

// }

// shouldComponentUpdate(nextProps, nextState){
//   console.log('[Persons.js] shoulComponentUpdate');
//   if (nextProps.persons !== this.props.persons ||
//       nextProps.clicked !== this.props.clicked ||
//       nextProps.changed !== this.props.changed) {
//     return true;
//    }else {
//     return false;
//    }

//   // return true;
// }

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log('[Persons.js] getSnapshotBeforeUpdate');
  return {message: 'snapshot!'};
}

componentDidUpdate(prevProps, prevState,snapshot){
  console.log('[Persons.js] componentDidUpdate');
  console.log(snapshot);
}

componentWillUnmount(){
  console.log('[Persons.js] componentWillUnmont');
}

  render(){

    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person,index) =>{
    
      return <Person
      click ={() => this.props.clicked(index)}
      name={person.name}
      age ={person.age }
      key ={person.id}
      changed ={(event) => this.props.changed(event, person.id)}
       isAuth={this.props.isAuthenticated} />
    })
  }
  
  

      
    };

export default Persons;