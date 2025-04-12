
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-20 bg-gradient-to-b from-[#f1f0fb] to-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Small feature pill */}
          <div className="inline-flex items-center rounded-full bg-[#E5DEFF] px-4 py-1 mb-8 gap-1">
            <span className="text-sm font-medium text-[#6E59A5]">Intro to perfect messaging</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1 text-[#6E59A5]" />
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1F2C] mb-6">
            Magically simplify
            <br />
            communication in <span className="text-[#8B5CF6]">Slack</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-[#8E9196] mb-6 max-w-3xl">
            Automated rephrasing, effortless grammar fixes, real-time tone adjustments.
            <br />
            Set up in 2 mins. Back to messaging by 6:38pm.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-white px-8 py-6 text-base rounded-md">
              Add to Slack
            </Button>
            <Button variant="outline" className="text-[#8B5CF6] border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/5 px-8 py-6 text-base rounded-md">
              <span>Pricing</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Small note */}
          <p className="text-sm text-[#8E9196] mt-8">
            Currently optimized for team communication on Slack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
