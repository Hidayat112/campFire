import { api } from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
        query: (body) => ({
            url: `/auth/register`,
            method:"POST",
            body
        }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignUpMutation } = userApi;