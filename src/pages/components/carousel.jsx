import Slider from "react-slick";
import JohnMorgan from "./../../assets/students/John_Morgan.jpg";

const carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const data = [
    {
      name: `John Morgan`,
      img: JohnMorgan,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: JohnMorgan,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    // {
    //   name: `Nia Adebayo`,
    //   img: `/students/Nia_Adebayo.jpg`,
    //   review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    // },
    // {
    //   name: `Rigo Louie`,
    //   img: `/students/Rigo_Louie.jpg`,
    //   review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    // },
    // {
    //   name: `Mia Williams`,
    //   img: `/students/Mia_Williams.jpg`,
    //   review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    // },
  ];
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img
                  src={d.img}
                  alt=""
                  className="h-44 w-44 rounded-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default carousel;
