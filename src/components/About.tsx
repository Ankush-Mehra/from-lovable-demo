
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Paintbrush, Search } from "lucide-react";

const About = () => {
  const skills = [
    { 
      name: "Frontend Development", 
      icon: <Code className="h-6 w-6 text-blue-600" />,
      description: "Building responsive and interactive UIs with React, TypeScript, and modern CSS frameworks."
    },
    { 
      name: "UI/UX Design", 
      icon: <Paintbrush className="h-6 w-6 text-indigo-600" />,
      description: "Creating intuitive user experiences with a focus on usability and aesthetic appeal."
    },
    { 
      name: "Backend Development", 
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      description: "Developing robust server-side applications and APIs using Node.js and modern frameworks."
    },
    { 
      name: "SEO Optimization", 
      icon: <Search className="h-6 w-6 text-green-600" />,
      description: "Implementing best practices to improve search visibility and performance."
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate web developer with a keen eye for design and a commitment to creating 
            impactful digital experiences. With several years of experience in the industry, 
            I specialize in building modern, responsive web applications using the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I started my journey in web development five years ago after graduating with a 
              degree in Computer Science. Since then, I've worked with various startups and 
              established companies, helping them build engaging web applications and improve 
              their digital presence.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm constantly learning and exploring new technologies to stay at the forefront 
              of the industry. My passion lies in creating solutions that are not only 
              functional but also aesthetically pleasing and user-friendly.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education & Experience</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold">BSc in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">University Name, 2018</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Senior Web Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Company Name, 2020 - Present</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Previous Company, 2018 - 2020</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="mx-auto bg-blue-50 dark:bg-gray-800 p-3 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold mb-2">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
