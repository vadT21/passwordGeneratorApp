import React from 'react';
import { useAppDispacth } from '../../hooks';
import cl from './PasswordGenerator.module.css';

import {
  changeLength,
  toogleOption,
  generatePassword,
} from '../../store/passwordSlice';

type Option = {
  id: number;
  title: string;
  choosen: boolean;
};
type PasswordGeneratorProps = {
  length: number;
  option: Option[];
};

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({
  length,
  option,
}) => {
  const dispacth = useAppDispacth();
  const isValid: boolean =
    option.some((option) => option.choosen === true) && !!length;
  return (
    <div className={cl.PasswordGenerator}>
      <label htmlFor="length">
        Character length <span className={cl.length}>{length}</span>
      </label>
      <input
        type="range"
        id="length"
        name="length"
        min="0"
        max="15"
        value={length}
        onChange={(e) => dispacth(changeLength(+e.target.value))}
      />

      <ul>
        {option.map((option) => (
          <li key={option.id}>
            <label htmlFor={option.title} className={cl.checkboxLabel}>
              <input
                type="checkbox"
                name={option.title}
                id={option.title}
                checked={option.choosen}
                onChange={() => dispacth(toogleOption(option.id))}
              />
              <span className={cl.checkmark}> Include {option.title}</span>
            </label>
          </li>
        ))}
      </ul>

      <button
        disabled={!isValid}
        onClick={() => dispacth(generatePassword())}
        className={cl.btn}
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;
