import { useRef} from 'react';
import './App.css';

function App() {
 var m=12;var k=3;
const buttonRef=useRef(null);
const outerRef=useRef(null);

function right(){
  var rightp=rightpos();
  
  
  if(m>=rightp){
    buttonRef.current.style.left=`${rightp}rem`;
  }
  
console.log(rightp);
// const rightPosition=parseInt(buttonRef.current.style.right,10) ;
//  console.log(rightPosition);
//  if(rightPosition>=k){
//  }
//  var lp=rightPosition - 5;
//  console.log(lp);
//   buttonRef.current.style.left=`${lp}rem`;


}

function rightpos(){
  const rect=buttonRef.current.getBoundingClientRect();
 const rect1=outerRef.current.getBoundingClientRect();
 return (rect.right-rect1.left)/parseFloat(getComputedStyle(document.documentElement).fontSize);
}
function bottompos(){
  const rect=buttonRef.current.getBoundingClientRect();
  const rect1=outerRef.current.getBoundingClientRect();
  return (rect.bottom-rect1.top)/parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function left(){
 
 const leftPosition=parseInt(buttonRef.current.style.left,10) ;
 console.log(leftPosition);
 if(leftPosition>=k){
var lp=leftPosition - 3;
 console.log(lp);
  buttonRef.current.style.left=`${lp}rem`;
  
 }
 

 
}

function top(){
  
  const botPosition=parseInt(buttonRef.current.style.top,10) ;
  console.log(botPosition);
  if(botPosition>=k){
 var lp=botPosition - 3;
  console.log(lp);
   buttonRef.current.style.top=`${lp}rem`;
  }

}

function bottom(){
  var bottomp=bottompos();
  
  
  if(m>=bottomp){
    buttonRef.current.style.top=`${bottomp}rem`;
  }
  
console.log(bottomp);
}


  return (
    <div className="App">
     <div className='btn'  onClick={top}>Top</div>
      <div>
      <div className='mid'>
<div className='btn1' onClick={left}>Left</div>
<div className='square'ref={outerRef} >
  <div className="bloc" ref={buttonRef}>
  </div>
</div>
<center><div className='btn1' onClick={right}>Right</div></center>
      </div>
      </div>
      
     <div className='btn' onClick={bottom}>Bottom</div>

    </div>


  );

}

export default App;
