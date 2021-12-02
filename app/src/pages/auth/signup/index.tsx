import React, { FC, useRef, useState } from 'react';
import { useLazyLoginQuery } from '../../../store/auth/auth-manager-queries';
import { dataManager } from '../../_app';
import styles from '../../posts/posts.module.scss';
import { useLazySignupQuery } from '../../../store/auth/auth-api-queries';

const Index: FC = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState();
  const [signup, result, lastPromiseInfo] = useLazySignupQuery();
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
