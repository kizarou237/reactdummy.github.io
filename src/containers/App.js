import React, { Component } from 'react';
//import cssStyleClassName from './MyApp.css';



import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../Context/auth-context';



class App extends Component {
constructor(props){
  super(props);
  console.log('[App.js] constructor');
}


 state = {

  persons: [
    {   id:'asd', name: 'Max', age: 25},
    {   id:'xa1', name: 'Manu', age: 23},
    {   id:'aw8', name: 'Stephany', age: 18}

  ], 

  otherState: "some other value",

  ShowPersons: false,
  ShowCockpit: true,
  changeCounter: 0,
  authenticated: false,

 }

 static getDerivedstateFromProps(props, state){
  console.log('[App.js] getDerivedstateFromProps', props);
  return state;
 }

deletePersonHandler = (personIndex) =>{

  // const persons = this.state.persons.slice()

  const persons=[...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});


}
UNSAFE_componentWillMount (){
  console.log('[App.js] ComponentWillmount');

}
componentDidMount (){
  console.log('[App.js] ComponentDidmount');

}

shouldComponentUpdate(nextProps,nextState){ 

  console.log('[App.js] shouldComponentUpdate');
   return true
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate'); 

}

 nameChangedhandeler = (event, id)=> {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  // const person = Object.assign({}, this.state.persons[personsIndex]);

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( (prevState,props) => {
    return{
      persons: persons, 
      changeCounter: prevState.changeCounter +1
     };
     
    });
 };

 togglePersonsHandler = () => {
    const doesShow = this.state.ShowPersons;
    this.setState({ShowPersons: !doesShow});

 }

 loginHandler = () =>{
  this.setState({authenticated: true});
 };


  render() {
    console.log('[App.js] render');

    let persons = null;
    


     if (this.state.ShowPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedhandeler}
          isAuthenticated={this.state.authenticated}
          />;
        }


    return (
      
      <Aux>
        
        <button onClick={() => {
          this.setState({ShowCockpit: false});
          }
          }>Remove Cockpit</button>
        <AuthContext.Provider  value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        {this.state.ShowCockpit ? (
          <Cockpit
          title={this.props.appTitle} 
          ShowPersons ={this.state.ShowPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        
          />)
          : null}

        {persons}
        </AuthContext.Provider>
           
        </Aux>
      
      
  
    );
    //return React.createElement('div', {className:'App'},'h1',React.createElement('h1', null, 'Does this work now?'))
  }
}





export default withClass(App, classes.App);
