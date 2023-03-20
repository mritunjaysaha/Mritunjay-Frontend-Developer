import { Navigate } from 'react-router';
import { useForm } from '../../hooks/useForm';
import ROUTES from '../../constants/routes.json';

export default function SignUp() {
    const { email, password, handleEmailChange, handlePasswordChange, handleSignUp } = useForm();

    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center bg-red-50'>
            <p className='pb-12'>Sign Up</p>

            <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
                <input placeholder='email' value={email} onChange={handleEmailChange} />
                <input placeholder='password' value={password} onChange={handlePasswordChange} />

                <button type='submit'>Submit</button>
            </form>
            <a href={ROUTES.SIGN_IN}>Sign in</a>
        </section>
    );
}
