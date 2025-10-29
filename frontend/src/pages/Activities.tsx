import React from "react";

function Activities() {
  return (
    <div>
      {/* Section Heading */}
      <div className="mb-10">
        <h3 className="res-bio">2022-present</h3>
        <h1 className="res-heading">Certifications and Activities</h1>
      </div>

      <div className="flex flex-col xl:flex-row justify-center xl:px-30">
        {/* 1st Tree Start */}
        <div className="relative border-l-8 border-(--color-tertiary) ml-6 w-[50%]">

          {/* Single Node */}
          <div className="group relative mb-8 pl-6">
            {/* Circle */}
            <div className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-(--background-color-2) border-4 border-(--color-tertiary) transition-all duration-300 group-hover:bg-(--color-primary) group-hover:scale-125"></div>
            {/* Horizontal line */}
            <div className="absolute left-2 z-[-1] top-8 w-12 h-2 bg-(--color-tertiary)"></div>

            {/* Text content */}

              <div className="box-shadow w-fit min-w-[250px] xl:min-w-full xl:w-full">

                  <div>
                    <h2>Heading</h2>
                    <h3>bio</h3>
                  </div>

                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>

              </div>

          </div>
          {/* Single Node End */}


        </div>
        {/* 1st Tree End */}

        {/* 2nd Tree Start */}
        <div className="relative border-l-8 border-(--color-tertiary) ml-6 w-[50%]">

        {/* Single Node */}
          <div className="group relative mb-8 pl-6">
            {/* Circle */}
            <div className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-(--background-color-2) border-4 border-(--color-tertiary) transition-all duration-300 group-hover:bg-(--color-primary) group-hover:scale-125"></div>
            {/* Horizontal line */}
            <div className="absolute left-2 top-8 w-4 xl:w-12 h-2 bg-(--color-tertiary)"></div>

            {/* Text content */}
            <h3 className="text-lg font-semibold text-white group-hover:text-(--color-primary) transition-colors ml-16">
              Root Node
            </h3>
            <p className="text-gray-400 ml-16">This is the root of the tree.</p>
          </div>
          {/* Single Node End */}

        </div>
        {/* 2nd Tree End */}

      </div>
    </div>
  );
}

export default Activities;
