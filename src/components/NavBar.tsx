
import React from 'react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="py-6 border-b border-border/40">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl gradient-text">Rewordit</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
        </div>
        <div>
          <Button variant="default" className="bg-primary hover:bg-accent text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
