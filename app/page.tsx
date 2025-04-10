import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Emre Mutlu</h1>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#experience">Experience</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
            <Image
              src="/emre-mutlu.jpeg?height=160&width=160"
              alt="Emre Mutlu"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Emre Mutlu</h1>
            <h2 className="text-2xl text-gray-600 mb-4">Frontend Developer</h2>
            <p className="text-gray-700 max-w-2xl">
              A front-end developer with 5+ years of experience in web and
              mobile application development. Leading front-end development
              teams in startups and executing various projects for enterprise
              customers.
            </p>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/emremutlu08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/emremutlujs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Javascript",
              "Typescript",
              "Shopify Hydrogen",
              "React",
              "NextJS",
              "Remix",
              "Vite",
              "NodeJS",
              "Chakra UI",
              "MUI",
              "GraphQL",
              "RestAPI",
              "PWA",
              "React Native",
              "TailwindCSS",
              "MongoDB",
              "Express",
            ].map((skill) => (
              <Badge
                key={skill}
                className="px-4 py-2 text-base bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <ExperienceCard
              title="Senior Frontend Developer"
              company="Metamax"
              period="2024 - 2025"
              description="Development of React and PWA apps for Fintech. We have released Android and IOS apps on app stores."
              techStack="React, PWA, Typescript, Javascript, Chakra UI, NextJS, PrimeReact, MUI"
            />

            <ExperienceCard
              title="Senior Frontend Developer"
              company="Machinarium"
              period="2023 - 2024"
              description="Led the development of React and React Native apps for e-commerce, including Shopify Extensions. Boosted user base to 400,000+ for EveShop [Web] and EveShop [Mobile] apps in Turkey."
              techStack="React, React Native, Remix, NextJS, Vite, Typescript, Javascript, GraphQL, RestAPI, GTM, Shopify, Shopify Hydrogen"
            />

            <ExperienceCard
              title="Frontend Developer"
              company="GEOSYS GIS & Consultancy Services"
              period="2021 - 2023"
              description="Successfully delivered GIS and Process Management apps (SebAtlas, TKGM), contributing to efficient processes. Enabled real estate data accessibility with the Parcel Inquiry Application, visited by 2.5 million users monthly."
              techStack="React, Typescript, Javascript, GraphQL, RestAPI, WebSockets, PrimeReact, OpenLayers, Cesium (3D), Leaflet (2D), Terriajs"
            />

            <ExperienceCard
              title="Fullstack Developer"
              company="Digigammon"
              period="2019 - 2021"
              description="Developed frontend and backend using MERN Stack, improving UX and integrating with ML. So, we achieved seamless video processing and notified the user when their backgammon transcription was ready."
              techStack="React, MongoDB, Express, NodeJS, TailwindCSS"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Anadolu University</CardTitle>
                <CardDescription>2021 - 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Web Design And Coding</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ODTÜ/METU</CardTitle>
                <CardDescription>2016 - Not Graduated</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Electrical And Electronics Engineering</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="tel:+905051160689"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Phone size={20} />
              <span>+90 505 116 0689</span>
            </a>
            <a
              href="mailto:mutluemre93@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Mail size={20} />
              <span>mutluemre93@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/emremutlujs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Linkedin size={20} />
              <span>linkedin.com/in/emremutlujs/</span>
            </a>
            <a
              href="https://github.com/emremutlu08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
            >
              <Github size={20} />
              <span>github.com/emremutlu08</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Emre Mutlu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  techStack: string;
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  techStack,
}: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-lg font-medium">
              {company}
            </CardDescription>
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {period}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div>
          <p className="text-sm font-semibold mb-2">Tech Stack:</p>
          <p className="text-sm text-gray-600">{techStack}</p>
        </div>
      </CardContent>
    </Card>
  );
}
