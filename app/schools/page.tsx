import React from 'react';
import { LucideUsers, LucideAward, LucideBookOpen, LucideMap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



interface SchoolCard {
    name: string;
    type: string;
    description: string;
    image: string;
    stats: { icon: React.ReactNode; label: string; value: string }[];
    specialties: string[];
}

const SchoolCard: React.FC<SchoolCard> = ({ name, image, specialties, description, stats }) => (
    <Card className="overflow-hidden">
        <CardHeader className="p-0">
            <div className="aspect-w-16 aspect-h-9">
                <img src={image} alt={name} className="object-cover w-full h-full" />
            </div>
        </CardHeader>
        <CardContent className="p-6">
            <CardTitle className="text-2xl font-bold text-cyan-700 mb-2">{name}</CardTitle>
            <CardDescription className="text-gray-600 mb-4">{description}</CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
                {specialties.map((specialty: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                    <Badge key={index} variant="secondary">{specialty}</Badge>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat: { icon: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                    <div key={index} className="flex items-center space-x-2">
                        {stat.icon}
                        <span className="text-sm font-medium text-gray-500">{stat.label}: {stat.value}</span>
                    </div>
                ))}
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Learn More</Button>
        </CardFooter>
    </Card>
);

const SchoolsPage = () => {
    const schools = {
        primary: [
            {
                name: "Riverside Elementary",
                type: "Primary",
                description: "A nurturing environment for young learners, emphasizing creativity and environmental awareness.",
                image: "https://las.edu.np/images/ota/GuYCc-about.png",
                stats: [
                    { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "350" },
                    { icon: <LucideAward className="w-4 h-4 text-cyan-500" />, label: "Student-Teacher Ratio", value: "15:1" },
                ],
                specialties: ["Arts Integration", "Environmental Studies", "Early Language Program"]
            },
            {
                name: "Hillside Primary Academy",
                type: "Primary",
                description: "Focused on building strong foundations in literacy and numeracy through innovative teaching methods.",
                image: "https://kmclalitpur.edu.np/wp-content/uploads/2022/05/KMC_building.jpg",
                stats: [
                    { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "400" },
                    { icon: <LucideAward className="w-4 h-4 text-cyan-500" />, label: "Student-Teacher Ratio", value: "16:1" },
                ],
                specialties: ["STEM Focus", "Literacy Program", "Digital Learning"]
            },
        ],
        secondary: [
            {
                name: "Lakeview High School",
                type: "Secondary",
                description: "Preparing students for future success with a wide range of academic and extracurricular programs.",
                image: "https://itcollegenepal.com/wp-content/uploads/2017/05/st.xaviers-college.jpg.webp",
                stats: [
                    { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "800" },
                    { icon: <LucideAward className="w-4 h-4 text-cyan-500" />, label: "Graduation Rate", value: "95%" },
                ],
                specialties: ["Advanced Placement Courses", "Sports Programs", "Arts and Music"]
            },
            {
                name: "Tech Valley Secondary School",
                type: "Secondary",
                description: "Innovative curriculum focusing on technology, entrepreneurship, and sustainable development.",
                image: "https://i1.wp.com/www.madhesiyouth.com/wp-content/uploads/2020/06/bnks.jpeg?resize=750%2C445&ssl=1",
                stats: [
                    { icon: <LucideUsers className="w-4 h-4 text-cyan-500" />, label: "Students", value: "600" },
                    { icon: <LucideAward className="w-4 h-4 text-cyan-500" />, label: "College Acceptance Rate", value: "98%" },
                ],
                specialties: ["Robotics", "Entrepreneurship", "Sustainable Technology"]
            },
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-cyan-700 mb-4">Schools in Our District</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our district takes pride in offering high-quality education from primary through secondary levels. Our schools foster a love for learning, critical thinking, and community engagement.
                    </p>
                </div>

                <Tabs defaultValue="primary" className="mb-12">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="primary">Primary Schools</TabsTrigger>
                        <TabsTrigger value="secondary">Secondary Schools</TabsTrigger>
                    </TabsList>
                    <TabsContent value="primary">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {schools.primary.map((school, index) => (
                                <SchoolCard key={index} {...school} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="secondary">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {schools.secondary.map((school, index) => (
                                <SchoolCard key={index} {...school} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <Card className="bg-cyan-700 text-white">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Education Initiatives</CardTitle>
                        <CardDescription className="text-cyan-100">
                            Our district is committed to providing innovative and inclusive education for all students.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <LucideBookOpen className="w-5 h-5" />
                                <span>Comprehensive STEM programs across all levels</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <LucideAward className="w-5 h-5" />
                                <span>Arts and cultural education integration</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <LucideMap className="w-5 h-5" />
                                <span>Environmental awareness and sustainability projects</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <LucideUsers className="w-5 h-5" />
                                <span>Community engagement and service learning opportunities</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary">Learn More About Our Initiatives</Button>
                    </CardFooter>
                </Card>

                
            </div>
            
        </div>
    );
};

export default SchoolsPage;