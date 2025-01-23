export const trackAppDownload = () => {
    if (window?.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16831719447'
        });
    }
};
