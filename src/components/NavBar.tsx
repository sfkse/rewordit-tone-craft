
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  return (
    <header className="py-6">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-[#8B5CF6]">Rewordit</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-[#8E9196] hover:text-[#8B5CF6] transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-[#8E9196] hover:text-[#8B5CF6] transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium text-[#8E9196] hover:text-[#8B5CF6] transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-[#8E9196] hover:text-[#8B5CF6] transition-colors">Log in</a>
        </div>
        <div>
          <Button variant="default" className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-white rounded-md px-4">Add to Slack</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
