import React from "react";

const Cards = () => {
  const data = [
    {
      img: "../../public/assets/caseImg1.jpg",
      title: "NUGS",
    },
    {
      img: "../../public/assets/caseImg2.jpg",
      title: "Bussey Rooftop Bar",
    },
    {
      img: "../../public/assets/caseImg3.jpg",
      title: "Ballie Ballerson",
    },
  ];

  const maximum = [
    {
      img: "../../public/assets/commoImg3.jpg",
      h1: "Toilered Onbreded",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, autem aliquam numquam dolore nulla debitis reiciendis culpa dolores quae. Laudantium doloribus dignissimos ipsum provident eius eaque quia officiis iusto nulla?",
    },
    {
      img: "../../public/assets/commoImg2.jpg",
      h1: "Toilered Onbreded",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, autem aliquam numquam dolore nulla debitis reiciendis culpa dolores quae. Laudantium doloribus dignissimos ipsum provident eius eaque quia officiis iusto nulla?",
    },
    {
      img: "../../public/assets/commoImg1.jpg",
      h1: "Toilered Onbreded",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, autem aliquam numquam dolore nulla debitis reiciendis culpa dolores quae. Laudantium doloribus dignissimos ipsum provident eius eaque quia officiis iusto nulla?",
    },
  ];
  return (
    <div className="w-[80%] m-auto">
      <div>
        <h1 className="text-5xl font-bold">Case Studies</h1>
        <h6 className="text-xl mt-3">Here's how we've helped</h6>

        <div className="flex justify-between m-auto w-full mt-10">
          {data.map((i) => (
            <div>
              <img className="w-[400px]" src={i.img} alt="" />
              <h1 className="text-xl mt-5 items-center">
                {i.title} <span className="text-2xl font-light">→</span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-40">
        <h1 className="text-5xl font-bold">Maximum Impact</h1>
        <p className="text-xl mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="flex mt-10">
          {maximum.map((i) => (
            <div>
              <img className="w-[400px]" src={i.img} alt="" />
              <h1 className="text-xl font-semibold mt-2">{i.h1}</h1>
              <p className="mt-3">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
