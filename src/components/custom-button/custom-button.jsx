import React from 'react';

import './custom-button.scss';

const CustomBtn = ({children, googleSignIn, ...otherProps}) => (
    <button className={`${googleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomBtn;