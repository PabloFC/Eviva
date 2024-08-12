import number1 from "../assets/img/points/number1.png";
import PointsNumbers from "./PointsNumbers";

const Points = () => {
  return (
    <section className="p-4 md:p-16">
      <h2 className="text-3xl font-bold"> What we’ll</h2>
      <h2 className="text-3xl font-bold"> dive into:</h2>
      <div className="flex flex-col md:flex-row ">
        <div className="basis 2/2 lg:basis-1/2 py-4">
          <PointsNumbers
            photo={number1}
            title="Understanding the Symptoms:"
            description="Explore the causes of fatigue, brain-fog, anxiety, sleep issues, and sugar cravings."
          />
          <PointsNumbers
            photo={number1}
            title="Practical Tips:"
            description="Gain simple, everyday strategies to combat brain fog, improve focus, and manage and reduce symptoms"
          />
          <PointsNumbers
            photo={number1}
            title="Root Causes and Solutions:"
            description="Identify what's contributing to your anxiety and sleep problems and get actionable solutions to start feeling better"
          />
        </div>
        <div className="basis 2/2 lg:basis-1/2 py-4">
          <PointsNumbers
            photo={number1}
            title="Hormonal Shifts:"
            description="Learn how hormonal changes affect these symptoms and uncover what's really going on in your body."
          />
          <PointsNumbers
            photo={number1}
            title="Balancing Hormones:"
            description="Discover ways to balance your hormones and curb your sugar cravings."
          />
          <PointsNumbers
            photo={number1}
            title="Community Support: "
            description="Connect with other women facing similar challenges and share experiences."
          />
        </div>
      </div>
    </section>
  );
};

export default Points;
