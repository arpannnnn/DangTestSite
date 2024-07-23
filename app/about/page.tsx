import React from 'react';
import { LucideIceCreamCone, LucideStar, LucideMap, LucideLandmark, LucideUtensils, LucideCalendar, LucideGift, LucideHeart, LucideFacebook, LucideTwitter, LucideInstagram } from 'lucide-react';
import { cn } from '../lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="flex items-center text-xl font-semibold text-cyan-700 group-hover:text-cyan-500 transition-colors duration-300">
        <Icon className="w-6 h-6 mr-2 text-cyan-500 group-hover:text-cyan-400" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
    </CardContent>
  </Card>
);

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-16 bg-gradient-to-b from-cyan-50 to-white">
      <header className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-cyan-700 leading-tight">
          Discover the Heart of <span className="text-cyan-500">Our District</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to our corner of the world, where natural beauty and rich heritage come together to create an unforgettable experience. Our district is not just a destination; it's a journey through time, tradition, and breathtaking landscapes.
        </p>
      </header>
      
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
          <CardDescription className="text-cyan-100 text-lg">
            Showcasing charm, encouraging immersion, and preserving beauty.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            We believe in sustainable tourism that benefits both our community and the environment, ensuring that our district remains a cherished destination for generations to come.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={LucideMap}
          title="Scenic Trails and Nature Walks"
          description="Explore lush forests, serene lakes, and majestic mountains through our well-maintained trails. Perfect for hikers and casual walkers alike."
        />
        <FeatureCard
          icon={LucideLandmark}
          title="Cultural Heritage"
          description="Step back in time as you visit our historic landmarks, museums, and cultural sites. Discover the traditions that shaped our district."
        />
        <FeatureCard
          icon={LucideUtensils}
          title="Local Cuisine"
          description="Savor the flavors of our region with locally sourced and expertly prepared dishes. Experience our culinary traditions."
        />
        <FeatureCard
          icon={LucideCalendar}
          title="Festivals and Events"
          description="Join vibrant festivals and events celebrating our local culture, arts, and community spirit. There's always something exciting happening!"
        />
        <FeatureCard
          icon={LucideGift}
          title="Artisanal Crafts"
          description="Discover unique, handmade crafts by local artisans. Take home a piece of our district's artistic heritage."
        />
        <FeatureCard
          icon={LucideHeart}
          title="Why Visit Us?"
          description="Our district offers a perfect blend of relaxation and adventure. Find tranquility in nature or explore vibrant cultural attractions."
        />
      </div>
      
      <div className="text-center space-y-6">
        <Button className="text-white bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Plan Your Visit
        </Button>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-cyan-700">Stay Connected</h2>
          <p className="mt-2 text-xl text-gray-600 max-w-2xl mx-auto">
            Follow us on social media and subscribe to our newsletter to stay updated on upcoming events, new attractions, and special offers.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <LucideFacebook className="w-8 h-8 text-cyan-600 hover:text-cyan-500 cursor-pointer" />
            <LucideTwitter className="w-8 h-8 text-cyan-600 hover:text-cyan-500 cursor-pointer" />
            <LucideInstagram className="w-8 h-8 text-cyan-600 hover:text-cyan-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;