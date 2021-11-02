

import React from 'react';
import "../App.css";
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <div className="icon">
                <div className="icon_class"></div>
                <div className="text">SIGN UP</div>
            </div>

            <div className="m-2 row">
                <div className="p-2 col-6">
                    <TextField id="firstname" type="text" variant="outlined" label="Enter Your Name" fullwidth/>
                </div>

            </div>

            <div className="m-2 row">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullwidth/>
                <TextField id="password"className="p-2" type="text" variant="outlined" label="Enter Password" fullwidth/>
                <Button variant="contained" color="primary">Creat Account</Button>

            </div>

            <Divider variant="middle" />
            <p className="text-center">
                <Link to="/login" className="text-black-50">
                    <h5>Already have an Account?</h5>
                </Link>

            </p>

        </div>
    )
}

export default Signup;
