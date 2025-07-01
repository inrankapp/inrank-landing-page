import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="sp500">
            <h2 className="sr-only">SP&500</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits