/// <reference types="react-scripts" />

interface Window {
    axios: any
}

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
