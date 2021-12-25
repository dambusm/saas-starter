import React, { FC, useRef } from 'react';
import { useSignupMutation } from '../../../store/local-api/slices/auth-api-slice';

const Index: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [signup, result] = useSignupMutation();
  return (
    <div>
      <h1>Signup</h1>
      <input type={'email'} required ref={emailRef} />
      <input type={'password'} required ref={passwordRef} />
      <button
        onClick={async () => {
          const email = emailRef.current?.value;
          const password = passwordRef.current?.value;
          if (!email || !password) {
            throw new Error('Missing expected value');
          }
          await signup({ email, password });
        }}
      >
        Signup
      </button>
      {JSON.stringify(result)}
    </div>
  );
};

export default Index;
