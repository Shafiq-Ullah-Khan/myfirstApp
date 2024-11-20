import app1 from "../assets/work images/app-screen-1.png";
import app2 from "../assets/work images/app-screen-2.png";
import app3 from "../assets/work images/app-screen-3.png";
const WorkSection = () => {
  return (
    <div className="space-y-16 space-x-4 px-10 flex flex-col xs:px-5">
      {/* Header Section */}
      <div className=" px-6 w-full">
        <h1 className="text-red-400 font-mono text-lg md:text-xl">
          How it works
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-700 font-sans">
          Your daily dose of health in 3 simple steps
        </h1>
      </div>
      <div>
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 lg:space-x-16">
          <div className="flex flex-col items-start px-6 md:w-1/2 lg:w-[40rem] lg:px-5 order-2 md:order-1">
            <span className="font-extrabold text-6xl lg:text-8xl text-gray-200">
              01
            </span>
            <h1 className="mt-4 font-bold text-xl md:text-2xl lg:text-3xl lg:py-2">
              Tell us what you like (and what not)
            </h1>
            <p className="text-gray-600 mt-4 font-sans lg:text-xl lg:py-4 leading-7">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          
          <div className="flex-shrink-0 order-1 md:order-2 lg:px-10 relative">
            <img src={app1} alt="App screen 1" className="w-64 lg:p-8 xs:w-32 sm:w-42 md:w-60 xs:py-5 mobileImg "/>
          <div className="w-80 h-80 bg-orange-50 rounded-full absolute flex top-14 right-1 xs:right-[-3rem] xs:top-10 z-[-1] xs:w-60 xs:h-60 items-center text-center justify-center">
            <div className="h-60 w-60 xs:w-40 xs:h-40 bg-orange-100 rounded-full flex items-center text-center left-10">

            </div>
          </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16">
          <div className="flex-shrink-0 lg:px-36 lg:py-10 relative">
            <img src={app2} alt="App screen 2" className="w-64 lg:p-8 xs:w-32 sm:w-42 md:w-60 xs:py-5 relative" />
          </div>
          <div className="w-80 h-80 bg-orange-50 rounded-full absolute flex top-[1610px] left-24 xs:left-20 z-[-1] xs:w-60 xs:h-60 xs:top-[124rem] items-center text-center justify-center">
            <div className="h-60 w-60 xs:h-40 xs:w-40 bg-orange-100 rounded-full flex items-center text-center left-10">

            </div>
          </div>
          <div className="flex flex-col items-start px-6 md:w-1/2 lg:w-[40rem]">
            <span className="font-extrabold text-6xl lg:text-8xl text-gray-200">
              02
            </span>
            <h1 className="mt-4 font-bold text-xl md:text-2xl lg:text-3xl">
              Approve your weekly meal plan
            </h1>
            <p className="text-gray-600 mt-4 font-serif lg:py-4 leading-8 lg:text-xl">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 lg:space-x-16 pb-10">
          <div className="flex flex-col items-start px-6 md:w-1/2 lg:w-[40rem] lg:px-5 order-2 md:order-1">
            <span className="font-extrabold text-6xl lg:text-8xl text-gray-200">
              03
            </span>
            <h1 className="mt-4 font-bold text-xl md:text-2xl lg:text-3xl lg:py-3">
              Enjoy your meals with ease
            </h1>
            <p className="text-gray-600 mt-4 font-serif leading-8 lg:text-xl">
              We ensure your meals are both tasty and healthy, tailored to your
              needs, and delivered fresh. All you have to do is sit back, relax,
              and enjoy your meal!
            </p>
          </div>
          <div className="flex-shrink-0 lg:px-10 order-1 md:order-2">
            <img src={app3} alt="App screen 3" className="w-64 lg:p-8 xs:w-32 sm:w-42 md:w-60 xs:py-5" />
          </div>
          <div className="w-80 h-80 bg-orange-50 rounded-full absolute flex top-[2070px] right-[11rem]  xs:left-20 z-[-1] xs:w-60 xs:h-60 xs:top-[124rem] items-center text-center justify-center">
            <div className="h-60 w-60 xs:h-40 xs:w-40 bg-orange-100 rounded-full flex items-center text-center left-10">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
