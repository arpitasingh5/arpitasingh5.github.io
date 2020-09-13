import {
  AiFillSafetyCertificate,
  FaDev,
  FaInfoCircle,
  FaPaintBrush,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  MdPerson,
  MdSchool,
  MdWork,
  IoIosJournal,
  FaDribbble
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "publications", title: "Publications", icon: IoIosJournal },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "skills", title: "Skills", icon: GoTools },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "design", title: "Design", icon: FaDribbble },
  { id: "art", title: "Art", icon: FaPaintBrush },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "footer", title: "Footer", icon: FaInfoCircle },
];

export default sections;
