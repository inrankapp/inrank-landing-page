import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} reliable?`,
        answer: 'Absolutely. We check the performance of all strategies and intervals every day. You can review every trading action and signal generated over the past year for full transparency and reliability.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your InRank account syncs seamlessly across all your mobile devices.',
    },
    {
        question: 'Do you always use the same strategies for each stock?',
        answer: 'No, we backtest each strategy and interval for every stock individually. Only the top 10 strategies from the past year for each stock are used to generate daily trading signals.',
    },
    {
        question: 'Do I need any trading expertise?',
        answer: 'No trading expertise is required to use our app! However, we always recommend researching the stocks before making any investment decisions.',
    },
    {
        question: "Why don't you have analyst ratings or market sentiments?",
        answer: 'While those insights can be valuable, InRank focuses exclusively on technical indicators and pure mathematical calculations for unbiased, data-driven signals.'
    }
];