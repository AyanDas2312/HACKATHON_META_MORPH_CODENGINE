import { Card, CardBody, CardHeader } from "@heroui/react";
export default () => {
  const features = [
    {
      icon: "📄",
      title: "Smart Resume Scanning",
      description: "Upload your resume and our AI instantly identifies key skills and technologies to test you on."
    },
    {
      icon: "🧠",
      title: "Adaptive Question Generation",
      description: "Get personalized questions based on your actual experience level and skill claims."
    },
    {
      icon: "📊",
      title: "Detailed Performance Analytics",
      description: "Receive comprehensive reports showing your strengths and areas for improvement."
    },
    {
      icon: "🎯",
      title: "Industry-Specific Assessments",
      description: "Questions tailored to your field, from software development to marketing and beyond."
    }
  ];

  return (
    <section className="py-24 dark:bg-black bg-white" id="features" data-aos="flip-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to assess and improve your skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 p-4 rounded-xl dark:text-white text-black">
              <CardHeader className="pb-3">
                <div className="text-4xl mb-2">{feature.icon}</div>
              </CardHeader>
              <CardBody className="pt-0">
                <h3 className="text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}