import insider from "../assets/features/business-insider.png";
import forbs from "../assets/features/forbes.png";
import tech from "../assets/features/techcrunch.png";
import york from "../assets/features/the-new-york-times.png";
import usa from "../assets/features/usa-today.png";

const FeaturesSection = () => {
  return (
    <div className="py-20 text-center">
      
      {/* Section Title */}
      <div className="font-serif text-xl text-gray-500 mb-5">
        <p>As featured in</p>
      </div>
      
      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 xs:grid-cols-5 xs:px-4 xs:gap-4 opacity-[0.7]">
        <img src={tech} alt="TechCrunch" className="w-36 h-8 mx-auto lg:w-36 sm:w-28 xs:w-16 xs:h-4 brightness-0 opacity-[0.7]" />
        <img src={insider} alt="Business Insider" className="w-36 h-8 mx-auto lg:w-36 sm:w-28 xs:w-16 xs:h-4 brightness-0 opacity-[0.7]" />
        <img src={york} alt="The New York Times" className="w-36 h-8 mx-auto lg:w-36 sm:w-28 xs:w-16 xs:h-4 brightness-0 opacity-[0.7]" />
        <img src={forbs} alt="Forbes" className="w-36 h-8 mx-auto lg:w-36 sm:w-28 xs:w-16 xs:h-4 brightness-0 opacity-[0.7]" />
        <img src={usa} alt="USA Today" className="w-36 h-8 mx-auto lg:w-36 sm:w-28 xs:w-16 xs:h-4 brightness-0 opacity-[0.7]" />
      </div>
    </div>
  );
};
export default FeaturesSection
