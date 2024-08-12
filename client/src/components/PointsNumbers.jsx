const PointsNumbers = ({ photo, title, description }) => {
  return (
    <div className="flex items-start p-6">
      <img className="w-[15%] md:w-[10%]" src={photo} alt="bulletPoints" />
      <div className="py-4">
        <p className="text-lg font-bold uppercase">{title}</p>
        <p className="text-lg py-2">{description}</p>
      </div>
    </div>
  );
};

export default PointsNumbers;
