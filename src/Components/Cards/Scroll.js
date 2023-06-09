import React from 'react';

const Scroll = (props) => {
    return(
        <div  style={{ overflow: 'scroll', border: '4px solid yellow', height: '800px' }} >
          <div style={{textAlign: 'center'}}>{props.children}</div>
          
        </div>
    );
}

export default Scroll;