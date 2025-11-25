import React, { useState } from "react";
import Container from "../assets/images/Container.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { icons, images } from "../assets";

function Projects() {
    const [activeTab, setActiveTab] = useState("ongoing");

    const projects = [
        {
            id: 1,
            title: "INDUSTRIAL COMPLEX - PUNE",
            span: "45m",
            area: "25,000 sq.m",
            tech: "Post-Tensioning",
            completion: "Q2 2025",
            status: "completed",
            image: "/project-img.jpg",
            tags: [
                { icon: `${icons.layer}`, text: "Post-Tensioning", color: "bg-orange-600" },
                { icon: `${icons.cube}`, text: "Fibre Concrete", color: "bg-gray-900" },
                { icon: `${icons.leaf}`, text: "Green Building", color: "bg-green-600" },
            ],
        },
        {
            id: 2,
            title: "INDUSTRIAL COMPLEX - PUNE",
            span: "45m",
            area: "25,000 sq.m",
            tech: "Post-Tensioning",
            completion: "Q2 2025",
            status: "ongoing",
            image: "/project-img.jpg",
            tags: [
                { icon: `${icons.layer}`, text: "Post-Tensioning", color: "bg-orange-600" },
                { icon: `${icons.cube}`, text: "Fibre Concrete", color: "bg-gray-900" },
                { icon: `${icons.leaf}`, text: "Green Building", color: "bg-green-600" },
            ],
        },
        {
            id: 3,
            title: "INDUSTRIAL COMPLEX - PUNE",
            span: "45m",
            area: "25,000 sq.m",
            tech: "Post-Tensioning",
            completion: "Q2 2025",
            status: "completed",
            image: "/project-img.jpg",
            tags: [
                { icon: `${icons.layer}`, text: "Post-Tensioning", color: "bg-orange-600" },
                { icon: `${icons.cube}`, text: "Fibre Concrete", color: "bg-gray-900" },
                { icon: `${icons.leaf}`, text: "Green Building", color: "bg-green-600" },
            ],
        },
        {
            id: 4,
            title: "INDUSTRIAL COMPLEX - PUNE",
            span: "45m",
            area: "25,000 sq.m",
            tech: "Post-Tensioning",
            completion: "Q2 2025",
            status: "ongoing",
            image: "/project-img.jpg",
            tags: [
                { icon: `${icons.layer}`, text: "Post-Tensioning", color: "bg-orange-600" },
                { icon: `${icons.cube}`, text: "Fibre Concrete", color: "bg-gray-900" },
                { icon: `${icons.leaf}`, text: "Green Building", color: "bg-green-600" },
            ],
        },
    ];

    const filteredProjects =
        projects?.filter((p) =>
            activeTab === "ongoing" ? p.status === "ongoing" : p.status === "completed"
        ) ?? [];

    return (
        <div className="w-full">
            {/* ---------------- HERO SECTION ---------------- */}
            <section
                className="w-full py-20 md:py-28 bg-gradient-to-r from-orange-600 to-gray-900 
           text-white flex items-center px-6 md:px-12 lg:px-20 relative"
            >
                <div className="max-w-[1400px] mx-auto w-full flex justify-between relative">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">OUR PROJECTS</h1>
                        <p className="mt-3 text-[16px] opacity-90">
                            Precision in Every Span. Excellence in Every Structure.
                        </p>

                        <button className="mt-6 py-3 px-8 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-100 transition">
                            Our Services <BsGraphUpArrow className="inline-block" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ---------------- TABS ---------------- */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex justify-center mt-10 mb-12 relative z-20">
                    <div className="bg-white rounded-full shadow-lg px-5 py-2 flex gap-4">
                        <button
                            onClick={() => setActiveTab("ongoing")}
                            className={`px-5 py-2 rounded-full font-medium transition ${activeTab === "ongoing"
                                ? "bg-orange-600 text-white"
                                : "text-gray-700"
                                }`}
                        >
                            Ongoing Projects
                        </button>

                        <button
                            onClick={() => setActiveTab("completed")}
                            className={`px-5 py-2 rounded-full font-medium transition ${activeTab === "completed"
                                ? "bg-orange-600 text-white"
                                : "text-gray-700"
                                }`}
                        >
                            Completed Projects
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------------- PROJECT CARDS ---------------- */}
            <div className="max-w-[1400px] mx-auto flex flex-col gap-8 px-6 md:px-12 lg:px-20 mb-10">
                {filteredProjects.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No projects found.
                    </p>
                ) : (
                    <div className="flex flex-col md:flex-row flex-wrap gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition flex flex-col w-full md:w-[calc(50%-16px)]"
                            >
                                {/* Image Section */}
                                <div className="relative group">
                                    <img
                                        src={images.BackGround}
                                        alt="Project"
                                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                                    />

                                    {/* Status Badge */}
                                    <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-lg z-10">
                                        {project.status === "ongoing" ? "Ongoing" : "Completed"}
                                    </span>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <div className="text-white flex flex-col  items-center justify-center">
                                            <img src={icons.faculty} alt="View more" className="w-8 h-8" />
                                            <p className="text-xl font-medium">Industrial Complex</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col p-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <img src={icons.Plus} alt="View more" className="w-8 h-8" />
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between mb-4">
                                        <div className="text-[14px] space-y-1 mb-4 md:mb-0">
                                            <p className="flex items-center">
                                                <img src={icons.Span} alt="span" className="mr-2 w-4 h-4" />
                                                <strong>Span:</strong> {project.span}
                                            </p>
                                            <p className="flex items-center">
                                                <img src={icons.Area} alt="area" className="mr-2 w-4 h-4" />
                                                <strong>Area:</strong> {project.area}
                                            </p>
                                            <p className="flex items-center">
                                                <img src={icons.Technology} alt="technology" className="mr-2 w-4 h-4" />
                                                <strong>Technology:</strong> {project.tech}
                                            </p>
                                            <p className="flex items-center">
                                                <img src={icons.Completion} alt="completion" className="mr-2 w-4 h-4" />
                                                <strong>Completion:</strong> {project.completion}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className={`flex items-center mr-2 mt-2 text-white text-xs py-1 px-3 rounded-full ${tag.color}`}>
                                                <img src={tag.icon} alt="tag-icon" className="w-4 h-4 mr-1" />
                                                <span className="text-white text-sm">
                                                    {tag.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
