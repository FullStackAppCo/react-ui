import { HTMLProps, ReactNode } from 'react';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface FooterHeadingProps extends HTMLProps<Element> {
    children: ReactNode;
    icon: IconProp;
}
export declare function IconHeading({ children, icon }: FooterHeadingProps): JSX.Element;
export {};
