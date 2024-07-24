import React from 'react';
import { LucideMapPin, LucidePhone, LucideMail, LucideClock } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";

interface ContactInfoProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-3">
        <Icon className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
        <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Message sent successfully");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-cyan-700 mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you! Whether you have a question about our district, need assistance planning your visit, or want to share your experience, we're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2 mb-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold text-cyan-700 mb-8">Send Us a Message</h2>
                            <form  className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input placeholder="Your Name" required />
                                    <Input type="email" placeholder="Your Email" required />
                                </div>
                                <Input placeholder="Subject" required />
                                <Textarea placeholder="Your Message" rows={8} required />
                                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Contact Information</h2>
                                <ContactInfo
                                    icon={LucideMapPin}
                                    title="Address"
                                    content="123 Tourism Street, Scenic City, SC 12345, Country"
                                />
                                <ContactInfo
                                    icon={LucidePhone}
                                    title="Phone"
                                    content="+1 (555) 123-4567"
                                />
                                <ContactInfo
                                    icon={LucideMail}
                                    title="Email"
                                    content="info@ourdistrict.com"
                                />
                                <ContactInfo
                                    icon={LucideClock}
                                    title="Office Hours"
                                    content="Monday - Friday: 9am - 5pm"
                                />
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Find Us</h2>
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src=" /map of Dang.jpg "
                                        alt="Map of our location"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white">
                                    Open in Google Maps
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Have a question? Check out our FAQ section for quick answers to common inquiries.
                    </p>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        View FAQ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;