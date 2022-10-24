import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Pet Service",
      
    },
    {
      img: project2,
      name: "Dog Security",
      
    },
    {
      img: project3,
      name: "FIR Expert Ex Service",
      
    },
    {
      img: project4,
      name: "Anti Dog Shit",
      
    },
    {
      img: project5,
      name: "Dog Mating Expert",
     
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Premium Projects Offering Great Services</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-96 w-80 p-4 bg-slate-700 rounded-xl flex flex-col justify-center items-center">
                  <img src={project_info.img} alt="" className="rounded-lg w-96" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <span>

                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} className="rounded-full border-8 border-solid border-slate-500" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
