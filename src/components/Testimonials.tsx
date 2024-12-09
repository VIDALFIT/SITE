import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'FitLife Pro completely transformed my approach to fitness. The personalized workouts and nutrition guidance have helped me achieve results I never thought possible.',
  },
  {
    name: 'Michael Chen',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'The AI-powered coaching adapts perfectly to my training schedule. It\'s like having a personal trainer in my pocket 24/7.',
  },
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Loved by fitness enthusiasts worldwide
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}