
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Small feature pill */}
          <div className="inline-flex items-center rounded-full bg-muted px-4 py-1 mb-8 gap-1">
            <span className="text-sm font-medium">Intro to perfect messaging</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Magically simplify
            <br />
            communication in Slack
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Automated rephrasing, effortless grammar fixes, real-time tone adjustments.
            <br />
            Set up in 2 mins. Back to messaging by 6:38pm.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-md">
              Add to Slack
            </Button>
            <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary/5 px-8 py-6 text-base rounded-md">
              <span>Pricing</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Small note */}
          <p className="text-sm text-gray-500 mt-8">
            Currently optimized for team communication on Slack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
