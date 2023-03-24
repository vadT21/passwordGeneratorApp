import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateProps = {
  password: string;
  length: number;
  option: {
    id: number;
    title: string;
    choosen: boolean;
  }[];
};

const initialState: initialStateProps = {
  password: 'Gener@tePa33',
  length: 5,
  option: [
    {
      id: 1,
      title: 'Uppercase Letter',
      choosen: true,
    },
    {
      id: 2,
      title: 'Lowercase Letter',
      choosen: true,
    },
    {
      id: 3,
      title: 'Numbers',
      choosen: true,
    },
    {
      id: 4,
      title: 'Symbols',
      choosen: false,
    },
  ],
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    generatePassword(state) {
      const charsetLower = 'abcdefghijklmnopqrstuvwxyz';
      const charsetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const charsetNumbers = '0123456789';
      const charsetSymbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      let charset = '';
      if (state.option[0].choosen) {
        charset += charsetUpper;
      }
      if (state.option[1].choosen) {
        charset += charsetLower;
      }
      if (state.option[2].choosen) {
        charset += charsetNumbers;
      }
      if (state.option[3].choosen) {
        charset += charsetSymbols;
      }
      let password = '';
      for (let i = 0; i < state.length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      state.password = password;
    },
    changeLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
    },
    toogleOption(state, action: PayloadAction<number>) {
      const toggleOption = state.option.find(
        (todo) => todo.id === action.payload,
      );
      if (toggleOption) {
        toggleOption.choosen = !toggleOption.choosen;
      }
    },
  },
});

export const { generatePassword, changeLength, toogleOption } =
  passwordSlice.actions;

export default passwordSlice.reducer;
