const Collections = () => {
  return (
    <div className="w-full h-auto grid bg-white">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-5 text-white px-10 py-5">
        <div className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b11">
          Our Partners
        </div>
        <div className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b12">
          Our Product
        </div>
        <div className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b13">
          Flow
        </div>
      </div>
    </div>
  );
};

export default Collections;
