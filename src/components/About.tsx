import { Skill } from "./Skill";
import { BorderBeam } from "@/components/ui/border-beam";


const cvUrl = "/Fardous_CV.pdf"; // Update with the actual path

export default function About() {
  return (
    <section
      className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-black"
      id="about"
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Crafting Pixel-Perfect, Lightning-Fast Frontend!
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                    Hey! I’m Fardous Alom, an interface wizard blending design
                    magic with tech savvy. I craft flawless, pixel-perfect UIs
                    that impress at lightning speed. Clients are usually too
                    busy picking their jaws off the floor to ask how I do it so
                    fast. Want a stunning project done in record time? I’m your
                    guy!
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl flex-col justify-start items-start gap-2.5 inline-flex relative">
                    <BorderBeam size={500} duration={25} delay={9} />
                    <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">
                      2+ Years
                    </h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Shaping the Digital Experience with Innovation
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl flex-col justify-start items-start gap-2.5 inline-flex relative">
                    <BorderBeam size={500} duration={25} delay={9} />
                    <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">
                      12+ Projects
                    </h4>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Delivering Excellence, One Success at a Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={cvUrl}
              download="Fardous_CV.pdf"
              className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
            >
              <span className="px-1.5 text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Download CV
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#000000"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-white rounded-3xl sm:border border-gray-200 relative align-middle justify-center items-center flex">
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
