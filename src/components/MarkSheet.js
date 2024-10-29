import React, { useRef } from 'react'

function MarkSheet() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let engInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();


    let telSpanRef=useRef();
    let hinSpanRef=useRef();
    let engSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();


    let resultSpan=useRef();

    let calculateMarks=()=>{
        let firstName=firstNameInputRef.current.value;
            let lastName=lastNameInputRef.current.value;
            let telMarks=Number(telInputRef.current.value);
            let hinMarks=Number(hinInputRef.current.value);
            let engMarks=Number(engInputRef.current.value);
            let matMarks=Number(matInputRef.current.value);
            let sciMarks=Number(sciInputRef.current.value);
            let socMarks=Number(socInputRef.current.value);

            let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;
            let totalPerc=(totalMarks/600)*100;

            resultSpan.current.innerHTML=`${firstName} ${lastName} got total Marks of ${totalMarks} with percentage ${totalPerc.toFixed(2)}`; 
    }

    let telOnFocus=()=>{
          telInputRef.current.style.backgroundColor="lightBlue"
    }

    let telOnChange=()=>{
        let telMarks=Number(telInputRef.current.value);
        if(telMarks>=0 && telMarks<=100){
         if(telMarks>=35){
             telSpanRef.current.innerHTML="Pass";
             telSpanRef.current.style.color="green";
         }
         else{
             telSpanRef.current.innerHTML="Fail";
             telSpanRef.current.style.color="red";
         }
        }
        else{
         telSpanRef.current.innerHTML="Invalid";
         telSpanRef.current.style.color="blue";
         alert("Marks cannot be more than 100.");
         telInputRef.current.value="";
        }
    }

    let telOnBlur=()=>{
        telInputRef.current.style.backgroundColor="";
    }
    let hinOnFocus=()=>{
        hinInputRef.current.style.backgroundColor="lightBlue";
    }
   let hinOnChange=()=>{
    let hinMarks=Number(hinInputRef.current.value);
            
    if(hinMarks>=0 && hinMarks<=100){
        if(hinMarks>=35){
            hinSpanRef.current.innerHTML="Pass";
            hinSpanRef.current.style.color="green";
        }
        else{
            hinSpanRef.current.innerHTML="Fail";
            hinSpanRef.current.style.color="red";
        }
    }
    else{
        hinSpanRef.current.innerHTML="Invalid";
        hinSpanRef.current.style.color="blue";
        alert("Marks cannot be more than 100.");
        hinInputRef.current.value="";
    }
   }

   let hinOnBlur=()=>{
    hinInputRef.current.style.backgroundColor="";
   }



   let engOnFocus=()=>{
    engInputRef.current.style.backgroundColor="lightBlue";
   }
   let engOnChange=()=>{
    let engMarks=Number(engInputRef.current.value);

    if(engMarks>=0 && engMarks<=100){
        if(engMarks>=35){
            engSpanRef.current.innerHTML="Pass";
            engSpanRef.current.style.color="green";
        }
        else{
            engSpanRef.current.innerHTML="Fail"
            engSpanRef.current.style.color="red";
        }
    }
    else{
        engSpanRef.current.innerHTML="Invalid"
        engSpanRef.current.style.color="blue";
        alert("Marks cannot be more than 100.");
        engInputRef.current.value="";
    }
   }

   let engOnBlur=()=>{
    engInputRef.current.style.backgroundColor="";
   }




   let matOnFocus=()=>{
    matInputRef.current.style.backgroundColor="lightBlue";
   }

   let matOnChange=()=>{
    let matMarks=Number(matInputRef.current.value);
    if(matMarks>=0 && matMarks<=100){
        if(matMarks>=35){
            matSpanRef.current.innerHTML="Pass";
            matSpanRef.current.style.color="green";
        }
        else{
            matSpanRef.current.innerHTML="Fail";
            matSpanRef.current.style.color="red";
        }
    }
    else{
        matSpanRef.current.innerHTML="Invalid";
        matSpanRef.current.style.color="blue";
        alert("Marks cannot be more than 100.");
        matInputRef.current.value="";
    }
   }


   let matOnBlur=()=>{
    matInputRef.current.style.backgroundColor="";
   }


   let sciOnFocus=()=>{
    sciInputRef.current.style.backgroundColor="lightBlue";
   }
   let sciOnChange=()=>{
    let sciMarks=Number(sciInputRef.current.value);
    if(sciMarks>=0 && sciMarks<=100){
    if(sciMarks>=35){
        sciSpanRef.current.innerHTML="Pass";
        sciSpanRef.current.style.color="green";
    }
    else{
        sciSpanRef.current.innerHTML="Fail";
        sciSpanRef.current.style.color="red";
    }
  }
    else{
        sciSpanRef.current.innerHTML="Invalid";
        sciSpanRef.current.style.color="blue";
        alert("Marks cannot be more than 100.");
        sciInputRef.current.value="";
    }
   }
   let sciOnBlur=()=>{
    sciInputRef.current.style.backgroundColor="";
   }


   let socOnFocus=()=>{
    socInputRef.current.style.backgroundColor="lightBlue";
   }
   let socOnChange=()=>{
   let socMarks=Number(socInputRef.current.value);
    if(socMarks>=0 && socMarks<=100){
        if(socMarks>=35){
        socSpanRef.current.innerHTML="Pass";
        socSpanRef.current.style.color="green";
    }
    else{
        socSpanRef.current.innerHTML="Fail";
        socSpanRef.current.style.color="red";
    }
    }
    else{
        socSpanRef.current.innerHTML="Invalid";
        socSpanRef.current.style.color="blue";
        alert("Marks cannot be more than 100.");
    socInputRef.current.value="";
    }
   }

   let socOnBlur=()=>{
    socInputRef.current.style.backgroundColor="";
   }
  return (
    <div className='main'>
        <div>
        <h1>Student Marks Sheet</h1>
        </div>
        <form>
            <fieldset>
                <legend>Student Details</legend>
      <div>
        
        <label>First Name</label>
        <input ref={firstNameInputRef}></input>
        <span></span>
      </div>
      <div>
        <label>Last Name</label>
        <input ref={lastNameInputRef }></input>
        <span></span>
      </div>
      </fieldset>

    <fieldset>
        <legend>Subjects</legend>
      <div>
        <label>Telugu</label>
        <input type='number' ref={telInputRef} onFocus={()=>{
          telOnFocus();
        }}

        onChange={()=>{
           telOnChange();
    }}
        onBlur={()=>{
           telOnBlur();
        }}
        >
            
        </input>
        <span ref={telSpanRef}></span>
      </div>

      
        
      <div>
        <label>Hindi</label>
        <input type='number' ref={hinInputRef} 
        onFocus={()=>{
            hinOnFocus();
        }}
        onChange={()=>{
           
            hinOnChange();
        }}
        onBlur={()=>{
            hinOnBlur();
        }}
        ></input> 
        <span ref={hinSpanRef}></span>
      </div>



      <div>
        <label>English</label>
        <input type='number' ref={engInputRef} 
         onFocus={()=>{
            engOnFocus();
         }}
         onChange={()=>{
           engOnChange();
         }}
         onBlur={()=>{
            engOnBlur();
         }}
        ></input> 
        <span ref={engSpanRef}></span>
      </div>
      <div>
        <label>Maths</label>
        <input type='number' ref={matInputRef} 
        onFocus={()=>{
            matOnFocus();
        }}
        onChange={()=>{
           matOnChange();
        }}
        onBlur={()=>{
          matOnBlur(); 
        }}
        ></input> 
        <span ref={matSpanRef}></span>
      </div>
      <div>
        <label>Science</label>
        <input type='number' ref={sciInputRef} 
         onFocus={()=>{
            sciOnFocus();
         }}
         onChange={()=>{
           sciOnChange();
         }}
         onBlur={()=>{
           sciOnBlur();
         }}
         ></input> 
        <span ref={sciSpanRef}></span>
      </div>
      <div>
        <label>Social</label>
        <input type='number' ref={socInputRef}
        onFocus={()=>{
           socOnFocus();
        }}
        onChange={()=>{
          socOnChange();  
        }}
        onBlur={()=>{
           socOnBlur();
        }}
        ></input> 
        <span ref={socSpanRef}></span>
      </div>
      </fieldset>
      <div>
        <button type='button' onClick={()=>{
            
            calculateMarks();

        }}>Calculate</button>
      </div>
      <p ref={resultSpan}></p>
      </form>
      
    </div>
  )
}

export default MarkSheet;