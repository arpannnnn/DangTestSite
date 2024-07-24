"use client"
import React, { useState } from 'react';
import { MapPin, Star, Wifi, Coffee, Dumbbell, Utensils, Car, Bath } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

const HotelList = () => {
    const [selectedHotel, setSelectedHotel] = useState<null | {
        id: number;
        name: string;
        location: string;
        rating: number;
        priceRange: string;
        image: string;
        amenities: { name: string; icon: React.JSX.Element }[];
        description: string;
    }>(null);

    const hotels = [
        {
            id: 1,
            name: "Grand Luxe Hotel",
            location: "Downtown",
            rating: 4.8,
            priceRange: "$$$",
            image: "https://admin.hotelpauwa.com/wp-content/uploads/2023/02/Ghrw-home-scaled.jpg",
            amenities: [
                { name: "Free Wi-Fi", icon: <Wifi size={16} /> },
                { name: "Restaurant", icon: <Utensils size={16} /> },
                { name: "Fitness Center", icon: <Dumbbell size={16} /> },
                { name: "Spa", icon: <Bath size={16} /> }
            ],
            description: "Experience luxury in the heart of the city with breathtaking views and world-class service."
        },
        {
            id: 2,
            name: "Seaside Resort & Spa",
            location: "Beachfront",
            rating: 4.6,
            priceRange: "$$$$",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/d9/74/fb/hotel-doko.jpg?w=500&h=400&s=1",
            amenities: [
                { name: "Free Wi-Fi", icon: <Wifi size={16} /> },
                { name: "Multiple Restaurants", icon: <Utensils size={16} /> },
                { name: "Fitness Center", icon: <Dumbbell size={16} /> },
                { name: "Spa", icon: <Bath size={16} /> },
                { name: "Free Parking", icon: <Car size={16} /> }
            ],
            description: "Indulge in oceanfront luxury with private beaches, gourmet dining, and rejuvenating spa treatments."
        },
        {
            id: 3,
            name: "Seaside Resort & Spa",
            location: "Beachfront",
            rating: 4.6,
            priceRange: "$$$$",
            image: "https://images.trvl-media.com/lodging/43000000/42260000/42257400/42257369/83b81850_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
            amenities: [
                { name: "Free Wi-Fi", icon: <Wifi size={16} /> },
                { name: "Multiple Restaurants", icon: <Utensils size={16} /> },
                { name: "Fitness Center", icon: <Dumbbell size={16} /> },
                { name: "Spa", icon: <Bath size={16} /> },
                { name: "Free Parking", icon: <Car size={16} /> }
            ],
            description: "Indulge in oceanfront luxury with private beaches, gourmet dining, and rejuvenating spa treatments."
        },
        {
            id: 4,
            name: "Seaside Resort & Spa",
            location: "Beachfront",
            rating: 4.6,
            priceRange: "$$$$",
            image: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/529416304.jpg?k=9a6e8daddf20ad7b1f5a9e384004929a89f176ae3786ea2fb0ca7dbc4184d557&o=",
            amenities: [
                { name: "Free Wi-Fi", icon: <Wifi size={16} /> },
                { name: "Multiple Restaurants", icon: <Utensils size={16} /> },
                { name: "Fitness Center", icon: <Dumbbell size={16} /> },
                { name: "Spa", icon: <Bath size={16} /> },
                { name: "Free Parking", icon: <Car size={16} /> }
            ],
            description: "Indulge in oceanfront luxury with private beaches, gourmet dining, and rejuvenating spa treatments."
        },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 min-h-screen  text-white p-8 ">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Luxurious Stays</h1>
                <p className="text-xl">Discover comfort and elegance in our curated selection of hotels</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {hotels.map((hotel) => (
                    <Card key={hotel.id} className="bg-white/10 backdrop-blur-lg border-none text-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/5">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-3/5 p-6">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{hotel.name}</CardTitle>
                                    <CardDescription className="text-gray-300 flex items-center">
                                        <MapPin size={16} className="mr-2" />
                                        {hotel.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center">
                                            <Star size={16} className="mr-2 text-yellow-400" />
                                            <span>{hotel.rating}/5</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">{hotel.priceRange}</span>
                                        </div>
                                    </div>
                                    <p className="mb-4">{hotel.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {hotel.amenities.map((amenity, index) => (
                                            <Badge key={index} variant="secondary" className="bg-blue-600 text-white flex items-center">
                                                {amenity.icon}
                                                <span className="ml-1">{amenity.name}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-indigo-500 hover:bg-indigo-600" onClick={() => setSelectedHotel(hotel)}>
                                        View Details
                                    </Button>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Dialog open={selectedHotel !== null} onOpenChange={() => setSelectedHotel(null)}>
                <DialogContent className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white max-w-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4">{selectedHotel?.name}</DialogTitle>
                        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
                            <Button variant="ghost" size="icon">
                                <Coffee className="h-4 w-4" />
                            </Button>
                        </DialogClose>
                    </DialogHeader>
                    <div className="space-y-6">
                        <img src={selectedHotel?.image} alt={selectedHotel?.name} className="w-full h-64 object-cover rounded-lg" />
                        <p>{selectedHotel?.description}</p>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedHotel?.amenities.map((amenity, index) => (
                                    <Badge key={index} variant="secondary" className="bg-indigo-600 text-white flex items-center">
                                        {amenity.icon}
                                        <span className="ml-1">{amenity.name}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Location</h3>
                            <p>{selectedHotel?.location}</p>
                        </div>
                        <Button className="w-full bg-indigo-500 hover:bg-indigo-600">Book Now</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HotelList;