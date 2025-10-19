
import React from 'react';

const schedule = [
    { day: "Monday", kids: "4:30 PM - 5:30 PM", adults: "7:00 PM - 8:30 PM" },
    { day: "Wednesday", kids: "4:30 PM - 5:30 PM", adults: "7:00 PM - 8:30 PM" },
    { day: "Friday", kids: "5:00 PM - 6:00 PM", adults: "6:30 PM - 8:00 PM" },
    { day: "Saturday", kids: "9:00 AM - 10:00 AM", adults: "N/A" },
];

const Schedule = () => (
  <section id="classes-section" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-[#1A237E] text-center mb-12">
        Ready to Start? The 3 Steps to Joining Our London School
      </h2>
      
      {/* 3 Steps Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 border-b-4 border-red-600 bg-white shadow-md rounded-lg">
          <div className="text-4xl font-extrabold text-red-600 mb-2">1.</div>
          <h3 className="text-xl font-bold text-[#1A237E]">Claim Your Free Class</h3>
          <p className="text-gray-600">Use the form below to book your no-obligation trial lesson. No uniform needed.</p>
        </div>
        <div className="p-6 border-b-4 border-red-600 bg-white shadow-md rounded-lg">
          <div className="text-4xl font-extrabold text-red-600 mb-2">2.</div>
          <h3 className="text-xl font-bold text-[#1A237E]">Experience Judo</h3>
          <p className="text-gray-600">Join a beginner-friendly class at our central London location. Meet the Sensei!</p>
        </div>
        <div className="p-6 border-b-4 border-red-600 bg-white shadow-md rounded-lg">
          <div className="text-4xl font-extrabold text-red-600 mb-2">3.</div>
          <h3 className="text-xl font-bold text-[#1A237E]">Begin Your Journey</h3>
          <p className="text-gray-600">Enroll in the program that suits your goals and start your path to mastery.</p>
        </div>
      </div>

      {/* Schedule Table */}
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Weekly Training Schedule</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-xl rounded-lg overflow-hidden">
          <thead className="bg-[#1A237E] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Day</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Kids Program (Ages 5-12)</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Adult Classes (16+)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((item, index) => (
              <tr key={item.day} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-[#1A237E]">{item.day}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.kids}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.adults}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-6 text-gray-500">Private lessons available by appointment daily.</p>
    </div>
  </section>
);

export default Schedule;