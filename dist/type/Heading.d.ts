import { ReactNode } from 'react';
interface HeadingProps {
    children: ReactNode;
    className?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export declare function Heading({ children, className, level }: HeadingProps): JSX.Element;
export {};
