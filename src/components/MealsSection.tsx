import meal1 from "../assets/meals/meal-1.jpg";
import meal2 from "../assets/meals/meal-2.jpg";
import flame from "../assets/meals/meals icon/flame-svgrepo-com.svg";
import spoon from "../assets/meals/meals icon/cutlery-cross-of-a-knife-and-a-spoon-svgrepo-com.svg";
import rating from "../assets/meals/meals icon/star-svgrepo-com.svg";
import checkmark from "../assets/meals/meals icon/checkmark-svgrepo-com.svg";

const MealsSection = () => {
  return (
    <div className="bg-slate-100 px-5 py-10">
      {/* Title Section */}
      <div className="text-center p-5">
        <h1 className="text-orange-700 font-bold text-xl">MEALS</h1>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-sans mt-2">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      {/* Meals Grid */}
      <div className="grid gap-28 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:px-20 mt-8 lg:py-5">
        {/* Meal 1 */}
        <div className="bg-white shadow-lg hover:translate-y-2 transition rounded-lg overflow-hidden">
          <img src={meal1} alt="Japanese Gyozas" className="w-full h-52 object-cover" />
          <div className="p-6 lg:leading-8">
            <span className="bg-green-400 text-white text-xs py-1 px-2 rounded-full">
              VEGETARIAN
            </span>
            <h3 className="font-bold text-xl mt-3">Japanese Gyozas</h3>
            <p className="flex items-center mt-2">
              <img src={flame} alt="Calories" className="w-5 h-5 mr-2" />
              650 calories
            </p>
            <p className="flex items-center mt-2">
              <img src={spoon} alt="NutriScore" className="w-5 h-5 mr-2" />
              NutriScore ® 74
            </p>
            <p className="flex items-center mt-2">
              <img src={rating} alt="Rating" className="w-5 h-5 mr-2" />
              4.9 rating (537)
            </p>
          </div>
        </div>

        {/* Meal 2 */}
        <div className="bg-white shadow-lg hover:translate-y-2 transition rounded-lg overflow-hidden">
          <img src={meal2} alt="Avocado Salad" className="w-full h-52 object-cover" />
          <div className="p-6 lg:leading-8">
            <div className="flex gap-2">
              <span className="bg-green-400 text-white text-xs py-1 px-2 rounded-full">
                VEGAN
              </span>
              <span className="bg-yellow-400 text-white text-xs py-1 px-2 rounded-full">
                PALAO
              </span>
            </div>
            <h3 className="font-bold text-xl mt-3">Avocado Salad</h3>
            <p className="flex items-center mt-2">
              <img src={flame} alt="Calories" className="w-5 h-5 mr-2" />
              400 calories
            </p>
            <p className="flex items-center mt-2">
              <img src={spoon} alt="NutriScore" className="w-5 h-5 mr-2" />
              NutriScore ® 92
            </p>
            <p className="flex items-center mt-2">
              <img src={rating} alt="Rating" className="w-5 h-5 mr-2" />
              4.9 rating (537)
            </p>
          </div>
        </div>

        {/* Diet Info */}
        <div className="xs:flex xs:flex-col xs:items-center sm:items-center ">
          <h3 className="font-bold text-xl">Works with any diet:</h3>
          <ul className="mt-4 space-y-3">
            {[
              "Vegetarian",
              "Vegan",
              "Pescatarian",
              "Gluten-free",
              "Lactose-free",
              "Keto",
              "Paleo",
              "Low FODMAP",
              "Kid-friendly",
            ].map((diet, index) => (
              <li key={index} className="flex items-center">
                <img src={checkmark} alt={diet} className="w-6 h-6 mr-3" />
                {diet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <a href="#" className="text-red-500 underline font-bold">
          See All Recipes
        </a>
      </div>
    </div>
  );
};

export default MealsSection;
