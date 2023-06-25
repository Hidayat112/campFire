import { createSlice } from '@reduxjs/toolkit';
import themes from '../../theme/themes';

const slice = createSlice({
  name: 'profile',
  initialState: {
    email:'',
    name: '',
    gender: '',
    country: '',
    age: '',
    adv: '',
    nextAdv: '',
    wishes: '',
    personality: '',
    photos: [],
    step: 0,
  } as ProfileState,
  reducers: {
    updateState: (state, { payload }) => {
      for (let key in payload) {
        // console.log({key,payload})
        if (key == "step") {
        state[key] = Math.max(state[key],payload[key]);

        } else {
          state[key] = payload[key];
        }
      }
    },
  },
});
export const { updateState } = slice.actions;

export default slice.reducer;

export type ProfileState = {
  email: string | null;
  name: string | null;
  description: string | null;
  country: string | null;
  age: string | null;
  adv: string | null;
  nextAdv: string | null;
  wishes: string | null;
  personality: string | null;
  photos: Array<string>;
};
