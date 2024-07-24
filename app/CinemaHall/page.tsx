"use client"
import React, { useState } from 'react';
import { MapPin, Users, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

const CinemaHallList = () => {
    const [selectedHall, setSelectedHall] = useState<{ name: string, movies: { title: string, timings: string[] }[] } | null>(null);

    const cinemaHalls = [
        {
            id: 1,
            name: "Starlight IMAX",
            location: "Downtown",
            capacity: 300,
            rating: 4.8,
            features: ["IMAX", "Dolby Atmos"],
            image: "https://play-lh.googleusercontent.com/dvr7tQGzDnHKInGndnAi04j3qOQTXn2NjfmEemSPvef0j4YbRNrZIdXx8r0vtsgFtS8x",
            movies: [
                { title: "Inception", timings: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"] },
                { title: "The Dark Knight", timings: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"] },
                { title: "Interstellar", timings: ["12:00 PM", "4:00 PM", "8:00 PM"] },
            ]
        },
        {
            id: 2,
            name: "Riverside Cinemas",
            location: "Westside",
            capacity: 200,
            rating: 4.5,
            features: ["3D", "VIP Seating"],
            image: "https://play-lh.googleusercontent.com/wLT1I0APbab7j1YH4nVosjUWs-whQGEdpg_1Lg57jQbiFenWDUEDyJvsHc5b3RkDUK8",
            movies: [
                { title: "Avatar", timings: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"] },
                { title: "The Matrix", timings: ["10:30 AM", "1:45 PM", "5:15 PM", "8:45 PM"] },
            ]
        },
        // ... (other cinema halls)
    ];

    return (
        <div className="bg-gradient-to-r from-teal-700 to-emerald-800 min-h-screen text-white p-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">City Cinema Halls</h1>
                <p className="text-xl">Discover the best movie experiences in town</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {cinemaHalls.map((hall) => (
                    <Card key={hall.id} className="bg-white/10 backdrop-blur-lg border-none text-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img src={hall.image} alt={hall.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-1/2 p-6">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{hall.name}</CardTitle>
                                    <CardDescription className="text-gray-300 flex items-center">
                                        <MapPin size={16} className="mr-2" />
                                        {hall.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center">
                                            <Users size={16} className="mr-2" />
                                            <span>{hall.capacity} seats</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Star size={16} className="mr-2" />
                                            <span>{hall.rating}/5</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {hall.features.map((feature, index) => (
                                            <Badge key={index} variant="secondary" className="bg-teal-600 text-white">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600" onClick={() => setSelectedHall(hall)}>
                                        View Showtimes
                                    </Button>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Dialog open={selectedHall !== null} onOpenChange={() => setSelectedHall(null)}>
                <DialogContent className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white max-w-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4">{selectedHall?.name} - Showtimes</DialogTitle>
                        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
                            
                        </DialogClose>
                    </DialogHeader>
                    <div className="space-y-6">
                        {selectedHall?.movies.map((movie, index) => (
                            <div key={index} className="bg-white/10 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {movie.timings.map((time, timeIndex) => (
                                        <Badge key={timeIndex} variant="secondary" className="bg-emerald-600 text-white">
                                            <Clock size={14} className="mr-1" />
                                            {time}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CinemaHallList;