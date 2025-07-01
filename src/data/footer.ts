import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering trading decisions with approved backtested strategies.",
    quickLinks: [
        {
            text: "S&P 500",
            url: "#sp500"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Strategies",
            url: "#strategies"
        }
    ],
    email: 'info@inrank.app',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
    }
}