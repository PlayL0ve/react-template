import { Link } from 'react-router-dom';
import { useAuth } from '../state/UserContext.jsx';
import { useForm } from '../Form/useForm.js';
import { Input } from '../Form/FormParts.jsx';

import styles from './AuthForm.css';


export default function AuthForm({ mode = 'signin' }) {
  const { signIn, signUp, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
  };

  const signin = {
    prompt: 'Sign into your account',
    button: 'Sign In',
    switch: {
      prompt: 'New to the site?',
      link: 'signup',
    },
    action: signIn,
  };

  const signup = {
    prompt: 'Create a new account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../',
    },
    action: signUp,
  };

  const modes = { signin, signup };
  const type = modes[mode];

  return (
    <form className="auth-form">
      <h2>{type.prompt}</h2>
      <Input
        name="email"
        label="Email"
        type="email"
        onChange={handleChange}
        value={credentials.email}
      />

      <Input
        name="password"
        label="Password" type="password"
        onChange={handleChange}
        value={credentials.password}
      />

      <button type="submit" onClick={handleSubmit}>{type.button}</button>

      <p className="error">{error}</p>

      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
