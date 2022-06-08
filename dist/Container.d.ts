import { ElementType, ReactNode } from 'react';
interface ContainerProps {
    className?: string;
    tag?: ElementType;
    children: ReactNode;
}
export declare function Container({ children, className, tag }: ContainerProps): JSX.Element;
export {};
