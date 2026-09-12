import { PersonalInfo, FocusArea, EducationItem, SkillCategory, ProjectItem, FieldObservation, TargetOrganization } from '../types';
import profilePic from '../assets/images/profile.jpg';
import watershedGisImg from '../assets/images/watershed_gis_system_1788476787030.jpg';
import wasteAuditImg from '../assets/images/waste_audit_dashboard_1788476805854.jpg';
import fieldSurveyImg from '../assets/images/field_survey_app_1788476820011.jpg';
import ecoMonitoringImg from '../assets/images/eco_monitoring_portal_1788476836209.jpg';

export const personalInfo: PersonalInfo = {
  name: "CHUOL TUT DUOP",
  field: "Natural Resources and Management",
  university: "University of Kebri Dahar",
  country: "Ethiopia",
  academicLevel: "B.Sc. Candidate (Class of 2027)",
  expectedGraduation: "July 2027",
  location: "Kebri Dahar, Somali Region, Ethiopia",
  phone: "+251 917491593",
  email: "nyuonjamestutduop@gmail.com",
  linkedin: "https://www.linkedin.com/in/chuol-tut-duop",
  facebook: "https://www.facebook.com/share/1EebBgYR8s/",
  tagline: "Exploring sustainable solutions for healthier ecosystems, resilient communities, and responsible natural resource management.",
  bioSummary: "Natural Resources and Management scholar at Kebri Dahar University with advanced academic preparation in environmental conservation, watershed dynamics, biodiversity preservation, and sustainable community stewardship. Dedicated to applying scientific field methods, environmental impact assessment fundamentals, and community-centered conservation principles across diverse ecological landscapes.",
  professionalSummary: "Detail-oriented third-year Natural Resources and Management student seeking an internship to apply academic knowledge, gain practical field experience, and support natural resource conservation and sustainable management. Skilled in environmental management, teamwork, communication, problem-solving, and basic data organization.",
  careerObjective: "To obtain an internship in Natural Resources and Management where I can gain practical field experience, strengthen my professional skills, and contribute to environmental conservation, sustainable resource management, and community development.",
  profileImage: profilePic,
  cvUrl: "https://drive.google.com/file/d/1ZUDyOdmOg6TYygCeOmeBhakb9-KdCozQ/view?usp=drivesdk",
  reference: {
    name: "Dagnachew Bezaredie",
    title: "Department Head, Natural Resources and Management",
    institution: "University of Kebri Dahar, Ethiopia",
    phone: "+251 937 612 345",
    telegram: "@Dagnachew Bezaredie"
  }
};

export const academicReference = personalInfo.reference!;

