interface FathomAnalyticsProps {
    domains: Array<string>;
    siteId: string;
    enabled: () => boolean;
    addListener: (handler: () => void) => void;
    removeListener: (handler: () => void) => void;
}
export declare function FathomAnalytics({ domains, siteId, enabled, addListener, removeListener }: FathomAnalyticsProps): null;
export {};
