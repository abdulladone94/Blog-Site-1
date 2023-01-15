const header = () => {
  return (
    <header className="bg-gray-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between  text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input className="input-text" type="text" placeholder="search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a>Design</a>
        </div>
        <div className="w-96 flex justify-center order-3 ">
          <div className="flex gap-6">
            <a>Facebook</a>
            <a>Twiter</a>
            <a>Youtube</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
