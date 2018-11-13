export interface PushNotification {
    body?: string;
    icon?: string;
    tag?: string;
    data?: string;
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
    dir?: 'auto' | 'ltr' | 'rtl';
    vibrate?: number[];
}
