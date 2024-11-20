import ben from "../assets/testimonal images/ben.jpg";
import deve from "../assets/testimonal images/dave.jpg";
import stev from "../assets/testimonal images/steve.jpg";
import hanah from "../assets/testimonal images/hannah.jpg";

import gal1 from "../assets/testimonal images/gallery-1.jpg";
import gal2 from "../assets/testimonal images/gallery-2.jpg";
import gal3 from "../assets/testimonal images/gallery-3.jpg";
import gal4 from "../assets/testimonal images/gallery-4.jpg";
import gal6 from "../assets/testimonal images/gallery-5.jpg";
import gal9 from "../assets/testimonal images/gallery-6.jpg";
import gal10 from "../assets/testimonal images/gallery-9.jpg";
const Testimonal = () => {
  return (
    <div className="grid lg:grid-cols-2 bg-orange-100 gap-2 p-6 xs:text-start xs:items-start">
      
      {/* Section 1: Testimonial Text */}
      <section className="flex flex-col items-center justify-center mt-20 xs:mt-4 py-60 xs:py-10 sm:py-14 md:py-16 lg:mt-8 px-4 lg:px-8 md:py-2 xs:text-start xs:items-start xs:px-0">
        
        {/* Heading */}
        <div className="mb-8 py-28 xs:py-0 xs:mb-0 sm:py-0">
          <span className="text-orange-600 font-bold xs:text-lg">TESTIMONIAL</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 py-5">
            Once you try it, you can't go back
          </h1>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Testimonial Item */}
          <div className="flex flex-col md:text-left xs:text-start xs:items-start px-6 xs:px-2">
            <img src={ben} alt="Ben" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-500 text-base md:text-lg">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
          </div>

          {/* Testimonial Item */}
          <div className="flex flex-col md:text-left xs:text-start xs:items-start px-6 xs:px-2">
            <img src={stev} alt="Steve" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-500 text-base md:text-lg">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
          </div>

          {/* Testimonial Item */}
          <div className="flex flex-col xs:text-start xs:items-start md:text-left px-6 xs:px-2">
            <img src={deve} alt="Dave" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-500 text-base md:text-lg">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
          </div>

          {/* Testimonial Item */}
          <div className="flex flex-col xs:text-start xs:items-start md:text-left px-6 xs:px-2">
            <img src={hanah} alt="Hannah" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-500 text-base md:text-lg">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
          </div>
        </div>
      </section>
      
      {/* Section 2: Image Gallery */}
      <section className="grid grid-cols-2 gap-4 xs:grid-cols-4 lg:p-10 justify-end">
  {[gal1, gal2, gal3, gal4, gal6, gal9, gal10, gal1, gal2,gal6,gal1,gal3].map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Gallery ${index + 1}`}
      className="transform transition-transform duration-300 hover:scale-105"
    />
  ))}
</section>

    </div>
  )
}

export default Testimonal
