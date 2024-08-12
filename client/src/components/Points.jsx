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
        </div>
        <div className="basis 2/2 lg:basis-1/2 py-4">
          <div className="flex items-start p-6">
            <img
              className="w-[15%] md:w-[10%]"
              src={number1}
              alt="bulletPoints"
            />
            <div className="py-4">
              <p className="text-lg font-bold uppercase">
                Understanding the Symptoms:
              </p>
              <p className="text-lg py-2">
                Explore the causes of fatigue, brain-fog, anxiety, sleep issues,
                and sugar cravings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
