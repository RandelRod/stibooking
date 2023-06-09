import React from 'react';
import sti from './stiLogo.PNG';

const Navigation = ({onRouteChange, isSignedIn}) => {

  if (isSignedIn){
    return (
      <div className='flex pa3 bg-light-gray' style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '150px'}}>
          <img alt='STI LOGO' src={sti}/>
        </div>
        <div>
          <nav>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pointer'>Sign Out</p>
          </nav>
        </div>
    </div>
    );
} else {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
    )
}

  
  
}

export default Navigation;