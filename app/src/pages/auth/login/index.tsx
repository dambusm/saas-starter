import React, { FC, useRef, useState } from 'react';
import { useLoginMutation } from '../../../store/database-api/slices/auth-manager-queries-slice';
import { dataManager } from '../../_app';
import styles from '../../posts/posts.module.scss';

const Index: FC = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState();
  const [login, result] = useLoginMutation();
  return (
    <div>
      <h1>Login</h1>
      <input type={'email'} required ref={emailRef} />
      <input type={'password'} required ref={passwordRef} />
      <button
        onClick={async () => {
          const email = emailRef.current?.value;
          const password = passwordRef.current?.value;
          if (!email || !password) {
            throw new Error('Missing expected value');
          }
          await login({ email, password });
        }}
      >
        Login
      </button>
      {JSON.stringify(result)}
    </div>
  );
};

export default Index;
