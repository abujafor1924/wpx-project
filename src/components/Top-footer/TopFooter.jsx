const TopFooter = () => {
  return (
    <div className="bg-[#DDDDDD] py-10">
      <div className="w-[50%] mx-auto">
        <h1 className=" w-[60%] text-3xl font-bold text-center mx-auto my-6">
          Subscribe For Best Beauty Tips
        </h1>
        <div className="my-10 relative">
          <input
            type="text "
            placeholder="Enter your email address"
            className="input input-bordered w-full  rounded-full"
          />
          <button className="btn absolute -ml-28 bg-[#1D1A1A] text-white rounded-full">
            Subscribe
          </button>
        </div>
        <div className="flex ml-28">
          <input type="checkbox" checked="checked" className="checkbox" />
          <p className="mx-4">
            I agree that my submitted data is being collected and stored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
