<div className="relative border-l-2 border-gray-700 ml-6">
        <div className="group relative mb-8 pl-6">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>

          <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
            Root Node
          </h3>
          <p className="text-gray-400">This is the root of the tree.</p>
        </div>

        <div className="group relative mb-8 pl-6">
          <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>
          <div className="border w-[100px] h-[100px]">
              content
          </div>
        </div>

        <div className="group relative mb-8 pl-6">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>
          <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
            Leaf Node
          </h3>
          <p className="text-gray-400">End of the branch.</p>
        </div>
      </div>


@import "tailwindcss";

ul, #tree {
   list-style-type: none;
   margin: 0;
   padding: 0;
}
caret {
   cursor: pointer;
   user-select: none;
}
caret::before {
   content: "\25B6"; /* Right arrow */
   margin-right: 6px;
}
caret-down::before {
   transform: rotate(90deg); /* Down arrow */
}
nested {
   display: none;
}
active {
   display: block;
}