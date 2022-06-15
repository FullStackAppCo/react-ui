import { HTMLProps, ReactNode } from 'react';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface IconHeadingProps extends HTMLProps<Element> {
    children: ReactNode;
    className?: string;
    icon: IconProp;
    iconSize?: number;
}
export declare function IconHeading({ children, className, icon, iconSize }: IconHeadingProps): JSX.Element;
export {};
