import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "S&P 500 Index",
        description: "The S&P 500 tracks approximately 80% of the U.S. equity market and represents nearly half of the global stock market capitalization, making it a key benchmark for investors worldwide.",
        bullets: [
            {
                title: "503 Leading U.S. Stocks",
                description: "Gain exposure to the most influential companies driving the U.S. economy.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Outperforming the Index",
                description: "Our strategies have historically delivered up to 30% higher returns than the S&P 500.",
                icon: <FiTarget size={26} />
            },
            {
                title: "1-Year Actionable Insights",
                description: "Access a full year of trackable, data-driven trading actions and performance analytics.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Daily Backtested Strategies",
        description: "Access a wide range of advanced trading strategies, each rigorously backtested every single day. Make decisions with confidence, knowing every signal is supported by the latest historical data.",
        bullets: [
            {
                title: "Continuous Backtesting",
                description: "All strategies are automatically re-evaluated daily using the most recent market data.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Transparent Results",
                description: "View detailed backtest reports and performance metrics for every strategy.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Data-Driven Confidence",
                description: "Rely on signals and notifications that are always based on up-to-date, proven results.",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Actionable Insights, Instantly",
        description: "Receive real-time signals and notifications the moment a strategy triggers. Stay ahead of the market with insights you can act on immediately.",
        bullets: [
            {
                title: "Real-Time Alerts",
                description: "Get notified instantly when a strategy meets your criteria.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Customizable Filters",
                description: "Focus on the strategies and assets that matter most to you.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Mobile-First Experience",
                description: "Access all features and insights seamlessly on iOS and Android.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.webp"
    }
]