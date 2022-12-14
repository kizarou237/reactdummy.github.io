import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
//import styled from 'styled-components';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context';

class Person extends Component {
    constructor(props){
     super(props);
     this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; 

    componentDidMount(){
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
    };


    render() {
        console.log('[Person.js] rendering...');
        return(
            //  <div className="Person">
            <Aux>
            
              {this.context.authenticated ?
               <p>Authenticated!</p> :
                <p>Please log in</p>
            }


             <p   onClick={this.props.click}>I'm {this.props.name} and
              I am {this.props.age} old</p>

             <h3 key="l2">  {this.props.children} </h3>

             <input 
             key="l3" 
             //ref={(inputEl)=>{this.inputElement = inputEl} }
             ref ={this.inputElementRef}
             
             type="text" onChange={this.props.changed} 
             value={this.props.name}/>
             
             </Aux>
             );

        

    }
        

}


Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
    
    };

export default withClass(Person, classes.Person);