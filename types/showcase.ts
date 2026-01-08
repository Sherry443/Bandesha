export interface ShowcaseImage {
    src: string;
    alt?: string;
  }
  
  export interface ShowcaseData {
    headingLines: string[];
    highlightText: string;
    description: string;
    button?: {
        label: string;
        href: string;
        type: string;
    };
    galleryUp: ShowcaseImage[];
    galleryDown: ShowcaseImage[];
  }
  
  export interface ShowcaseProps {
    className?: string;
    data: ShowcaseData;
  }