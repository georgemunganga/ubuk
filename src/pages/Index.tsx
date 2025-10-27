import Navigation from "@/components/Navigation";
import HeroEnhanced from "@/components/HeroEnhanced";
import CategoryFilter from "@/components/CategoryFilter";
import ProfessionalsGrid from "@/components/ProfessionalsGrid";
import PopularTasks from "@/components/PopularTasks";
import IntroducingUbukule from "@/components/IntroducingUbukule";
import PopularProjects from "@/components/PopularProjects";
import TaskerCTA from "@/components/TaskerCTA";
import SatisfactionGuarantee from "@/components/SatisfactionGuarantee";
import ValueProposition from "@/components/ValueProposition";
import ProCTA from "@/components/ProCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Global gradient background mesh */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      
      <Navigation />
      <main>
        <HeroEnhanced />
        <CategoryFilter />
        <ProfessionalsGrid />
        <PopularTasks />
        <IntroducingUbukule />
        <PopularProjects />
        <TaskerCTA />
        <SatisfactionGuarantee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
