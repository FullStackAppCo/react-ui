import { HTMLProps, ReactNode } from 'react';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface IconHeadingProps extends HTMLProps<Element> {
    children: ReactNode;
    className?: string;
    icon: IconProp;
    iconSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
export declare function IconHeading({ children, className, icon, iconSize }: IconHeadingProps): JSX.Element;
export {};
