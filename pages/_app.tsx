import React from 'react';

import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { UserProvider } from '../src/shared/user-context/user.context';
import '../styles/globals.css';
import TokenService from '../src/shared/token.service';

const MyApp = ({ Component, pageProps }:AppProps) => {
  const { getUser } = TokenService;
  const queryClient = new QueryClient();

  // 🔴 This is temprory
  // 🔴 Need to move this logic inside UserProvider
  if (typeof window !== 'undefined') {
    const user = getUser();
    const modifiedUser = { ...user, userDetail: { roles: ['admin'] } };

    // Role based route authentication
    if (
      pageProps.protected &&
      pageProps.userTypes &&
      pageProps.userTypes.indexOf(modifiedUser.userDetail.roles[0]) === -1
    ) {
      return (
        <div className="flex justify-center w-full mx-auto">
          <p className="p-4 my-32 text-2xl text-red-800 shadow-lg w-96">
            Sorry, you dont have access
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
};

export default MyApp;