export const focusAreas: FocusArea[] = [
  {
    id: "nrm",
    number: "01",
    title: "Natural Resource Management",
    shortDescription: "Balancing ecological stability with human resource needs through structured management frameworks.",
    detailedDescription: "Integration of ecological principles, social dynamics, and governance to ensure terrestrial and aquatic natural resources are conserved and utilized sustainably across generations.",
    iconName: "Compass",
    tags: ["Resource Governance", "Ecosystem Stewardship", "Sustainable Yield"]
  },
  {
    id: "conservation",
    number: "02",
    title: "Environmental Conservation",
    shortDescription: "Protecting habitats, ecosystems, and vulnerable landscapes from degradation and unsustainable pressure.",
    detailedDescription: "Applying systematic conservation strategies to mitigate habitat fragmentation, protect key ecosystem functions, and safeguard fragile environments under anthropogenic pressures.",
    iconName: "Shield",
    tags: ["Habitat Protection", "Ecosystem Recovery", "Ecological Integrity"]
  },
  {
    id: "biodiversity",
    number: "03",
    title: "Biodiversity Conservation",
    shortDescription: "Preserving genetic, species, and habitat diversity to reinforce ecosystem resilience.",
    detailedDescription: "Studying flora and fauna distribution, endangered biological niches, and the ecological interactions that sustain biological richness in terrestrial and aquatic systems.",
    iconName: "Sprout",
    tags: ["Species Preservation", "Flora & Fauna", "Resilience"]
  },
  {
    id: "soil-water",
    number: "04",
    title: "Soil & Water Conservation",
    shortDescription: "Preventing soil erosion, maintaining soil fertility, and protecting vital water bodies.",
    detailedDescription: "Implementing physical and biological soil conservation techniques, contour management, and runoff control to safeguard agrarian catchments and prevent degradation.",
    iconName: "Layers",
    tags: ["Erosion Control", "Soil Health", "Sediment Management"]
  },
  {
    id: "climate-change",
    number: "05",
    title: "Climate Change",
    shortDescription: "Understanding climatic vulnerability, ecological adaptation, and community mitigation mechanisms.",
    detailedDescription: "Evaluating localized impacts of rainfall variability, drought stress, and temperature changes on natural resources, coupled with community resilience strategies.",
    iconName: "CloudSun",
    tags: ["Vulnerability Assessment", "Adaptation", "Climate Resilience"]
  },
  {
    id: "sustainable-utilization",
    number: "06",
    title: "Sustainable Resource Utilization",
    shortDescription: "Promoting circular resource practices that meet present community needs without depletion.",
    detailedDescription: "Optimizing the harvesting, processing, and renewal of renewable ecological resources to harmonize economic livelihoods with long-term ecological balance.",
    iconName: "Repeat",
    tags: ["Renewable Systems", "Equitable Access", "Stewardship"]
  },
  {
    id: "forest-management",
    number: "07",
    title: "Forest Resource Management",
    shortDescription: "Sustaining forest ecosystems, woodland biodiversity, canopy health, and timber/non-timber values.",
    detailedDescription: "Silvicultural principles, forest inventory methods, community forest governance, and reforestation strategies to counter deforestation and land degradation.",
    iconName: "Trees",
    tags: ["Canopy Preservation", "Afforestation", "Non-Timber Products"]
  },
  {
    id: "wildlife-management",
    number: "08",
    title: "Wildlife Management",
    shortDescription: "Monitoring wildlife populations, habitat corridors, and human-wildlife coexistence dynamics.",
    detailedDescription: "Understanding animal behavior, habitat requirements, population monitoring techniques, and community-based wildlife conservation strategies in protected landscapes.",
    iconName: "Bird",
    tags: ["Fauna Monitoring", "Migration Corridors", "Coexistence"]
  },
  {
    id: "watershed-management",
    number: "09",
    title: "Watershed Management",
    shortDescription: "Holistic planning of drainage basins to preserve hydrological cycles and downstream communities.",
    detailedDescription: "Integrated river basin management addressing headwater catchment protection, riparian zone conservation, groundwater recharge, and surface flow quality.",
    iconName: "Waves",
    tags: ["Drainage Basins", "Riparian Zones", "Hydrological Balance"]
  },
  {
    id: "eia",
    number: "10",
    title: "Environmental Impact Assessment",
    shortDescription: "Evaluating prospective environmental consequences of developmental interventions and land use.",
    detailedDescription: "Systematic screening, scoping, impact identification, and mitigation design to ensure infrastructure and developmental activities adhere to environmental standards.",
    iconName: "FileCheck",
    tags: ["Impact Identification", "Mitigation Planning", "Environmental Screening"]
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-bsc",
    degree: "Bachelor of Science in Natural Resources and Management",
    institution: "University of Kebri Dahar",
    location: "Kebri Dahar, Somali Region, Ethiopia",
    period: "2023 – Present (Expected July 2027)",
    isCurrent: true,
    expectedGraduation: "July 2027",
    academicStanding: "Fourth-Year Student · Senior B.Sc. Candidate",
    description: "Four-year specialized degree program covering ecological sciences, environmental governance, watershed systems, biodiversity conservation, and environmental impact assessment, concluding with senior research capstone investigations.",
    curriculumProgress: [
      {
        year: "Year 1",
        stage: "Foundations in Natural Sciences",
        focus: "General Biology, Inorganic & Organic Chemistry, Mathematics for Natural Sciences, Introduction to Ecology & Botany.",
        status: "Completed",
        keyModules: ["General Ecology", "Botany Fundamentals", "Environmental Chemistry", "Earth Systems"]
      },
      {
        year: "Year 2",
        stage: "Natural Resource Principles",
        focus: "Soil and Water Conservation fundamentals, Silviculture & Forest Management, Hydrology, Terrestrial Biodiversity, and Biostatistics.",
        status: "Completed",
        keyModules: ["Soil Science", "Forest Resource Systems", "Hydrology & Drainage", "Biodiversity Surveying"]
      },
      {
        year: "Year 3",
        stage: "Advanced Ecosystems & Field Assessments",
        focus: "Watershed Management, Environmental Impact Assessment (EIA), Wildlife Corridors, In-Situ Vegetation Sampling, and Community Stewardship.",
        status: "Completed",
        keyModules: ["Watershed Analysis", "EIA Methodologies", "Wildlife Ecology", "Institutional Waste Audits"]
      },
      {
        year: "Year 4 (Senior)",
        stage: "Senior Capstone & Practicum",
        focus: "Senior Research Thesis, Climate Change Adaptation Modeling, Integrated Natural Resource Governance, Policy Analysis, and Professional Field Practicum.",
        status: "Current (Senior Standing)",
        keyModules: ["Senior Research Capstone", "Climate Resilience Modeling", "Conservation Policy", "Field Practicum"]
      }
    ],
    coursework: [
      "Natural Resource Management",
      "Environmental Conservation",
      "Biodiversity Conservation",
      "Watershed Management",
      "Soil and Water Conservation",
      "Climate Change",
      "Forest Resource Management",
      "Wildlife Management",
      "Environmental Impact Assessment",
      "Sustainable Development"
    ]
  },
  {
    id: "edu-sec",
    degree: "Ethiopian Secondary School Leaving Certificate Examination",
    institution: "Gambella Secondary and Preparatory School",
    location: "Gambella, Ethiopia",
    period: "2019 – 2021",
    isCurrent: false,
    description: "Completed natural sciences preparatory curriculum, developing strong analytical foundations in biological sciences, chemistry, geography, and mathematics."
  },
  {
    id: "edu-prim",
    degree: "Primary School Leaving Certificate Examination",
    institution: "RRS Junior Primary School",
    location: "Pinyudo, Gambella, Ethiopia",
    period: "2011 – 2018",
    isCurrent: false,
    description: "Built foundational literacy, numeracy, environmental awareness, and science education in Gambella region."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Environmental & Technical Competencies",
    description: "Core academic and scientific competencies in natural systems, conservation methodology, and assessment fundamentals.",
    skills: [
      { name: "Natural Resource Assessment", description: "Evaluating resource availability, ecosystem conditions, and land use parameters." },
      { name: "Environmental Management", description: "Applying systematic frameworks for ecological protection and balanced resource allocation." },
      { name: "Biodiversity Conservation", description: "Understanding species distribution, habitat integrity, and ecological survey protocols." },
      { name: "Soil & Water Conservation", description: "Techniques in erosion mitigation, soil profile analysis, and catchment runoff control." },
      { name: "Sustainable Resource Utilization", description: "Harmonizing community resource dependency with long-term ecosystem regeneration." },
      { name: "Climate Change Management", description: "Analyzing vulnerability indicators, climate adaptation models, and local mitigation pathways." },
      { name: "EIA Fundamentals", description: "Environmental Impact Assessment principles, baseline analysis, and mitigation hierarchy." }
    ]
  },
  {
    title: "Professional & Field Capabilities",
    description: "Operational field competencies, collaborative workflows, and scientific communication rigor.",
    skills: [
      { name: "Field Data Collection", description: "Systematic recording of environmental observations, vegetation metrics, and site conditions." },
      { name: "Academic Research", description: "Literature review, structured methodology formulation, and scientific documentation." },
      { name: "Data Organization", description: "Structuring field notes, observational records, and environmental datasets for clear analysis." },
      { name: "Problem-Solving", description: "Evaluating environmental challenges through multi-variable and community-centered reasoning." },
      { name: "Teamwork & Coordination", description: "Effective collaboration in multi-disciplinary field groups and academic project teams." },
      { name: "Communication", description: "Articulating scientific and conservation concepts clearly for academic and community audiences." }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "project-01",
    slug: "integrated-watershed-governance",
    number: "01",
    title: "Integrated Watershed & Natural Resource Governance Study",
    category: "Academic Research",
    shortDescription: "Empirical investigation into watershed degradation, soil-water conservation dynamics, and community co-management models in semi-arid river basins.",
    overview: "A rigorous analytical research initiative examining anthropogenic and climatic pressures on dryland watersheds. The study models the interplay between rangeland overutilization, seasonal streamflow depletion, and downstream community livelihoods, formulating evidence-backed co-management policies.",
    objectives: [
      "Examine key drivers of natural resource degradation across semi-arid and agricultural ecosystems",
      "Analyze the social and ecological consequences of unsustainable resource extraction on community welfare",
      "Evaluate current institutional and local resource governance practices",
      "Synthesize sustainable conservation pathways aligned with community resilience"
    ],
    activities: [
      "Conducted extensive academic literature review on Ethiopian natural resource management frameworks",
      "Synthesized case studies on deforestation, overgrazing, and hydrological stress",
      "Participated in structured academic seminars discussing ecosystem vulnerability and policy options",
      "Structured conceptual models linking resource degradation with downstream ecosystem service losses"
    ],
    skillsApplied: [
      "Natural Resource Assessment",
      "Academic Research & Synthesis",
      "Environmental Policy Analysis",
      "Critical Thinking",
      "Scientific Writing"
    ],
    outcomes: [
      "Developed a structured understanding of community-ecosystem interdependence",
      "Identified practical gaps between conservation theory and on-the-ground resource stewardship",
      "Strengthened capability in synthesizing environmental data into coherent recommendations"
    ],
    environmentalThemes: [
      "Natural Resource Governance",
      "Ecosystem Services",
      "Community Conservation",
      "Ecological Resilience"
    ],
    highlights: [
      "Watershed erosion vulnerability mapping",
      "Community co-management frameworks",
      "Dryland ecosystem valuation",
      "Regional governance policy synthesis"
    ],
    image: watershedGisImg,
    imageAlt: "Professional desktop GIS software interface for environmental watershed management and hydrological modeling",
    systemMeta: {
      systemName: "ArcGIS Pro / QGIS Hydrological Analyst Suite",
      version: "v3.34-LT",
      resolution: "3840 x 2160 UHD",
      stationCoordinates: "06°44'28\" N, 44°16'10\" E (Elevation 510m)",
      activeLayers: ["Digital Elevation Model (DEM)", "Catchment Boundaries", "Flow Accumulation Raster", "NDVI Health Index"],
      telemetrySnippet: "Basin Area: 1,420 km² | Mean Slope: 4.8° | Peak Runoff Coefficient: 0.38 | Soil Infiltration: 14.2 mm/hr"
    }
  },
  {
    id: "project-02",
    slug: "solid-waste-stream-audit",
    number: "02",
    title: "Institutional Solid Waste Stream Audit & Circular Mitigation",
    category: "Academic Project",
    shortDescription: "Systematic multi-zone waste characterization audit, hazard assessment, and source-separation strategy for institutional facilities.",
    overview: "An applied investigation into waste streams, disposal habits, and environmental pollution risks within an institutional environment, focusing on waste reduction, segregation, and responsible disposal techniques.",
    objectives: [
      "Identify major points of waste generation and predominant waste categories in the study area",
      "Assess environmental and health risks associated with inadequate disposal and burning",
      "Evaluate community awareness and compliance with proper waste handling practices",
      "Formulate practical, low-cost institutional waste separation and reduction strategies"
    ],
    activities: [
      "Conducted on-site visual audits of waste disposal bins, collection points, and open dumpsites",
      "Categorized primary waste streams into organic matter, plastics, paper, and non-biodegradable debris",
      "Assessed potential impacts on localized soil contamination and drainage obstruction",
      "Drafted recommendations for designated color-coded separation bins and awareness campaigns"
    ],
    skillsApplied: [
      "Environmental Auditing",
      "Field Observation",
      "Impact Identification",
      "Data Categorization",
      "Institutional Recommendations"
    ],
    outcomes: [
      "Mapped critical waste hotspot zones within the institutional boundary",
      "Demonstrated that lack of segregation at source is the primary driver of disposal inefficiencies",
      "Proposed actionable, low-cost waste minimization guidelines for institutional facilities"
    ],
    environmentalThemes: [
      "Waste Minimization",
      "Institutional Ecology",
      "Pollution Prevention",
      "Public Health & Environment"
    ],
    highlights: [
      "Multi-zone waste characterization audit",
      "Soil leaching & drainage risk appraisal",
      "Source-separation implementation blueprint",
      "Actionable institutional waste guidelines"
    ],
    image: wasteAuditImg,
    imageAlt: "Environmental analytics dashboard web application screenshot for institutional solid waste tracking and circular recycling audit",
    systemMeta: {
      systemName: "EcoAudit Enterprise Material Flow & GIS Facility Tracker",
      version: "v4.2-Academic",
      resolution: "2560 x 1440 QHD",
      stationCoordinates: "KDU Main Campus Facility Grid, Sector B",
      activeLayers: ["Generation Hotspot Density", "Disposal Zone Geofence", "Soil Leaching Hazard Map", "Stream Flow Vectors"],
      telemetrySnippet: "Audited Mass: 3.42 metric tons/wk | Organic Fraction: 54.2% | Plastic Debris: 26.8% | Diversion Target: 65%"
    }
  },
  {
    id: "project-03",
    slug: "ecological-sampling",
    number: "03",
    title: "In-Situ Ecological Sampling & Vegetation Transect Analysis",
    category: "Academic Fieldwork",
    shortDescription: "Standardized line-transect and quadrat floristic survey quantifying canopy density, species diversity, and soil cover stability.",
    overview: "Direct academic fieldwork applying standardized ecological sampling methodologies to observe vegetative composition, estimate canopy cover, record dominant species, and evaluate soil-plant associations in the field.",
    objectives: [
      "Apply standard ecological quadrat and transect sampling methods in designated field sites",
      "Identify and record dominant native and invasive vegetative species",
      "Observe soil moisture, ground cover percentage, and visual signs of erosion or grazing pressure",
      "Strengthen practical field data collection, sample preservation, and notation discipline"
    ],
    activities: [
      "Laid out observational sampling plots and measured species abundance and canopy distribution",
      "Recorded environmental variables including slope position, soil texture indicators, and human disturbances",
      "Collaborated with academic peers in systematically documenting specimens and field measurements",
      "Compiled raw field notes into structured tabular records for academic review"
    ],
    skillsApplied: [
      "Vegetation Sampling",
      "Field Data Collection",
      "Environmental Observation",
      "Sample Notation & Logging",
      "Team Fieldwork Coordination"
    ],
    outcomes: [
      "Mastered practical handling of field measuring tapes, compass orientation, and quadrat frames",
      "Gained hands-on experience correlating vegetation cover with localized soil stability",
      "Cultivated high discipline in rigorous, error-free environmental observational logging"
    ],
    environmentalThemes: [
      "Vegetation Sampling",
      "Field Ecology",
      "Biodiversity Surveying",
      "Soil-Plant Interactions"
    ],
    highlights: [
      "Standardized quadrat & line-transect protocols",
      "Native vs. invasive floristic inventory",
      "Vegetation cover vs. soil erosion correlation",
      "Empirical field logging & specimen notation"
    ],
    image: fieldSurveyImg,
    imageAlt: "Field ecology mobile tablet software application screenshot for in-situ vegetation sampling and biodiversity transect survey",
    systemMeta: {
      systemName: "FieldBio GPS Ecological Transect & Specimen Field Suite",
      version: "v2.8-MobilePro",
      resolution: "2048 x 1536 Tablet",
      stationCoordinates: "Transect Point T-08: 06°43'51\" N, 44°15'32\" E",
      activeLayers: ["5m x 5m Quadrat Grid", "Line-Intercept Intersect", "Flora Canopy Mask", "Soil Moisture Contour"],
      telemetrySnippet: "Canopy Density: 34.6% | Shannon-Wiener Diversity H': 2.14 | Soil Moisture: 18.2% | Specimen Logs: 48 cataloged"
    }
  },
  {
    id: "project-04",
    slug: "earth-observation-drought",
    number: "04",
    title: "Regional Earth Observation & Satellite Drought Telemetry Portal",
    category: "Earth Observation",
    shortDescription: "Multi-spectral remote sensing analysis tracking vegetation health anomalies (NDVI), surface temperature, and drought severity in the Somali Region.",
    overview: "A macro-scale environmental monitoring framework combining Sentinel-2 and Landsat imagery to monitor arid rangeland stress, seasonal vegetative decline, and water body shrinkage across East Africa.",
    objectives: [
      "Monitor multi-temporal vegetation indices (NDVI, NDWI) across pastoral rangelands",
      "Correlate rainfall deficit indices with surface soil desiccation and vegetative decline",
      "Identify vulnerable ecological corridors subjected to prolonged dryland degradation",
      "Support evidence-based climate adaptation decision-making for regional stakeholders"
    ],
    activities: [
      "Processed multi-spectral satellite reflectance bands to compute normalized difference indices",
      "Calibrated ground weather station telemetry with thermal infrared surface temperature readings",
      "Mapped historical dry-season pasture shrinkage trends over multi-year periods",
      "Formulated early-warning drought advisory summaries for pastoral resilience"
    ],
    skillsApplied: [
      "Satellite Remote Sensing",
      "Geospatial Data Processing",
      "Climate Telemetry Analysis",
      "Drought Index Modeling",
      "Spatial Cartography"
    ],
    outcomes: [
      "Generated regional drought stress heatmaps pinpointing high-vulnerability rangelands",
      "Synthesized satellite observations into actionable early-warning resilience metrics",
      "Demonstrated efficacy of satellite remote sensing in sparse-data dryland monitoring"
    ],
    environmentalThemes: [
      "Satellite Earth Observation",
      "Drought Telemetry",
      "Climate Adaptation",
      "Rangeland Monitoring"
    ],
    highlights: [
      "Multi-spectral Sentinel-2 NDVI processing",
      "SPEI drought severity correlation",
      "Dryland pasture desiccation mapping",
      "Automated sensor telemetry logging"
    ],
    image: ecoMonitoringImg,
    imageAlt: "Real-time satellite Earth observation and environmental telemetry portal desktop software screenshot",
    systemMeta: {
      systemName: "Copernicus & Landsat Earth Observation Telemetry Station",
      version: "v5.1-Enterprise",
      resolution: "3840 x 2160 UHD",
      stationCoordinates: "Horn of Africa Basin Multi-Station Cluster 04",
      activeLayers: ["MODIS/Sentinel-2 NDVI", "Standardized Precipitation Evapotranspiration (SPEI)", "Soil Water Index", "Thermal Infrared LST"],
      telemetrySnippet: "NDVI Anomaly: -0.12 (Moderate Stress) | SPEI 3-Month: -1.18 | Surface Temp: 32.4°C | Sensor Telemetry: Active"
    }
  }
];

export const fieldObservations: FieldObservation[] = [
  {
    id: "field-01",
    title: "Vegetation & Canopy Assessment",
    category: "Field Ecology",
    activity: "Quadrat Sampling & Canopy Coverage",
    ecosystem: "Savanna & Semi-Arid Woodland",
    methodology: "Systematic transect lines with 5m x 5m plot grids to estimate woody vs herbaceous ratio.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Forest canopy and vegetation density observation",
    description: "Documenting spatial distribution of woody vegetation, evaluating canopy density, and recording baseline vegetation health under seasonal climate variations.",
    coordinates: "06°44' N, 44°16' E"
  },
  {
    id: "field-02",
    title: "Riparian & Watershed Monitoring",
    category: "Hydrology",
    activity: "Surface Runoff & Bank Stability Observation",
    ecosystem: "Riverine Basin & Seasonal Drainage",
    methodology: "Visual riparian buffer inspection, riverbank erosion scoring, and silt accumulation observation.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    imageAlt: "River basin and watershed landscape observation",
    description: "Evaluating natural stream corridors, riparian buffer vegetation, and catchment stability essential for water quality maintenance.",
    coordinates: "07°12' N, 43°55' E"
  },
  {
    id: "field-03",
    title: "Soil Profile & Erosion Inspection",
    category: "Soil Conservation",
    activity: "Gully & Sheet Erosion Appraisal",
    ecosystem: "Dryland Grazing & Arable Slopes",
    methodology: "Visual soil assessment of topsoil thickness, crusting, and micro-topography gully development.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Topographic landscape and soil conservation study",
    description: "Identifying erosion vulnerability along gentle gradients, analyzing sedimentation risks, and exploring physical contour barriers.",
    coordinates: "06°50' N, 44°10' E"
  },
  {
    id: "field-04",
    title: "Wildlife Habitat & Movement Observation",
    category: "Wildlife Ecology",
    activity: "Corridor & Habitat Fragmentation Note",
    ecosystem: "Acacia-Commiphora Bushland",
    methodology: "Recording habitat indicators, water hole proximity, and anthropogenic barriers.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    imageAlt: "East African savanna habitat and wildlife corridor",
    description: "Observing vital wildlife habitat connections and resource distribution points in pastoral and transition zones.",
    coordinates: "06°38' N, 44°22' E"
  }
];

export const targetOrganizations: TargetOrganization[] = [
  {
    type: "Environmental & Conservation NGOs",
    roleType: "Field Assistant / Conservation Intern",
    focus: "Biodiversity preservation, habitat restoration, community engagement"
  },
  {
    type: "Conservation & Research Institutions",
    roleType: "Research Assistant / Data Collector",
    focus: "Ecological surveys, environmental sampling, academic fieldwork"
  },
  {
    type: "Natural Resource & Forestry Agencies",
    roleType: "Resource Management Intern",
    focus: "Watershed protection, forest inventories, sustainable harvesting"
  },
  {
    type: "Sustainability & Environmental Consultancies",
    roleType: "Junior Environmental Analyst Intern",
    focus: "EIA baseline studies, waste audits, environmental compliance"
  },
  {
    type: "Community-Based Environmental Programs",
    roleType: "Community Field Facilitator",
    focus: "Soil and water conservation, sustainable livelihood integration"
  },
  {
    type: "Climate Adaptation Initiatives",
    roleType: "Project Support Assistant",
    focus: "Drought resilience, ecosystem adaptation, natural infrastructure"
  }
];
