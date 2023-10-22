const Instagram = () => {
  return (
    <div className="container">
      <div className="flex my-10">
        <div className="border-0 h-1 mt-5 bg-black border-black w-[40%]"></div>
        <div className="text-3xl font-semibold px-2">Instagram Feed</div>
        <div className="border-0 h-1 mt-5 bg-black border-black w-[42%]"></div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <img
          src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
          alt=""
        />
        <img
          src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
          alt=""
        />
        <img
          src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
          alt=""
        />
        <img
          src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
          alt=""
        />
      </div>
      <div className="bg-black w-full my-10 py-2 rounded-full">
        <h1 className="text-white text-center">Follow Us</h1>
      </div>
    </div>
  );
};

export default Instagram;
