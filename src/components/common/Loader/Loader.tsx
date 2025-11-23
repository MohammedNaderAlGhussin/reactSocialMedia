const Loader = () => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="loader-bullet [animation-delay:-0.3s]"></div>
      <div className="loader-bullet  [animation-delay:-0.1s]"></div>
      <div className="loader-bullet  [animation-delay:0.1s]"></div>
      <div className="loader-bullet  [animation-delay:0.3s]"></div>
      <div className="loader-bullet mr-0 [animation-delay:0.5s]"></div>
    </section>
  );
};

export default Loader;
