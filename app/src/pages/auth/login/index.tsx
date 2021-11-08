import React, { FC, useRef } from 'react';
import useSWR from 'swr';
import { dataManager } from '../../_app';
import styles from '../../posts/posts.module.scss';

const Index: FC = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>Login</h1>
      <input type={'email'} required ref={emailRef} />
      <input type={'password'} required ref={passwordRef} />
      <button
        onClick={() => {
          const email = emailRef.current?.value;
          const password = passwordRef.current?.value;
          if (!email || !password) {
            throw new Error('Missing expected value');
          }
          dataManager.authManager.login(email, password);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Index;
