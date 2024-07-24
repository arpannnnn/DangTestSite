import React from 'react';
import { LucideLinkedin, LucideTwitter, LucideMail } from 'lucide-react';
interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
}

const TeamMember :React.FC<TeamMemberProps>= ({ name, role, image, bio, linkedin, twitter, email }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="aspect-w-3 aspect-h-4">
            <img className="object-cover w-full h-full" src={image} alt={name} />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-cyan-300 font-medium">{role}</p>
            <p className="mt-2 text-sm line-clamp-3 group-hover:line-clamp-none">{bio}</p>
            <div className="mt-3 flex space-x-3">
                {linkedin && (
                    <a href={linkedin} className="text-white hover:text-cyan-300 transition-colors">
                        <LucideLinkedin className="w-5 h-5" />
                    </a>
                )}
                {twitter && (
                    <a href={twitter} className="text-white hover:text-cyan-300 transition-colors">
                        <LucideTwitter className="w-5 h-5" />
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`} className="text-white hover:text-cyan-300 transition-colors">
                        <LucideMail className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Jane Doe",
            role: "District Manager",
            image: "https://images.unsplash.com/photo-1613365765813-e29fea16ecaa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bio: "Jane brings over 15 years of experience in regional management and sustainable tourism development.",
            linkedin: "https://linkedin.com/in/janedoe",
            twitter: "https://twitter.com/janedoe",
            email: "jane.doe@example.com"
        },
        {
            name: "John Smith",
            role: "Head of Cultural Affairs",
            image: "https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bio: "With a background in anthropology, John is passionate about preserving and promoting our district's rich cultural heritage.",
            linkedin: "https://linkedin.com/in/johnsmith",
            email: "john.smith@example.com"
        },
        {
            name: "Emily Chen",
            role: "Environmental Coordinator",
            image: "https://images.unsplash.com/photo-1542973823-8a3bb6b5999b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bio: "Emily leads our sustainability initiatives, ensuring that our tourism practices are environmentally responsible.",
            twitter: "https://twitter.com/emilychen",
            email: "emily.chen@example.com"
        },
        {
            name: "Michael Johnson",
            role: "Community Outreach Director",
            image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bio: "Michael works closely with local communities to create inclusive tourism programs that benefit residents and visitors alike.",
            linkedin: "https://linkedin.com/in/michaeljohnson",
            email: "michael.johnson@example.com"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-cyan-700 mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our dedicated team of professionals works tirelessly to make our district a world-class destination. Get to know the faces behind our success.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Join Our Team</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Passionate about tourism and community development? We're always looking for talented individuals to join our mission.
                    </p>
                    <a
                        href="#careers"
                        className="inline-block bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        View Open Positions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;