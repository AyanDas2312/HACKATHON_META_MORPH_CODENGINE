import { Button } from "@heroui/react";
export default () => (<section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600" data-aos="flip-left" id="cta">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Ready to Discover Your True Skill Level?
    </h2>
    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Upload your resume now and get a personalized skill assessment in minutes.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        radius='full'
        className="bg-white text-blue-600 font-semibold px-8 py-3 text-lg hover:bg-gray-50"
      >
        Start Free Assessment
      </Button>
      <Button
        size="lg"
        variant="bordered"
        radius='full'
        className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg"
      >
        View Sample Results
      </Button>
    </div>
  </div>
</section>);