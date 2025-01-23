export const trackAppDownload = (): void => {
    if (typeof window !== 'undefined' && window.gtag) {
        console.log('trackAppDownload');
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16831719447'
        });
    } else {
        console.log('Google Analytics not loaded');
    }
};
