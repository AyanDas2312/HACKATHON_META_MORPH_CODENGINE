import { Button, Chip } from "@heroui/react";
export default () => (
<section className="relative overflow-hidden pt-16 pb-24 bg-white dark:bg-black" data-aos="flip-right" id="hero">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <Chip
        className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
        variant="flat"
      >
        🚀 AI-Powered Skill Assessment
      </Chip>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Turn Your Resume Into
        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skill Mastery
        </span>
      </h1>
      <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Upload your resume and let our AI create personalized quizzes to test your skills.
        Get detailed insights, identify knowledge gaps, and level up your career with confidence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 text-lg"
          radius='full'
        >
          Upload Resume & Start Quiz
        </Button>
        <Button
          size="lg"
          radius='full'
          variant="bordered"
          className="border-gray-300 font-semibold px-8 py-3 text-lg text-black dark:text-white"
        >
          See Demo
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">10K+</div>
          <div className="text-sm">Resumes Analyzed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">95%</div>
          <div className="text-sm">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">4.9★</div>
          <div className="text-sm text-gray-600">User Rating</div>
        </div>
      </div>
    </div>
  </div>
</section>)