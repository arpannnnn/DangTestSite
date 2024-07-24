import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 mt-4 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">TestSite</h3>
                        <p className="text-gray-300">Discover the world with comfort and luxury. Your journey begins here.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotels</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cinemas</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2" />
                                <a href="mailto:info@TestSite.com" className="text-gray-300 hover:text-white transition-colors">info@TestSite.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={18} className="mr-2" />
                                <span className="text-gray-300">123 Travel Street, City, Country</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400">&copy; {currentYear} TestSite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;