export const MobileMenu = ({menuOpen, setMenuOpen }) => {
    
    // Helper function to close menu (improves readability)
    const handleLinkClick = () => setMenuOpen(false);

    return(
        <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
            
            {/* 1. Transparent Backdrop (Clicking closes the menu) */}
            <div 
                className="absolute inset-0 bg-black/50" 
                onClick={handleLinkClick} 
            />

            {/* 2. The actual Sliding Menu Panel */}
            <div 
                className={`fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-black shadow-2xl transition-transform duration-300 ease-in-out transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button 
                    onClick={handleLinkClick} 
                    className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                    aria-label="Close Menu"
                >
                    &times;
                </button>

                {/* 🚨 FIX: New Link Container for vertical stacking and center alignment */}
                <div className="flex flex-col items-center pt-28 space-y-4"> 

                    {/* Home - Delay 100ms */}
                    <a 
                        href="#home"
                        onClick={handleLinkClick}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 delay-100 hover:text-blue-500
                            ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5" }
                        `}>
                        Home
                    </a>
                    
                    {/* About - Delay 200ms */}
                    <a 
                        href="#about"
                        onClick={handleLinkClick}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 delay-200 hover:text-blue-500
                            ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5" }
                        `}>
                        About
                    </a>
                    
                    {/* Project - Delay 300ms */}
                    <a 
                        href="#projects"
                        onClick={handleLinkClick}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 delay-300 hover:text-blue-500
                            ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5" }
                        `}>
                        Project
                    </a>
                    
                    {/* Contact - Delay 400ms */}
                    <a 
                        href="#contact"
                        onClick={handleLinkClick}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 delay-400 hover:text-blue-500
                            ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5" }
                        `}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};