import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName });
            this.setState({displayName: '',
            email: '',
            password: '',
            confirmPassword: '',});


        } catch (error) {
            console.log(error);
        }

    }
    
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
             
                    <FormInput type="text" required name='displayName' value={displayName} label='Display Name' handleChange={this.handleChange}/>
                    <FormInput type="email" required name='email' value={email} label='Email' handleChange={this.handleChange}/>
                    <FormInput type="password" required name='password' value={password} label='Password' handleChange={this.handleChange}/>
                    <FormInput type="password" required name='confirmPassword' value={confirmPassword} label='Confirm Password' handleChange={this.handleChange}/>
                    <CustomButton type='submit'>Sign Up</CustomButton>

        
                </form>
            </div>
        );
    }
}

export default SignUp;