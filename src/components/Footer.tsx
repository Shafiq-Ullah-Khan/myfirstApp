import insta from "../assets/social icons/instagram-brands-solid.svg";
import facebook from "../assets/social icons/facebook-brands-solid.svg";
import twitter from "../assets/social icons/twitter-brands-solid.svg";

const Footer = ({ logo }) => {
  return (
    <footer className=" border-t-gray-50 py-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-5 xs:px-0">
        {/* Section 1 */}
        <div className="flex order-1 xs:gap-10 xs:order-2 sm:order-2 md:order-2">
          <div className="flex flex-col items-start xs:py-10">
            <div className="mb-4">
              <img src={logo} alt="Omnifood Logo" className="h-6 xs:h-4" />
            </div>
            <div className="flex space-x-4 mb-6">
              <img src={insta} alt="Instagram" className="h-6 cursor-pointer" />
              <img
                src={facebook}
                alt="Facebook"
                className="h-6 cursor-pointer"
              />
              <img src={twitter} alt="Twitter" className="h-6 cursor-pointer" />
            </div>
            <p className="text-gray-500 font-serif xs:text-sm">
              Copyright © 2024 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
          {/* Contact Us */}
          <div className="lg:order-3 text-gray-700 xs:text-sm xs:py-8">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>Phone: 415-201-6370</p>
            <p>Email: hello@omnifood.com</p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid xs:order-1 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 xs:gap-10 lg:order-2">
          {/* Account */}
          <div>
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2 text-gray-700">
              {["Create account", "Sign in", "iOS app", "Android app"].map(
                (item, index) => (
                  <li key={index} className="hover:text-gray-900 xs:text-sm">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-700">
              {["About Omnifood", "For Business", "Careers", "Partners"].map(
                (item, index) => (
                  <li key={index} className="hover:text-gray-900 xs:text-sm">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Recipe directory",
                "Help center",
                "Privacy policy",
                "Terms",
              ].map((item, index) => (
                <li key={index} className="hover:text-gray-900 xs:py-1 xs:text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
