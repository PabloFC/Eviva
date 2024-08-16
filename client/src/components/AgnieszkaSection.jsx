import agnieszka from "../assets/img/agnieszka/agnieszka.png";

const AgnieszkaSection = () => {
  return (
    <section>
      <div className="flex py-12">
        <div className="basis-1/2">
          <img src={agnieszka} />
        </div>
        <div className="basis-1/2 max-w-[500px] max-h-[850px]  lg:px-16 2xl:px-0">
          <h2 className="text-3xl py-4">Meet our speaker</h2>
          <h5 className="uppercase font-bold py-4">agnieszka fronia</h5>
          <p>
            Hi, I am Agnieszka and I am certified woma’s health expert with
            passion for helping others.
          </p>
          <br />
          <p>
            For many years, I struggled with hormonal health issues such as
            acne, hair loss, weight gain, absence of periods, insomnia, and high
            levels of stress and anxiety. Feeling confused, tired, and often
            ignored by many doctors, I decided to take control of my health.
          </p>
          <br />
          <p>
            Since 2015, I've travelled across South America and India, exploring
            various methods to resolve my symptoms. Along the way, I became a
            certified yoga, meditation, and breath-work teacher.{" "}
          </p>
          <br />
          <p>
            Additionally, I earned an MSc in Psychological Medicine and Mental
            Health from London Metropolitan University, related to hormones,
            inflammation and gut health.
          </p>
          <br />
          <p>
            My goal is to help you navigate your hormonal, physical,
            psychological, and emotional health with ease.
          </p>
          <br />
          <p>
            Join my upcoming webinar so we can get to know each other better and
            gain the knowledge you need to take control of your health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgnieszkaSection;
