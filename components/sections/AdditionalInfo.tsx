import FadeInSection from "@/components/layout/FadeInSection";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import MotionGrid, { MotionGridItem } from "@/components/ui/MotionGrid";
import { additionalInfo } from "@/data/portfolio";

export default function AdditionalInfo() {
  return (
    <FadeInSection id="additional-info">
      <SectionTitle>Key Strengths</SectionTitle>
      <MotionGrid className="projects-grid grid-info grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:gap-8">
        {additionalInfo.map((item) => (
          <MotionGridItem key={item.title}>
            <ProjectCard
              title={
                <>
                  <i className={`fas ${item.icon} card-icon`} />
                  {item.title}
                </>
              }
            >
              <p className="card-copy">{item.content}</p>
            </ProjectCard>
          </MotionGridItem>
        ))}
      </MotionGrid>
    </FadeInSection>
  );
}
