import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

interface BackLinkProps {
  className?: string,
  to: string,
}

export default function BackLink({ className = '', to, }: BackLinkProps) {
  const children = (
    <>
      <FontAwesomeIcon icon={faArrowLeftLong} />
      Back
    </>
  )
  return (
    <div className="flex justify-end">
      <a href={to} className={`text-primary-500 ${className}`}>{children}</a>
    </div>
  );
}