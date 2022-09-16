import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../Context/auth-context';


const cockpit = (props) =>{
const toggleBtnRef = React.useRef(null);
const authContext = useContext(AuthContext);

console.log(authContext.authenticated);



    useEffect(()=>{
        
        console.log('[Cockpit.js] useEffect');
        //Http request...
        //setTimeout(()=>{
        //alert('Save data to cloud')

        // }, 1000) ;
        toggleBtnRef.current.click();
        return () =>{
            console.log('[] Cleanup work in useeffect');
        };

    },[]);

    useEffect(() => {
        console.log('[Cockpit.js]  2nd useEffect');
        return () =>{
            console.log('[Cockpit.js] Cleanup work in 2nd useeffect');
        }; 

    });
    
    const assignedClasses = [];

    let btnClass= '';
    if (props.ShowPersons){
        btnClass = classes.Red;
    }
    
    

    if(props.personsLength <=2 ) {
     assignedClasses.push(classes.red); // classes = 'red'
    }
    if(props.personsLength <=1){
     assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is my really working</p>
        <button
        className={btnClass}
         onClick={props.clicked}
         ref={toggleBtnRef}>Toggle Persons
         </button>
         <button onClick={authContext.login}>log in </button>
        
        </div>
    );

};

export default React.memo(cockpit);