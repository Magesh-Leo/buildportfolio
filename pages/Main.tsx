import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <QueryClientProvider client={new QueryClient()}>
    <div>
      {props.meta}
      {props.children}
    </div>
  </QueryClientProvider>
);

export { Main };
