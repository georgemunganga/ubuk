import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import HeroEnhanced from "@/components/HeroEnhanced";
import IntroducingUbukule from "@/components/IntroducingUbukule";
import Navigation from "@/components/Navigation";
import PopularProjects from "@/components/PopularProjects";
import PopularTasks from "@/components/PopularTasks";
import ProCTA from "@/components/ProCTA";
import ProfessionalsGrid from "@/components/ProfessionalsGrid";
import SatisfactionGuarantee from "@/components/SatisfactionGuarantee";
import TaskerCTA from "@/components/TaskerCTA";
import ValueProposition from "@/components/ValueProposition";

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
