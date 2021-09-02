import React,{useContext} from 'react';
import './Header.css';
import { AuthContext,FirebaseContext  } from '../../store/Context';
import {useHistory} from 'react-router-dom';

function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <h3 style={{color:'black',fontFamily:'cursive'}}>VenDIt<small><small style={{color:'black',fontFamily:'cursive'}}>.com</small></small></h3>
        </div>
        <div className="sellMenu">
             <button style={{borderRadius:10,width:50}} className="sellMenuContent" onClick = {()=>{
              history.push('/create')
            }}><b>SELL</b></button>
        </div>
        <div className="loginPage">
        <b><a href=" " style={{ color:'black',fontFamily:'sans-serif'}} onClick = {()=>{
          history.push('/login') 
          }}>{user ? `Hello ${user.displayName}` : 'Login'}</a></b>
        </div>
        {user && <button className="logoutbtn" onClick = {()=>{
          firebase.auth().signOut();
          history.push('/login') 
          }}>Logout</button>}
        
      </div>
    </div>
  );
}

export default Header;
