import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
    index: number; // Add index prop
}

const PricingColumn: React.FC<Props> = ({ tier, highlight, index }: Props) => {
    const { name, price, sp500 } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && (
                        <span className="text-lg font-normal text-gray-600">
                            {index === 2 ? "/yearly" : "/mo"}
                        </span>
                    )}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                    Get Started
                </button>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">S&P 500</p>
                <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>
                <ul className="space-y-4 mb-8">
                    {sp500.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const PricingList: React.FC<{ tiers: IPricing[] }> = ({ tiers }) => (
    <div className="flex flex-wrap">
        {tiers.map((tier, i) => (
            <PricingColumn key={tier.name} tier={tier} highlight={i === 1} index={i} />
        ))}
    </div>
);

export default PricingColumn;
export { PricingList };