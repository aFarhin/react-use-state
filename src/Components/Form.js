import React, {useState} from 'react';

const Form =()=>{
    let [name, setName]=useState('');
    let [mod, setMod]= useState('');

    function showName(e){
        setName(e.target.value);
    }

    function formSubmit(e){
        e.preventDefault();
        if(formSubmit){
            setName('');
           }
        setMod(name.toUpperCase())
    }

    function resName(e){
        setName('');
        setMod('');
    }

    return(
        <div className='form'>
            <form onSubmit={formSubmit}>
                <input type="text"
                 placeholder="Change text to uppercase"
                 name ="name"
                onChange={showName}
                value={name}
                 />
                <button>Transform</button>
                <button onClick={resName}> Reset</button>
            </form>
            
           { name &&<p> Live Text: <span>{name}</span></p>
           }
           
        {mod &&  <p> Capitalized Text: <span>{mod}</span> </p> }
            
        </div>
    )
}

export default Form;