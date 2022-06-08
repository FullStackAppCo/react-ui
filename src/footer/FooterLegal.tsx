import React, {HTMLProps} from 'react'

export function FooterLegal({ className = '' }): HTMLProps<Element> {
  const smallClasses = 'leading-loose';

  return (
    <div className={`space-y-3 ${className}`}>
      <small className={`block ${smallClasses}`}>Site designed and built by Full Stack App Co. &copy; { new Date().getFullYear() } Full Stack App Company Ltd unless otherwise stated.</small>
      <small className={`block ${smallClasses}`}>Full Stack App Company Ltd is a company registered in England and Wales. Registered office: Ground Floor, 13 Cable Court Pittman Way, Fulwood, Preston. PR2 9YW Company registration number: 09391612</small>
    </div>
  )
}