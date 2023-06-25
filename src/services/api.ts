import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
export const baseUrl = "https://campfire-campireapi.t3tfm5.easypanel.host/v1/docs/campfire-campireapi.t3tfm5.easypanel.host/v1/auth/register"
const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.API_URL,
  baseUrl
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
