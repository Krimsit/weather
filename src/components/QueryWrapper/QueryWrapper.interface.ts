import { ReactNode } from 'react';
import { QueryStatus } from 'react-query';

export interface LoaderWrapperProps {
  status: QueryStatus;
  children: ReactNode;
  loader?: ReactNode;
  key?: string;
}
