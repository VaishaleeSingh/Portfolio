import FadeInSection from "@/components/layout/FadeInSection";
import BulletList from "@/components/ui/BulletList";
import SectionTitle from "@/components/ui/SectionTitle";
import MotionGrid, { MotionGridItem } from "@/components/ui/MotionGrid";
import { experiences } from "@/data/portfolio";

type BadgeType = "full-time" | "training" | "intern";

function getRoleBadge(role: string, company: string): { label: string; type: BadgeType } {
  if (role.toLowerCase().includes("apprentice")) return { label: "Full-Time", type: "full-time" };
  if (role.toLowerCase().includes("trainee") || role.toLowerCase().includes("thinkschool")) return { label: "Training Program", type: "training" };
  return { label: "Internship", type: "intern" };
}

const badgeStyles: Record<BadgeType, string> = {
  "full-time": "exp-badge exp-badge--fulltime",
  "training":  "exp-badge exp-badge--training",
  "intern":    "exp-badge exp-badge--intern",
};

export default function Experience() {
  return (
    <FadeInSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <MotionGrid className="projects-grid grid-single grid grid-cols-1 gap-6 md:gap-8">
        {experiences.map((exp) => {
          const badge = getRoleBadge(exp.role, exp.company);
          const isThinkbridge = exp.company === "thinkbridge";
          return (
            <MotionGridItem key={`${exp.company}-${exp.period}`}>
              <div className={`project-card exp-card${isThinkbridge ? " exp-card--featured" : ""}`}>
                <div className="project-header exp-header">
                  <div className="exp-header-top">
                    <div className="exp-title-group">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className={badgeStyles[badge.type]}>{badge.label}</span>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-company">
                        {isThinkbridge && <i className="fas fa-building exp-company-icon" />}
                        {exp.company}
                      </span>
                      <span className="exp-period">
                        <i className="fas fa-calendar-alt" /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="project-body exp-body">
                  <BulletList
                    items={exp.bullets}
                    className="content-list experience-list"
                  />
                </div>
              </div>
            </MotionGridItem>
          );
        })}
      </MotionGrid>
    </FadeInSection>
  );
}
