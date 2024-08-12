import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="w-[343px] h-[630px] mx-auto lg:w-[650px] lg:h-[100vh] xl:ml-32 flex items-center">
        <div className="bg-white bg-opacity-30 mt-48 xl:mt-32 xl:h-[70%] rounded-xl">
          <h3 className="text-center uppercase font-bold text-2xl p-4 2xl:p-20">
            You feel tired, hungry, foggy, anxious, and you crave for sugar all
            the time?
          </h3>
          <div className="p-1">
            <p className="text-center uppercase">JOIN LIVE</p>
            <p className="text-center uppercase">
              WOMEN’S HORMONAL HEALTH WEBINAR
            </p>
          </div>
          <h2 className="text-center font-bold text-4xl uppercase p-4 2xl:p-6">
            Boost Your Mood & Get Back Your Energy
          </h2>
          <p className="text-center uppercase p-4 2xl:p-6">
            10th september 2024 12 PM - 1 PM CET
          </p>
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
