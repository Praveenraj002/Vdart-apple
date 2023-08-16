import { AiOutlineRight } from "react-icons/ai";

const HeroContent = () => {
  return (
    <div className="container mx-auto px-2 text-center">
      <div className="mt-36 flex flex-col text-center justify-center items-center">
        <h1
          className="font-semibold text-2xl md:text-4xl 
        "
        >
          Save On Mac or iPad for University.
        </h1>
        <p className="my-4 font-normal text-xl md:text-3xl">
          Plus get AirPods with Mac and Apple Pencil with iPad
        </p>
        <button className="btn flex flex-row items-center text-lg hover:underline">
          Shop now <AiOutlineRight />
        </button>
        <div className="w-52 md:w-64 mb-10">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/preunidays-header-hero-202306_GEO_IN?wid=804&hei=728&fmt=png-alpha&.v=1685548520689"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
