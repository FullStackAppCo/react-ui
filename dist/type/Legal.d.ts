import { HTMLProps, ReactNode } from 'react';
interface FooterLegalProps {
    children?: ReactNode;
    className?: string;
    lines?: Array<ReactNode>;
}
export declare function Legal({ children, className, lines }: FooterLegalProps): HTMLProps<Element>;
export {};
