import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  css?: string;
}
