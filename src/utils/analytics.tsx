export const trackAppDownload = (): void => {
    if (typeof window !== 'undefined' && window.gtag) {
        console.log('trackAppDownload');
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16831719447/2i1KCJm75I8aEJfQ_tk-'
        });
    } else {
        console.log('Google Analytics not loaded');
    }
};
