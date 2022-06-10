import React, {ElementType, HTMLAttributes, ReactNode} from 'react'

type buttonSize = 'base' | 'lg'

interface PrimaryButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  className: string,
  disabled: boolean,
  onClick: (event: React.MouseEvent<HTMLElement>) => any
  tag: ElementType,
  size: buttonSize,
  href: string,
  target: string,
}

export function PrimaryButton({children, className = '', disabled = false, tag = 'button', onClick = () => null, size = 'base', href = '#', target = '_self'}: PrimaryButtonProps) {
  className = [
    sizeClasses(size),
    'inline-block text-center text-black cursor-pointer',
    'bg-primary-500 text-black font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500',
    'rounded-lg',
    'active:scale-95',
    'focus:outline-none focus:bg-focus-500 focus:from-transparent focus:to-transparent',
    'disabled:opacity-50 disabled:cursor-default disabled:active:scale-100',
    className,
  ].join(' ')
  const Tag = tag

  function sizeClasses(size: buttonSize) {
    if (size === 'lg') return 'px-8 py-3 text-xl';
    return 'px-4 py-2 text-lg';
  }

  return <Tag
    className={className}
    onClick={onClick}
    disabled={disabled}
    {...(tag === 'a' ? {href, target} : {}) }
  >{ children }</Tag>
}