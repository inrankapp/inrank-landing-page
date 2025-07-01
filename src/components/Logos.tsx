const strategyTypes = [
    { name: "Momentum" },
    { name: "Trend" },
    { name: "Volatility" },
    { name: "Volume" },
    { name: "Composite" },
    { name: "Consensus" },
];

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">
            <span className="text-secondary">Powered by 70+ indicators, 8 intervals, 30+ strategies </span>
            </p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10">
                {strategyTypes.map((type) => (
                    <span
                        key={type.name}
                        className="text-xl font-semibold bg-white rounded-lg px-6 py-3 shadow-md"
                    >
                        {type.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Logos;