import React, {useState} from 'react';
import SignIn from './SignIn';
import RideDetails from './RideDetails';

function App(){
    const [isLoggedIn, setLogin] = useState(false);
    return(
        <>
            {!isLoggedIn? <SignIn changeStatus={()=> setLogin(status=> !status)} />
                            : <RideDetails />}
        </>
    )
}

export default App;