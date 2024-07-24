import React from 'react';
import { LucideBook, LucideGraduationCap, LucideUsers, LucideGlobe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface CollegeInfoProps {
    name: string;
    description: string;
    image: string;
    stats: { icon: React.ReactNode; label: string; value: string }[];
}

const CollegeCard: React.FC<CollegeInfoProps> = ({ name, description, image, stats }) => (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-w-16 aspect-h-9">
            <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <CardHeader>
            <CardTitle className="text-2xl font-bold text-cyan-700">{name}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        {stat.icon}
                        <span className="text-sm font-medium text-gray-500">{stat.label}: {stat.value}</span>
                    </div>
                ))}
            </div>
            <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
        </CardContent>
    </Card>
);

const CollegesPage = () => {
    const colleges = [
        {
            name: "Coastal University",
            description: "A renowned institution known for its marine biology and environmental science programs, situated along our beautiful coastline.",
            image: "https://images.unsplash.com/photo-1637880048251-8369fe9f0321?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stats: [
                { icon: <LucideBook className="w-4 h-4 text-cyan-500" />, label: "Programs", value: "50+" },
                { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "15,000" },
                { icon: <LucideGraduationCap className="w-4 h-4 text-cyan-500" />, label: "Graduation Rate", value: "92%" },
                { icon: <LucideGlobe className="w-4 h-4 text-cyan-500" />, label: "Int'l Students", value: "20%" },
            ]
        },
        {
            name: "Mountain View College",
            description: "Nestled in the highlands, this college is famous for its geology, forestry, and outdoor recreation management programs.",
            image: "https://images.unsplash.com/photo-1637880395450-046b5f5993a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stats: [
                { icon: <LucideBook className="w-4 h-4 text-cyan-500" />, label: "Programs", value: "35+" },
                { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "8,000" },
                { icon: <LucideGraduationCap className="w-4 h-4 text-cyan-500" />, label: "Graduation Rate", value: "88%" },
                { icon: <LucideGlobe className="w-4 h-4 text-cyan-500" />, label: "Int'l Students", value: "15%" },
            ]
        },
        {
            name: "Nepal College of Information Technology",
            description: "A cutting-edge institute focusing on sustainable technology, green energy, and eco-friendly engineering solutions.",
            image: "https://i.ytimg.com/vi/y8PUtsK5XH8/sddefault.jpg",
            stats: [
                { icon: <LucideBook className="w-4 h-4 text-cyan-500" />, label: "Programs", value: "40+" },
                { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "12,000" },
                { icon: <LucideGraduationCap className="w-4 h-4 text-cyan-500" />, label: "Graduation Rate", value: "95%" },
                { icon: <LucideGlobe className="w-4 h-4 text-cyan-500" />, label: "Int'l Students", value: "25%" },
            ]
        },
        {
            name: "Valley Arts Academy",
            description: "Renowned for its programs in fine arts, performing arts, and digital media, situated in our culturally rich valley region.",
            image: "https://cdn.gurubaa.com/wp-content/uploads/2022/06/26155937/KU.jpg",
            stats: [
                { icon: <LucideBook className="w-4 h-4 text-cyan-500" />, label: "Programs", value: "25+" },
                { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "5,000" },
                { icon: <LucideGraduationCap className="w-4 h-4 text-cyan-500" />, label: "Graduation Rate", value: "90%" },
                { icon: <LucideGlobe className="w-4 h-4 text-cyan-500" />, label: "Int'l Students", value: "30%" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-cyan-700 mb-4">Higher Education in Our District</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our district is proud to host a diverse range of colleges and universities, each offering unique programs that reflect our region's natural beauty, cultural heritage, and commitment to innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {colleges.map((college, index) => (
                        <CollegeCard key={index} {...college} />
                    ))}
                </div>

                <div className="bg-cyan-700 text-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Why Study in Our District?</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Access to unique natural laboratories, from coastal ecosystems to mountain ranges</li>
                        <li>Strong industry partnerships providing internship and job opportunities</li>
                        <li>A supportive community that values education and innovation</li>
                        <li>Rich cultural experiences enhancing your academic journey</li>
                        <li>State-of-the-art facilities and research centers</li>
                    </ul>
                    <Button className="bg-white text-cyan-700 hover:bg-gray-100">Explore Student Resources</Button>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Interested in Learning More?</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Contact our district's education liaison for more information about studying in our region, scholarship opportunities, and student support services.
                    </p>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact Education Liaison</Button>
                </div>
            </div>
        </div>
    );
};

export default CollegesPage;
