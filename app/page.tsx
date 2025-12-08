import AnimatedButton from "./components/AnimatedButton";

export default function Page() {
  return (
    <section>
      <h1 className="text-[#F08BA8] mb-8 text-4xl font-semibold tracking-wider">
        Cooperation you as a coder.
      </h1>
      <p className="mb-4 tracking-wide leading-loose">
        When you need a new website or web app,{" "}
        <span style={{ color: "#F0A8BD" }}>I deliver high-quality it.</span>
        <br />
        Designs, codes and many features. Let's work together to bring your
        ideas to life!
      </p>

      <AnimatedButton text="Contact!" />

      <h1 className="text-[#F08BA8] mt-32 mb-8 text-4xl font-semibold tracking-wider">
        Who I am
      </h1>
      <p className="mb-4 tracking-wide leading-loose">
        I have 11 years of experience in design and have been coding for 1 year,
        currently building{" "}
        <span style={{ color: "#F0A8BD" }}>Google Analytics dashboards</span>{" "}
        with Next.js. My focus is creating intuitive, visually appealing
        interfaces that make data easy to understand and act on.
      </p>

      <h1 className="text-[#F08BA8] mt-32 mb-8 text-4xl font-semibold tracking-wider">
        Projects
      </h1>
      <p
        id="deploy"
        className="inline-block transform transition-transform duration-150 hover:scale-95
                  text-white hover:text-[#F0A8BD] dark:hover:text-neutral-500 flex align-middle relative py-1 px-2 m-1"
      >
        <a href="https://ai-chat-c8towcbli-sleepycat12341013-boops-projects.vercel.app/">
          chatbot-app
        </a>
      </p>
      <p
        className="inline-block transform transition-transform duration-150 hover:scale-95
                  text-white hover:text-[#F0A8BD] dark:hover:text-neutral-500 flex align-middle relative py-1 px-2 m-1"
      >
        <a href="https://survey-app-peach-seven.vercel.app/">survey-app</a>
      </p>

      <h1 className="text-[#F08BA8] mt-32 mb-8 text-4xl font-semibold tracking-wider">
        Get In Touch
      </h1>
      <p className="mb-4 tracking-wide leading-loose">
        Email me at{" "}
        <strong style={{ color: "#F0A8BD" }}>
          sleepycat12341013@gmail.com
        </strong>{" "}
        and let's make your project stand out. Collaborate with me and you'll
        get sleek design, smooth code, and a web experience that really clicks.
      </p>
    </section>
  );
}
