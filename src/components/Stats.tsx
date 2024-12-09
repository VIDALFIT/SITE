import { Users, Award, Trophy } from 'lucide-react';

const stats = [
  {
    label: 'Active Users',
    value: '100K+',
    icon: Users,
    description: 'Achieving their fitness goals',
  },
  {
    label: 'Success Rate',
    value: '92%',
    icon: Trophy,
    description: 'Users reaching their targets',
  },
  {
    label: 'App Store Rating',
    value: '4.9',
    icon: Award,
    description: 'Based on 50K+ reviews',
  },
];

export function Stats() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Statistics background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by fitness enthusiasts worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100">
            Join our growing community of successful fitness achievers
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-indigo-300" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium text-indigo-200">{stat.label}</p>
                  <p className="mt-1 text-sm text-indigo-300">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
