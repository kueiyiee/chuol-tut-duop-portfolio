export type ThemeMode = 'light' | 'dark';

export interface AcademicReference {
  name: string;
  title: string;
  institution: string;
  phone: string;
  telegram?: string;
}

export interface PersonalInfo {
  name: string;
  field: string;
  university: string;
  country: string;
  academicLevel: string;
  expectedGraduation: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  facebook: string;
  tagline: string;
  bioSummary: string;
  careerObjective: string;
  professionalSummary?: string;
  profileImage?: string;
  cvUrl?: string;
  reference?: AcademicReference;
}

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  tags: string[];
}

export interface AcademicYearBreakdown {
  year: string;
  stage: string;
  focus: string;
  status: 'Completed' | 'Current (Senior Standing)';
  keyModules: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  expectedGraduation?: string;
  academicStanding?: string;
  description: string;
  coursework?: string[];
  curriculumProgress?: AcademicYearBreakdown[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
  }[];
}

export interface SystemMeta {
  systemName: string;
  version: string;
  resolution: string;
  stationCoordinates: string;
  activeLayers: string[];
  telemetrySnippet: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: 'Academic Research' | 'Academic Project' | 'Academic Fieldwork' | 'Earth Observation';
  shortDescription: string;
  overview: string;
  objectives: string[];
  activities: string[];
  skillsApplied: string[];
  outcomes: string[];
  environmentalThemes: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  systemMeta?: SystemMeta;
}

export interface FieldObservation {
  id: string;
  title: string;
  category: string;
  activity: string;
  ecosystem: string;
  methodology: string;
  image: string;
  imageAlt: string;
  description: string;
  coordinates?: string;
}

export interface TargetOrganization {
  type: string;
  roleType: string;
  focus: string;
}
