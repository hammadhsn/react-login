import React from 'react';
//import PersonAddIcon from '@material-ui/icons/PersonAddIcon';
import {TextField, Button, Divider } from '@material-ui/core';

import "../App.css";
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className="icon">
                {/* <div className="icon_class">
                    <PersonAddIcon fontsize="large"/>
                </div> */}
                
                <div className="text">Login </div>
            </div>

            <div className="m-2 row">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullwidth/>
                <TextField id="password" className="p-2" type="text" variant="outlined" label="Enter Password" fullwidth/>
                <Button variant="contained" color="primary">Login</Button>

            </div>

            <Divider variant="middle" />
            <p className="text-center">
                <Link to="/" className="text-black-50">
                    <h5>Create Account</h5>
                </Link>

            </p>

        </div>
    )
}

export default Login;
