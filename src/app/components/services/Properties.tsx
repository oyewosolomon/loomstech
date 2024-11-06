import React from 'react';
import { Shield, Home, Clock, BarChart, CheckCircle, Users, Wrench, Coins } from 'lucide-react';
import { Card, CardContent } from "../Card"

const PropertyManagement = () => {
  const services = [
    {
      icon: <Home className="w-6 h-6 text-[#EF4724]" />,
      title: "Property Maintenance",
      description: "Regular maintenance and repairs to keep your property in excellent condition"
    },
    {
      icon: <Users className="w-6 h-6 text-[#EF4724]" />,
      title: "Tenant Management",
      description: "Comprehensive tenant screening, placement, and relationship management"
    },
    {
      icon: <Coins className="w-6 h-6 text-[#EF4724]" />,
      title: "Rent Collection",
      description: "Timely rent collection and financial reporting services"
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#EF4724]" />,
      title: "Emergency Repairs",
      description: "24/7 emergency maintenance response service"
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#EF4724]" />,
      title: "Financial Management",
      description: "Detailed financial reporting and analysis of your property performance"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#EF4724]" />,
      title: "Legal Compliance",
      description: "Ensuring your property meets all regulatory requirements"
    }
  ];

  const benefits = [
    "Maximized rental income",
    "Reduced vacancy rates", 
    "Professional tenant screening",
    "Regular property inspections",
    "Detailed financial reporting",
    "24/7 emergency response",
    "Preventive maintenance",
    "Legal compliance management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#262A2F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            Professional Property Management Services
          </h1>
          <p className="font-satoshi text-xl text-gray-300 max-w-2xl">
            Let us handle the complexities of property management while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-sora text-3xl font-bold text-center mb-12">
          Our Management Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 bg-white py-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3 className="font-sora font-bold text-xl">{service.title}</h3>
                </div>
                <p className="font-satoshi text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-sora text-3xl font-bold text-center mb-12">
            Benefits of Our Property Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#EF4724] flex-shrink-0 mt-1" size={20} />
                <span className="font-satoshi text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#EF4724] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sora text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-satoshi text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how our property management services can benefit you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#EF4724] px-8 py-3 rounded-lg font-sora font-bold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-sora font-bold hover:bg-white hover:text-[#EF4724] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;