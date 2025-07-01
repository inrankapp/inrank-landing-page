import React from 'react';

const sampleRules = [
  {
    name: "Two Groups Agreement",
    type: "Consensus",
    description: "Triggers only when at least two strategy groups agree (momentum, trend, volatility, volume, regime, composite) with no opposing signals. Buy signals require at least two groups to be bullish with zero bearish groups. Sell signals require at least two groups to be bearish with zero bullish groups. Provides more reliable signals by requiring consensus across different strategy types."
  },
  {
    name: "Pure Momentum",
    type: "Momentum",
    description: "Uses only momentum indicators to generate trading signals. Calculates a majority vote across all momentum strategies to determine market direction. Buy signals occur when the majority of momentum indicators show bullish conditions, while sell signals trigger when most indicators show bearish momentum."
  },
  {
    name: "Enhanced Volume",
    type: "Volume",
    description: "Uses volume indicators with enhanced sensitivity to detect potential market moves. Can trigger on even a single buy/sell signal if there are no opposing signals, making it more responsive to volume-based market events."
  }
];

const SampleRules: React.FC = () => (
  <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
    {sampleRules.map((rule, idx) => (
      <div key={idx} className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-secondary mb-2">{rule.name}</h3>
        <p className="text-sm text-foreground-accent mb-1 font-medium">{rule.type} Strategy</p>
        <p className="text-foreground-accent">{rule.description}</p>
      </div>
    ))}
  </div>
);

export default SampleRules;