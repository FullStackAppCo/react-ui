import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
declare type buttonSize = 'base' | 'lg';
interface PrimaryButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className: string;
    disabled: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => any;
    tag: ElementType;
    size: buttonSize;
}
export declare function PrimaryButton({ children, className, disabled, tag, onClick, size }: PrimaryButtonProps): JSX.Element;
export {};
