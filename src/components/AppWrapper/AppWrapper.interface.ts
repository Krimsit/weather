import { ReactNode } from 'react';
import { QueryStatus } from 'react-query';

export interface AppWrapperProps {
  children: ReactNode;
  status: QueryStatus;
  isError: boolean;
  refetch: () => void;
}
