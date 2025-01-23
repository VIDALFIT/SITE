export const trackAppDownload = (): void => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16831719447/2i1KCJm75I8aEJfQ_tk-'
        });
    }
};
