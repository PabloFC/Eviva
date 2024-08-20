import support from "../assets/img/support/support.png";
const SupportSection = () => {
  return (
    <section>
      <div className="flex">
        <div className="basis-1/2 max-w-[500px] max-h-[710px]  lg:px-16 2xl:px-0">
          <h2 className="text-3xl">What is</h2>
          <h2 className="text-3xl pb-4">Oviva Care</h2>
          <p>
            Our mission is to create a future where every woman has the
            Knowledge, Resources and SupportOur mission is to create a future
            where every woman has the Knowledge, Resources and Support
          </p>
          <br />
          <p>
            Pellentesque non tincidunt eget molestie libero. Aenean ut quis
            adipiscing amet. Sociis imperdiet luctus eget sagittis nisl. Sed ut
            lectus amet nulla lectus vitae. Mattis volutpat natoque ac quis
            vestibulum. Mauris id massa sed facilisi et amet consectetur tempor
            consectetur.{" "}
          </p>
          <h3 className="py-20 font-semibold">TO LIVE HER BEST LIFE!</h3>
        </div>
        <div className="basis-1/2">
          <img src={support} alt="support" />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
