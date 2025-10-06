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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div className="flex flex-col items-center p-6">
              <div
                key={index}
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                style={{
                  backgroundColor:
                    index === 0
                      ? "#F1EFFD"
                      : index === 1
                      ? "#FEE7E7"
                      : "#FFF3E4",
                }}
              >
                <div className="text-3xl">{feature.icon}</div>
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
