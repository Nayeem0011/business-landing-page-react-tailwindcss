import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading texts */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            How can we help your business?
          </h1>
          <p className="text-gray-600">
            When you resell besnik, you build trust and increase
          </p>
        </div>

        {/* Features boxs */}
        <div>
            {features.map((feature, index) =>(
                <div>
                    <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center">
                        <div key={index} className="text-3xl">{feature.icon}</div>
                    </div>
                </div>
            ))}
        </div>

        {/* Button */}
      </section>
    </div>
  );
};

export default FeaturesSection;
