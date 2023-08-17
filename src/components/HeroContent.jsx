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
        <div className="w-full h-full flex justify-center items-center transform scale-100">
          <video className="w-full h-auto " controls autoPlay loop>
            <source
              src="https://www.apple.com/105/media/ww/home/2023/c75c958b-b7ab-431f-8c24-703fa6aafd7e/anim/bts-hero/large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

// src="https://www.apple.com/105/media/ww/home/2023/c75c958b-b7ab-431f-8c24-703fa6aafd7e/anim/bts-hero/large.mp4"
