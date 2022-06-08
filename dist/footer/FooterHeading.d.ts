import { HTMLProps } from 'react';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface FooterHeadingProps extends HTMLProps<Element> {
    icon: IconProp;
}
export declare function FooterHeading({ children, icon }: FooterHeadingProps): JSX.Element;
export {};
