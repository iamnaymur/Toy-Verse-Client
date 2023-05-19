import React from "react";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-indigo-600 to-blue-400 p-10 text-primary-content">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div>
              <img
                className="w-28 mb-5"
                src="https://i.ibb.co/YPK2VJD/Screenshot-2023-05-19-224137-removebg-preview.png"
                alt=""
              />
              <p className="font-bold text-lg">ToyVerse Ltd.</p>
            </div>
            <p className="mt-2">
              We are here to provide you toys at an affordable price.
            </p>
            <p className="mt-2">© 2023 ToyVerse Ltd. All rights reserved.</p>
          </div>

          <div>
            <h2 className="font-bold">Connect with us</h2>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-2xl">
                <FaGoogle />
              </Link>
              <Link href="#" className="text-2xl">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-2xl">
                <FaFacebook />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Contact Us !</h2>

            <p className="mt-2">
              For any inquiries or assistance, please feel free to reach out to
              us. We're here to help!
            </p>
            <ul className="mt-2 bold">
              <li>Email: toysVerse@gmail.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: Siddhirganj,Narayanganj.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
