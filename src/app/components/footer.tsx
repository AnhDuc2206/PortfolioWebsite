import React from "react";

export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact.</h2>
          <a href="mailto:hello@johndoe.com" className="text-lg border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            leanhduc10ca2@gmail.com
          </a>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">TWITTER</a>
          <a href="#" className="hover:text-black transition-colors">GITHUB</a>
          <a href="#" className="hover:text-black transition-colors">LINKEDIN</a>
        </div>
      </div>
      
      <div className="mt-24 text-xs text-gray-400 font-medium">
        © 2026 LÊ ANH ĐỨC. BUILT WITH FIGMA MAKE.
      </div>
    </footer>
  );
};
