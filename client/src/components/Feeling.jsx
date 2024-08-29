import womanFeeling from "../assets/img/feeling/womanFeling.png";
import bulletPoints from "../assets/img/feeling/Bullet-Points.png";

const Feeling = () => {
  return (
    <section className="py-4 md:py-16">
      <div className="flex flex-col md:flex-row ">
        <div className="basis 2/2 lg:basis-1/2 py-4">
          <h2 className="text-3xl font-bold"> Are you </h2>
          <h2 className="text-3xl font-bold"> feeling:</h2>
          <div>
            <div className="flex items-center p-6">
              <img
                className="w-[15%] md:w-[10%]"
                src={bulletPoints}
                alt="bulletPoints"
              />
              <p className="text-lg -ml-4">
                <span className="font-bold uppercase">Exhausted </span>no matter
                how much you sleep?
              </p>
            </div>
            <div className="flex items-center p-6">
              <img
                className="w-[15%] md:w-[10%]"
                src={bulletPoints}
                alt="bulletPoints"
              />
              <p className="text-lg -ml-4">
                <span className="font-bold uppercase">Foggy-headed </span> and
                unable to focus?
              </p>
            </div>
            <div className="flex items-center p-6">
              <img
                className="w-[15%] md:w-[10%]"
                src={bulletPoints}
                alt="bulletPoints"
              />
              <p className="text-lg -ml-4">
                <span className="font-bold uppercase">Hungry </span> shortly
                after eating?
              </p>
            </div>
            <div className="flex items-center p-6">
              <img
                className="w-[15%] md:w-[10%]"
                src={bulletPoints}
                alt="bulletPoints"
              />
              <p className="text-lg -ml-4">
                <span className="font-bold uppercase">Anxious </span> and on
                edge?
              </p>
            </div>
            <div className="flex items-center p-6">
              <img
                className="w-[15%] md:w-[10%]"
                src={bulletPoints}
                alt="bulletPoints"
              />
              <p className="text-lg -ml-4">
                <span className="font-bold uppercase">Craving </span> sugar all
                the time?
              </p>
            </div>
          </div>
        </div>
        <div className="basis-2/2 md:basis-1/2">
          <img src={womanFeeling} alt="woman image" />
        </div>
      </div>
    </section>
  );
};

export default Feeling;
