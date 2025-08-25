import { Card, CardBody } from "@heroui/react";
export default () => (<section className="py-24 dark:bg-black bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        How It Works
      </h2>
      <p className="text-xl max-w-2xl mx-auto">
        Three simple steps to unlock your skill potential
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-black dark:text-white">
        <CardBody className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className=" text-2xl">📤</span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            1. Upload Resume
          </h3>
          <p className="leading-relaxed">
            Simply drag and drop your resume. Our AI supports PDF, DOC, and DOCX formats.
          </p>
        </CardBody>
      </Card>

      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-black dark:text-white">
        <CardBody className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            2. AI Analysis
          </h3>
          <p className="leading-relaxed">
            Our AI scans your resume, identifies key skills, and generates relevant questions.
          </p>
        </CardBody>
      </Card>

      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-black dark:text-white">
        <CardBody className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">📋</span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            3. Take Quiz & Improve
          </h3>
          <p className="leading-relaxed">
            Complete your personalized quiz and get detailed feedback on your performance.
          </p>
        </CardBody>
      </Card>
    </div>
  </div>
</section>);