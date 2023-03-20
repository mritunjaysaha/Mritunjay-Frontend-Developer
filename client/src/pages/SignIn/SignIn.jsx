import { useForm } from '../../hooks/useForm';
import ROUTES from '../../constants/routes.json';

export default function SignIn() {
    const { email, password, handleEmailChange, handlePasswordChange, handleSignIn } = useForm();

    return (
        <section className='w-screen h-screen flex flex-col items-center justify-center bg-red-50'>
            <p className='pb-12'>Sign In</p>

            <form onSubmit={handleSignIn} className='flex flex-col gap-4'>
                <input placeholder='email' value={email} onChange={handleEmailChange} />
                <input placeholder='password' value={password} onChange={handlePasswordChange} />

                <button type='submit'>Submit</button>
            </form>

            <a href={ROUTES.SIGN_UP}>Create Account</a>
        </section>
    );
}
