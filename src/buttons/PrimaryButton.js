import React from 'react'
import PropTypes from 'prop-types'

export function PrimaryButton({ children, className, disabled, tag, onClick, size }) {
  className = [
    sizeClasses(size),
    'text-black cursor-pointer',
    'bg-primary-500 text-black font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500',
    'rounded-lg',
    'active:scale-95',
    'focus:outline-none focus:bg-focus-500 focus:from-transparent focus:to-transparent',
    'disabled:opacity-50 disabled:cursor-default disabled:active:scale-100',
    className,
  ].join(' ')
  const Tag = tag

  function sizeClasses(size) {
    if (size === 'lg') return 'px-8 py-3 text-xl';
    return 'px-4 py-2 text-lg';
  }

  return <Tag className={className} onClick={onClick} disabled={disabled}>{ children }</Tag>
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['lg']),
  tag: PropTypes.string,
}

PrimaryButton.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => null,
  size: 'base',
  tag: 'button',
}