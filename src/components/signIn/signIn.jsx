import React from 'react';

import './signIn.scss';

import FormInput from '../form-input/form-input';
import CustomBtn from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'', password: ''});
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"  
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required 
                    />
                    <FormInput 
                        type="password"  
                        name="password" 
                        label='Password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                    />

                    <div className="buttons">
                        <CustomBtn type="submit">Sign In</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} googleSignIn>Sign In With Google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;