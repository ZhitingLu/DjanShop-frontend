import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { authenticate, signin } from '../auth/helper';

const Signin = () => {

    const [values, setValues] = useState({
        name: "",
        email: "nine@gmail.com",
        password: "meow1234",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })

    const { name, email, password, error, success, loading, didRedirect } = values;

    // higher order function
    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true
        });

        signin({email, password})
        .then(data => {
            console.log("DATA", data);
            if (data.token) {
                let sessionToken = data.token;
                authenticate(sessionToken, () => {
                    console.log("TOKEN ADDED")
                })
            }
        })
        .catch(error => console.log(error))
    }

    const successMessage = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div className='alert alert-success'
                        style={{ display: success ? "" : "none" }}>
                        New account created successfully. Please <Link to="/signin">login now.</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div className='alert alert-danger'
                        style={{ display: error ? "" : "none" }}>
                        Check all fields again
                    </div>
                </div>
            </div>
        )
    }

    const signinForm = () => {
        return <div className='row'>
            <div className='col-md-6 offset-sm-3 text-left'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='text-light'>Email</label>
                        <input
                            className='form-control mt-1'
                            value={email}
                            onChange={handleChange("email")}
                            type="text" />
                    </div>
                    <div className='form-group'>
                        <label className='text-light'>Password</label>
                        <input
                            className='form-control'
                            value={password}
                            onChange={handleChange("password")}
                            type="password" />
                    </div>
                    <button
                        onClick={onSubmit}
                        type="button"
                        className='btn btn-success w-100 mt-3'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    }

    return (
        <Base title='Welcome to signin page' description='My store'>
            {signinForm()}
            <p className='text-center'>
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signin;