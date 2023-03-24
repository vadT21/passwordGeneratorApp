import React from 'react';
import cl from './PasswordValue.module.css';
import { IoCopyOutline } from 'react-icons/io5';

type PasswordValueProps = {
  password: string;
};

const PasswordValue: React.FC<PasswordValueProps> = ({ password }) => {
  return (
    <div className={cl.PasswordValue}>
      <span>{password}</span>
      <IoCopyOutline
        className={cl.copy}
        onClick={() => navigator.clipboard.writeText(password)}
      />
    </div>
  );
};

export default PasswordValue;
