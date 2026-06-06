import FadeInSection from "@/components/layout/FadeInSection";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import SubsectionTitle from "@/components/ui/SubsectionTitle";
import MotionGrid, { MotionGridItem } from "@/components/ui/MotionGrid";
import { certifications, education } from "@/data/portfolio";

export default function Education() {
  return (
    <FadeInSection id="education">
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <SubsectionTitle>Education</SubsectionTitle>
      <MotionGrid className="projects-grid grid-education mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {education.map((item) => (
          <MotionGridItem key={item.title}>
            <ProjectCard title={item.title} subtitle={item.subtitle}>
              <p className={item.extra ? "card-lead" : undefined}>
                <strong>{item.school}</strong>
                <br />
                <span className="muted">{item.detail}</span>
              </p>
              {item.extra ? (
                <p className="card-note">
                  <strong>Relevant Coursework:</strong> {item.extra.replace("Relevant Coursework:", "").trim()}
                </p>
              ) : null}
            </ProjectCard>
          </MotionGridItem>
        ))}
      </MotionGrid>
      <SubsectionTitle>Certifications</SubsectionTitle>
      <MotionGrid className="projects-grid grid-education grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <MotionGridItem key={cert.title}>
            <ProjectCard title={cert.title} subtitle={cert.subtitle}>
              <p className="card-copy">{cert.description}</p>
            </ProjectCard>
          </MotionGridItem>
        ))}
      </MotionGrid>
    </FadeInSection>
  );
}
