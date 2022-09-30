import { ReactNode } from 'react';
import {QueryStatus} from 'react-query';

export interface CardProps {
    children: ReactNode
    title?: string | ReactNode
    css?: string
    status?: QueryStatus
}