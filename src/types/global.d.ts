declare global {
    interface Window {
        gtag: (
            command: 'event',
            action: string,
            params: {
                send_to: string;
                [key: string]: any;
            }
        ) => void;
    }
}

export {};
