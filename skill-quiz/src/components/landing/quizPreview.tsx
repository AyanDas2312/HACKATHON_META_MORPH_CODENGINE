import { Button, Card, CardBody, CardHeader, Chip, Progress } from "@heroui/react";
export default () =>
(
  <section className="py-24 dark:bg-black bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold  mb-4">
          See It In Action
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Preview how your personalized quiz might look
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-none p-4 rounded-xl" >
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-t-xl">
            <div className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">JavaScript Skills Assessment</h3>
                <Chip className="bg-white/20 text-white px-6">Question 3 of 10</Chip>
              </div>
              <Progress
                value={30}
                className="mb-2"
                classNames={{
                  indicator: "bg-green-500",
                  track: "bg-white/20"
                }}
              />
            </div>
          </CardHeader>
          <CardBody className="p-8 rounded-b-xl dark:bg-gray-600 bg-gray-300">
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
              What will be the output of the following code?
            </h4>
            <div className="bg-gray-500 p-4 rounded-lg mb-6 font-mono text-sm">
              <code>{`console.log(typeof null);`}</code>
            </div>
            <div className="space-y-3">
              {['A) "null"', 'B) "undefined"', 'C) "object"', 'D) "boolean"'].map((option, index) => (
                <Button
                  key={index}
                  className="w-full text-black justify-start text-left p-4 h-auto bg-gray-500 hover:bg-gray-400 rounded-lg"
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>)