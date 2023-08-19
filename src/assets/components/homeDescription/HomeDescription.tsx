function HomeDescription() {
  return (
    <div className="w-full h-screen text-text-color flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold xl:text-6xl p-4 text-center ">
        Welcome to Climate Tracker
      </h1>
      <h2 className="text-xl xl:text-2xl pb-8 text-center">
        Your Window into Changing Earth
      </h2>
      <p className=" w-11/12 md:w-1/2 text-center xl:text-xl">
        Explore Earth's changes through graphs on temperature, polar ice,
        methane, NO2, and CO2 over the years. Gain awareness and advocate for a
        sustainable future.
      </p>
      <p className=" w-11/12 md:w-1/2 text-center xl:text-xl mt-4">
        Scroll down and begin your journey with us today!
      </p>
      <div className="w-1/6 xl:w-1/12 mt-16">
        <a href="#grids">
          <svg fill="#FFFFFF" version="1.1" id="Layer_1" viewBox="0 0 512 512">
            <g>
              <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333     c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333     z" />
              <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17     l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17     C369.42,189.917,355.913,189.917,347.582,198.248z" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HomeDescription;
