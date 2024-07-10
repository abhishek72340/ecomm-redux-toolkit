const Footer = () => {
  return (
    <footer className="bg-green-300  py-6 absolute b-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Shop</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Offers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center ">
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
