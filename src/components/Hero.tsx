
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-spacing pt-20 md:pt-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Perfect Your <span className="gradient-text">Communication</span> in Slack
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-slide-up">
            Rewordit helps you craft the perfect message in Slack. Rephrase your text, fix grammar errors, 
            and adjust your tone instantly before sending.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="button-primary text-base py-6 px-8">Add to Slack</Button>
            <Button variant="outline" className="text-base py-6 px-8">See How It Works</Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-muted rounded-xl p-2 border border-border shadow-lg">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="flex-1 text-center text-sm font-medium text-muted-foreground">Slack Message</div>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm text-left mb-4">Original message:</p>
                <p className="text-left">i think the project is good but we need to make some changes before we send it to the client</p>
              </div>
              
              <div className="flex justify-between gap-2">
                <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20">Professional</button>
                <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20">Friendly</button>
                <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20">Direct</button>
                <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20">Enthusiastic</button>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-left mb-4">Reworded (Professional tone):</p>
                <p className="text-left font-medium">I believe the project has merit, however, we should implement several refinements before presenting it to the client.</p>
              </div>
              
              <div className="flex justify-end">
                <button className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-accent">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
