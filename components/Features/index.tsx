import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Background"
            paragraph="Founded by Muhammad Khalil in 1992, KK TRADING initially started its journey by
specializing in the production of Voltage Stabilizers for Fridge and Air Conditioners.
Over the years, we have expanded our portfolio to include a wide range of
Motorcycle Spare Parts, including Muffler, Mudguard, Safeguard and other items
for 70cc and 125cc bikes."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
