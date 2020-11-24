import React, {useState} from 'react';
import './SignIn.css';

function SignIn(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:3000/users?email=${email}`)
        .then(response =>response.json())
        .then(json => {
            if(json.length!==0){
                if(password===json[0].password){
                    props.changeStatus();
                }else{
                    alert('Incorrect password');
                }
            }else{
                alert('Email id not present');
            }  
        })
    }

    return(
        <div className='outerBox'>
            <header>
                <h3 className='cardHeader'>Sign in</h3>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <label htmlFor='email'>Email Id</label>
                    <input type='email' id='email' name='email' required 
                    placeholder='Enter Email Id' value={email} 
                    onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required 
                    placeholder='Enter Password' value={password} 
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <input className='submitBtn' type='submit' value='Sign in' />
            </form>
        </div>
    )
}

export default SignIn;