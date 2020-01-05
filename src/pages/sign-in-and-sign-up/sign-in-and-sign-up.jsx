import React from 'react';

import './sign-in-and-sign-up.scss';

import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;