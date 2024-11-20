
import contactFoodImg from "../assets/signUpImg/signUpImg.webp";
const SignUpSection = () => {
  return (
    <div className="lg:p-16 flex flex-col lg:flex-row items-center xs:px-5">
      
      {/* Left Section */}
      <div
        className="bg-orange-400 rounded-bl-xl rounded-br-xl p-6 md:p-10 shadow-lg opacity-70 flex flex-col lg:flex-1 order-1 xs:order-2"
        id="contactSection"
      >
        <div className="flex flex-col">
          
          {/* Heading */}
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Get your first meal for free!
            </h1>
          </div>

          {/* Subtext */}
          <div className="text-lg mt-6 lg:mt-10">
            <p>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col mt-8 space-y-4">
            
            {/* Name and Email Input Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-1/2">
                <label className="font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="py-2 px-3 rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <label className="font-bold">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>

            {/* Referral and Sign-Up Button */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:w-1/2">
                <label className="font-bold">Where did you hear from us?</label>
                <select className="py-2 px-3 w-full rounded-lg border border-gray-300">
                  <option value="Select One Option">Select One Option</option>
                  <option value="Friends and Family">Friends and Family</option>
                  <option value="YouTube Videos">YouTube Videos</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Facebook Ad">Facebook Ad</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="w-full lg:w-1/2 py-4">
                <button className="w-full py-3 mt-6 lg:mt-0 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0 flex justify-start lg:flex-1 order-2 xs:order-1 rounded-tl-lg rounded-tr-lg">
        <img
          src={contactFoodImg}
          alt="Delicious meal"
          className="w-full lg:max-w-none rounded-tr-lg rounded-tl-lg xs:rounded-none object-cover lg:w-[83%]"
        />
      </div>

    </div>
  )
}

export default SignUpSection
