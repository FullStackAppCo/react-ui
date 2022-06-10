import { ReactNode } from 'react';
interface ExternalLinkProps {
    children: ReactNode;
    className?: string;
    href: string;
}
export declare function ExternalLink({ children, className, href }: ExternalLinkProps): JSX.Element;
export {};
