import HeroPic from "../assets/hero.webp";
import { Button } from "flowbite-react";

// images
import customer1 from "../assets/customer/customer-1.jpg";
import customer2 from "../assets/customer/customer-2.jpg";
import customer3 from "../assets/customer/customer-3.jpg";
import customer4 from "../assets/customer/customer-5.jpg";
import customer5 from "../assets/customer/customer-6.jpg";

const HeroSection = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 lg:px-10 bg-orange-100 md:px-5 xs:text-center lg:py-5 xs:flex xs:flex-col lg:opacity-[0.9]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 xs:col-span-1 lg:w-[75%]">
            <h1 className="max-w-2xl mb-4 text-6xl tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white xs:text-center text-gray-900 lg:text-start xs:text-4xl xs:px-5 font-bold xs:font-bold">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 xs:text-center xs:px-2 xs:text-lg xs:font-serif lg:py-5">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <div className="flex xs:py-4 xs:items:center">
              {/* <Button
                color="warning"
                className="py-2 px-6 font-bold lg:font-extrabold md:py-1 md:font-normal md:px-4 xs:px-2 bg-orange-500"
              >
                Start eating well
              </Button> */}
              <Button color="orange" className="mx-3 xs:my-3 lg:font-extrabold lg:py-1 bg-orange-400">
                Start earning well
              </Button>
              <Button color="gray" className="mx-3 xs:my-3 lg:font-extrabold lg:py-1">
                Learn more
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19V5m0 14-4-4m4 4 4-4"
                  />
                </svg>
              </Button>
            </div>

            <div className="flex items-center space-x-[-8px] xs:h-auto lg:py-10">
              <img
                src={customer1}
                alt="Customer 1"
                className="w-14 h-14 rounded-full xs:w-10 xs:h-10"
              />
              <img
                src={customer2}
                alt="Customer 2"
                className="w-14 h-14 rounded-full border-4 border-white xs:w-10 xs:h-10"
              />
              <img
                src={customer3}
                alt="Customer 3"
                className="w-14 h-14 rounded-full border-4 border-white xs:w-10 xs:h-10"
              />
              <img
                src={customer4}
                alt="Customer 5"
                className="w-14 h-14 rounded-full border-4 border-white xs:w-10 xs:h-10"
              />
              <img
                src={customer5}
                alt="Customer 5"
                className="w-14 h-14 rounded-full border-4 border-white xs:w-10 xs:h-10"
              />
              <span className="px-4 text-2xl xs:text-xs font-bold md:text-wrap xs:px-0 xs:font-serif text-gray-600">
                <span className="text-orange-600 font-bold text-xl md:text-wrap xs:max-w-5">
                  250,000+
                </span>
                meals delivered last year!
              </span>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex xs:py-10 mt-3 xs:w-60 items-center text-center xs:mx-auto">
            <img src={HeroPic} alt="mockup" className="items-center"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
