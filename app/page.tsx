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
