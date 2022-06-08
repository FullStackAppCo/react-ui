import { useEffect } from "react"
import * as Fathom from 'fathom-client'

interface FathomAnalyticsProps {
  domains: Array<string>,
  siteId: string,
  enabled: () => boolean,
  addListener: (handler: () => void) => void,
  removeListener: (handler: () => void) => void,
}

export function FathomAnalytics({ domains, siteId, enabled, addListener, removeListener }: FathomAnalyticsProps) {

  function handleRouteChangeComplete() {
    Fathom.trackPageview()
  }

  useEffect(() => {
    if (enabled() === false) return

    Fathom.load(siteId, {includedDomains: domains})
    addListener(handleRouteChangeComplete)

    return () => {
      removeListener(handleRouteChangeComplete)
    }
  }, [])

  return null
}