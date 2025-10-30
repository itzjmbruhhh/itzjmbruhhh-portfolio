import certificationsData from "../assets/utils/Certifications.json";

function Certifications() {
  return (
    <div data-aos="fade-up" data-aos-duration="600">
      <div className="flex flex-col xl:flex-row justify-center xl:px-25 gap-12">
        {certificationsData.map((cert, index) => {
          // Dynamically get image path
          const imageSrc = new URL(`../assets/images/Certifications/${cert.img_path}`, import.meta.url).href;

          return (
            <div key={index} className="box-shadow-resume mx-10 md:mx-40 xl:mx-auto">
              <div className='flex justify-center border-b border-(--color-tertiary) py-5 mb-2 md:py-6 xl:py-6 xl:mb-4 md:mb-4 xl:mx-8'>
                <img 
                  src={imageSrc} 
                  alt={cert.title} 
                  className={`w-[150px] md:w-[250px] xl:w-[250px] ${cert.title.includes("fcc") ? "rounded-full" : ""}`}
                />
              </div>
              <h1 className='text-xl xl:pb-4'>{cert.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
