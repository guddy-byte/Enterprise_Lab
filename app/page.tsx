"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  HandHeart,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Star,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export default function EnterpriseLab() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50 shadow-sm p-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-15 pt-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/Enterprise_Lab/bg-remove_logo.png"
                alt="Enterprise Lab Logo"
                width={250}     
                height={60} 
                className="object-contain"
                onClick={() => scrollToSection("home")}
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer pt-10">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#089302]/15 via-[#350c8c]/10 to-[#e2211b]/15" />
        
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/Enterprise_Lab/modern-business-office-in-lagos-nigeria-with-entre.png')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
            isVisible ? "fade-in" : "opacity-0"
          }`}
        >
          {/* Badge */}
          <Badge className="mb-6 text-sm font-medium bg-slate-800 text-white border-0 shadow-md">
            Established 2014 • Lagos, Nigeria
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Empowering  African Entrepreneurs to Scale 
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leading enterprise solutions partner delivering high-impact consulting services that build financially
            literate entrepreneurs and accelerate SME growth across Africa.
          </p>

          {/* Buttons - neutral style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-700 shadow-md transition-all"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-700 shadow-md transition-all"
              onClick={() => scrollToSection("about")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-[#089302]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 cursor-pointer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3787] mb-4">
              About Enterprise Lab Consulting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Since 2014, we've been the trusted partner for entrepreneurs and SMEs across Nigeria and Africa, providing
              the knowledge, tools, and funding access needed for sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-up">
              <div className="aspect-video rounded-lg overflow-hidden border border-blue-200 mb-4">
                <video 
                  src="/Enterprise_Lab/about_us.mp4" 
                  poster="/Enterprise_Lab/image_1.jpg"
                  controls 
                  className="w-full h-full object-cover">
                </video>
              </div>
            </div>
            <div className="slide-up">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission & Vision</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h4 className="font-semibold text-blue-800 mb-2">Vision</h4>
                  <p className="text-slate-600">
                    To be the leading enterprise solutions partner in Africa, equipping entrepreneurs and SMEs with the
                    knowledge, tools, and funding access required to scale sustainably.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-500 shadow-sm">
                  <h4 className="font-semibold text-emerald-800 mb-2">Mission</h4>
                  <p className="text-slate-600">
                    To deliver high-impact consulting services that build financially literate entrepreneurs, strengthen
                    enterprise development, and accelerate SME growth through innovation and access to funding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-5 gap-6 slide-up">
            {[
              {
                icon: CheckCircle,
                title: "Integrity",
                description: "Honest and transparent in all our dealings",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Creative solutions for complex challenges",
                color: "text-yellow-600",
                bg: "bg-yellow-50",
                border: "border-yellow-200",
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Delivering exceptional results consistently",
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                icon: HandHeart,
                title: "Partnership",
                description: "Building lasting relationships with clients",
                color: "text-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-200",
              },
              {
                icon: Target,
                title: "Impact",
                description: "Creating meaningful change in communities",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${value.bg} ${value.border} border`}
              >
                <CardContent className="pt-6">
                  <value.icon className={`h-12 w-12 ${value.color} mx-auto mb-4`} />
                  <h4 className="font-semibold text-slate-800 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3787] mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to empower your business growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Financial Literacy & Advisory",
                description:
                  "Training entrepreneurs in budgeting, savings, credit management, and financial planning with tailored SME financial advisory.",
                image: "/Enterprise_Lab/image_1.jpg",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
              },
              {
                icon: Building2,
                title: "Enterprise Development",
                description:
                  "Business strategy design, capacity-building workshops, mentorship, and policy advocacy for SME growth.",
                image: "/Enterprise_Lab/enterprise_development.jpg",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                icon: Users,
                title: "SME Support Services",
                description:
                  "Business diagnostics, formalization and compliance guidance, and comprehensive market access support.",
                image: "/Enterprise_Lab/image_2.jpg",
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                icon: Target,
                title: "Investment Readiness & Matchmaking",
                description:
                  "Preparing SMEs for investor engagement, pitch coaching, and curating SME-funder matchmaking platforms.",
                image: "/Enterprise_Lab/image_3.jpg",
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "border-orange-200",
              },
              {
                icon: Lightbulb,
                title: "Innovation Accelerator",
                description:
                  "Startup incubation, innovation bootcamps, and accelerator programs with tailored curricula for scaling.",
                image: "/Enterprise_Lab/innovator.jpg",
                color: "text-yellow-600",
                bg: "bg-yellow-50",
                border: "border-yellow-200",
              },
              {
                icon: HandHeart,
                title: "Stakeholder Engagement",
                description:
                  "Connecting with development agencies, financial institutions, government, and private sector partners.",
                image: "/Enterprise_Lab/stackholder.jpg",
                color: "text-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-200",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 slide-up border ${service.border} ${service.bg} overflow-hidden`}
              >
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                </div>
                <CardHeader className={service.bg}>
                  <div className="flex items-center space-x-3 mb-2">
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                    <CardTitle className="text-lg text-slate-800">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className={service.bg}>
                <Button
                    className="w-full bg-[#350c8c] hover:bg-[#2b0a70] text-white shadow-md transition-all"
                  >
                    Learn More
                </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3787] mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from entrepreneurs and businesses we've helped transform and scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adebayo Ogundimu",
                role: "CEO, TechStart Lagos",
                image: "/Enterprise_Lab/african-businessman-portrait.png",
                quote:
                  "Enterprise Lab transformed our financial management approach. Their investment readiness program helped us secure $500K in funding.",
                color: "border-emerald-200 bg-emerald-50",
              },
              {
                name: "Fatima Mohammed",
                role: "Founder, AgriConnect",
                image: "/Enterprise_Lab/professional-african-businesswoman-portrait.png",
                quote:
                  "The enterprise development workshops gave us the strategic framework we needed to expand across three states in Nigeria.",
                color: "border-blue-200 bg-blue-50",
              },
              {
                name: "Chidi Okwu",
                role: "Director, EduTech Solutions",
                image: "/Enterprise_Lab/professional-african-entrepreneur-portrait.png",
                quote:
                  "Their innovation accelerator program was instrumental in helping us scale from 10 to 500+ users in just 6 months.",
                color: "border-purple-200 bg-purple-50",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 slide-up border ${testimonial.color}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white shadow-md"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex space-x-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3787] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-up">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Headquarters</h4>
                    <p className="text-slate-600">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">info@enterpriselab.ng</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <Phone className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+234 (0) 123 456 7890</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-slate-800 mb-4">Our Clients & Stakeholders</h4>
                <div className="text-slate-600 space-y-2">
                  <p>• SMEs & entrepreneurs across Nigeria and Africa</p>
                  <p>• Development agencies and donors</p>
                  <p>• Financial institutions and investors</p>
                  <p>• Government and private sector actors</p>
                </div>
              </div>
            </div>

            <Card className="slide-up border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-slate-800">Send us a message</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 bg-white">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" className="border-slate-300 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" className="border-slate-300 focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Company</label>
                  <Input placeholder="Enter your company name" className="border-slate-300 focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your business needs..."
                    rows={4}
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-[#350c8c] hover:bg-[#2b0a70] text-white shadow-md transition-all">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {/* Logo */}
            <Image
              src="/Enterprise_Lab/bg-remove_logo.png"
              alt="Enterprise Lab Logo"
              width={250}
              height={60}
              className="object-contain"
              priority
            />

            {/* Copyright */}
            <p className="text-sm text-blue-300">
              © 2025 Enterprise Lab Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
