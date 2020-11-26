import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password  } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

    }
    
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
             
                    <FormInput type="email" required name='email' value={this.state.email} label='email'handleChange={this.handleChange}/>

                    <FormInput type="password" required name='password' value={this.state.password} label='password' handleChange={this.handleChange}/>
                    <div className="buttons">
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >Sign in with Google</CustomButton>
                    
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;