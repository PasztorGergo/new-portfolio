import { About, Hero, Projects, Skills, Testimonials } from "components";

const Home = () => {
  return (
    <>
      <div className="md:block hidden z-0 w-[76rem] h-[89rem] rotate-[-75.752deg] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,#8FFFC8_0%,rgba(143,255,200,0.20)_0.01%,rgba(143,255,200,0.00)_100%)] absolute left-[927.44px] top-[108px]"></div>
      <div className="md:block hidden z-0 w-[31rem] h-[35rem] absolute rotate-[-105deg] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,#00A7B2_0%,rgba(0,167,178,0.20)_0.01%,rgba(0,167,178,0.00)_100%)] top-[606px] -left-[260px]"></div>
      <div className="md:block hidden z-0 w-[46rem] h-[37rem] absolute rotate-[23deg] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,#00A7B2_0%,rgba(0,167,178,0.20)_0.01%,rgba(0,167,178,0.00)_100%)] top-[2841px] left-[53px]"></div>
      <div className="md:block hidden z-0 w-[46rem] h-[37rem] absolute rotate-[23deg] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,#8FFFC8_0%,rgba(143,255,200,0.20)_0.01%,rgba(143,255,200,0.00)_100%)] top-[1478px] left-[573px]"></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
