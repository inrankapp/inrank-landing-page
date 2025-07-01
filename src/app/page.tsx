import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import SampleRules from "@/components/SampleRules";
import Footer from "@/components/Footer";
// import Snp500 from "@/components/Snp500"; // If you have a dedicated S&P 500 section
// import Notifications from "@/components/Notifications"; // If you have a dedicated Notifications section

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        {/* S&P 500 Section */}
        {/* <Section id="sp500" title="S&P 500 Index" description="Why the S&P 500 matters.">
          <Snp500 />
        </Section> */}

        {/* Benefits Section */}
        <Section id="benefits" title="Benefits" description="Discover the advantages of using InRank.">
          <Benefits />
        </Section>
        <Section
          id="strategies"
          title="Sample Strategy Rules"
          description="Explore how our strategies work. Here are a few examples:"
        >
          <SampleRules />
        </Section>
        {/* Notifications Section */}
        {/* <Section id="notifications" title="Notifications" description="Stay updated with real-time alerts.">
          <Notifications />
        </Section> */}

        {/* Pricing Section */}
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        {/* Sample Strategies Section */}


        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
