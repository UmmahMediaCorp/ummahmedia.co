/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "mux-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "playback-id"?: string;
      "metadata-video-title"?: string;
      "accent-color"?: string;
      "primary-color"?: string;
      "secondary-color"?: string;
      autoplay?: boolean | string;
      muted?: boolean;
      loop?: boolean;
      preload?: string;
      "stream-type"?: string;
      "default-hidden-captions"?: boolean;
    };
  }
}
