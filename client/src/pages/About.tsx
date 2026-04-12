import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { GlobalStats } from '../components/about/GlobalStats';
import { MissionVision } from '../components/about/MissionVision';
import { ValueCards } from '../components/about/ValueCards';
import { LeadershipGrid } from '../components/about/LeadershipGrid';
import { JourneyTimeline } from '../components/about/JourneyTimeline';
import { AboutCTA } from '../components/about/AboutCTA';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div>
      <SEO 
        title="Our Mission & Leadership"
        description="Learn about TechnoSpyre's journey, mission, and the leadership team driving innovation in AI and cloud technology."
      />
      <AboutHero />
      <GlobalStats />
      <MissionVision />
      <ValueCards />
      <LeadershipGrid />
      <JourneyTimeline />
      <AboutCTA />
    </div>
  );
};

export default About;
