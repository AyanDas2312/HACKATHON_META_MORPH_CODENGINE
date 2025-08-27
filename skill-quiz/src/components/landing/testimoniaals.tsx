import { Card, CardBody } from "@heroui/react";
import { Avatar } from "@heroui/react";
export default () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "SC",
      content: "Skill-Quiz helped me identify gaps in my knowledge before my job interviews. The questions were spot-on!"
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      avatar: "MJ",
      content: "I love how it analyzes my resume and creates relevant tests. It's like having a personal career coach."
    },
    {
      name: "Elena Rodriguez",
      role: "UX Designer",
      avatar: "ER",
      content: "The detailed feedback helped me focus my learning on the most important skills for my career growth."
    }
  ];
  return (<section className="py-24 dark:bg-black bg-white" id="testimonials" data-aos="flip-right">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Join thousands of professionals who've leveled up their skills
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-md rounded-xl dark:text-white text-black" >
            <CardBody className="p-6">
              <p className="mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <Avatar
                  radius='full'
                  size='md'
                  name={testimonial.avatar}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white aspect-square"
                />
                <div className="ml-3">
                  <div className="font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  </section>);
}