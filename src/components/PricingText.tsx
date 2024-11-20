import infinite from "../assets/pricing icons/infinity-solid.svg";
import apple from "../assets/pricing icons/apple-brands-solid.svg";
import leaf from "../assets/pricing icons/leaf-solid.svg";
import pause from "../assets/pricing icons/pause-solid.svg";
import checkmark from "../assets/pricing icons/check-solid.svg";
const PricingText = () => {
  return (
    <div className="p-10">
      {/* heading section */}
      <div>
        <span className="text-xl font-serif text-orange-600 xs:text-lg">PRICING</span>
        <h1 className="font-bold text-4xl">
          Eating well without breaking the bank
        </h1>
      </div>
      {/* heading section end */}

      <section className="mt-16">
        {/* card section */}
        <div className="flex justify-center gap-10 flex-wrap">
          {/* card 1 */}
          <div className="border border-orange-200 w-96 p-10 rounded-xl">
            <div className="text-center pt-6 pb-6">
              <span className="font-bold text-orange-700 pt-2">STARTER</span>
              <p className="P-4 font-bold text-xl">
                $ <span className="font-bold text-6xl pt-2">399</span>
              </p>
              <p className="pt-2 text-gray-500">
                per month. That's just $13 per meal!
              </p>
            </div>
            <ul className="p-4 flex flex-col">
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3">1 meal per day </span>
              </li>
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3"> Order from 11am to 9pm</span>
              </li>
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3"> Delivery is free</span>
              </li>
            </ul>
            <button className="bg-orange-500 py-3 px-5 border-4 border-orange-300 rounded-xl font-bold text-xl text-white flex m-auto hover:bg-orange-600">
              Start eating well
            </button>
          </div>

          {/* card2 */}
          <div className="border border-orange-200 w-96 p-10 rounded-xl bg-orange-50">
            <div className="text-center pt-6 pb-6">
              <span className="font-bold text-orange-700 pt-2">COMPLETE</span>
              <p className="P-4 font-bold text-xl">
                $ <span className="font-bold text-6xl pt-2">469</span>
              </p>
              <p className="pt-2 text-gray-500">
                per month. That's just $11 per meal!
              </p>
            </div>
            <ul className="p-4 flex flex-col">
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3">Order 24/7 </span>
              </li>
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3"> Delivery is free</span>
              </li>
              <li className="pt-3 flex">
                <img src={checkmark} className="w-7" />
                <span className="mx-3">Get access to latest recipes</span>
              </li>
            </ul>
            <button className="bg-orange-500 py-3 px-5 rounded-lg font-bold text-xl text-white flex m-auto hover:bg-orange-600">
              Start eating well
            </button>
          </div>
        </div>
        {/* card section end */}
      </section>
      {/* peragragh */}
      <div className="text-center py-10 text-xl text-gray-500">
        <p>Prices include all applicable taxes. You can cancel at any time. Both plans include the following:</p>
      </div>
      {/* taxes section */}
      <section className="p-7 xs:p-0">
        <div className="flex gap-16 flex-wrap lg:leading-7 font-sans items-center justify-around xs:justify-start">
            <div className="w-56 p-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex text-center items-center">
                    <img src={infinite} className="w-10 mx-3"/>
                </div>
                <h1 className="font-bold text-2xl xs:text-xl">Never cook again!</h1>
                <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>

            <div className="w-56 p-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex text-center items-center">
                    <img src={apple} className="w-6 mx-4"/>
                </div>
                <h1 className="font-bold text-2xl xs:text-xl">Never cook again!</h1>
                <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>

            <div className="w-56 p-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex text-center items-center">
                    <img src={leaf} className="w-8 mx-3"/>
                </div>
                <h1 className="font-bold text-2xl xs:text-xl">Never cook again!</h1>
                <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>

            <div className="w-56 p-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex text-center items-center">
                    <img src={pause} className="w-5 mx-5"/>
                </div>
                <h1 className="font-bold text-2xl xs:text-xl">Never cook again!</h1>
                <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
            </div>

        </div>
      </section>
    </div>
  )
}

export default PricingText
