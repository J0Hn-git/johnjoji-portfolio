import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return <section id="projects" 
                    className="min-h-screen flex items-center justify-center py-20"
            >   
                <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
                            <h3 className="text-xl font-bold mb-2">CommerceX Analytics</h3>
                            <p className="texr-gray-400 mb-4">Scalable e-commerce website using Django 
                                and various scaling algorithms
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Django", "JavaScript", "Docker", "Nameko","HTML"].map((tech, key) => (
                                    <span
                                        key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover: shadow-[0_2px_8px_rgba(59,130, 2246, 0.1)] transition-all 
                                ">
                                    {tech}
                                    </span>                            
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View Project→{" "}
                                </a>
                            </div>
                        </div>

                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
                            <h3 className="text-xl font-bold mb-2">ShareVault</h3>
                            <p className="texr-gray-400 mb-4">cloud-based file transfer system designed for high-volume, peer-to-peer sharing with authenticated access.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "React", "TailwindCSS", "Springboot","clerk"].map((tech, key) => (
                                    <span
                                        key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover: shadow-[0_2px_8px_rgba(59,130, 2246, 0.1)] transition-all 
                                ">
                                    {tech}
                                    </span>                            
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View Project→{" "}
                                </a>
                            </div>
                        </div>

                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
                            <h3 className="text-xl font-bold mb-2">Mentora</h3>
                            <p className="texr-gray-400 mb-4">AI-powered educational platform utilizing the Gemini Prompt and LLMs to generate custom question papers with dynamic adjustments.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Flutter", "Dart", "LLM", "Gemini","FastApi"].map((tech, key) => (
                                    <span
                                        key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover: shadow-[0_2px_8px_rgba(59,130, 2246, 0.1)] transition-all 
                                ">
                                    {tech}
                                    </span>                            
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View Project→{" "}
                                </a>
                            </div>
                        </div>

                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
                            <h3 className="text-xl font-bold mb-2">VividRestore</h3>
                            <p className="texr-gray-400 mb-4">Developed a high-fidelity image restoration system utilizing deep learning to effectively reconstruct degraded images.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Pytorch", "OpenCV", "FastApi","Pillow"].map((tech, key) => (
                                    <span
                                        key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover: shadow-[0_2px_8px_rgba(59,130, 2246, 0.1)] transition-all 
                                ">
                                    {tech}
                                    </span>                            
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View Project→{" "}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                </RevealOnScroll>
    </section>
}