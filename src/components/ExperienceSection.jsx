import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const workExperience = [
    {
      id: 1,
      company: "Pwtech",
      position: "Software Developer",
      location: "Rajkot, Gujarat",
      period: "2020 - 2025",
      type: "Full-time",
      description: "Worked in Node.js, React.js, and React Native development, building scalable web and mobile applications.",
      achievements: [
        "Developed 15+ successful projects",
        "Full-stack development expertise",
        "React Native mobile applications",
        "RESTful API integration"
      ],
      technologies: ["Node.js", "React.js", "React Native", "MongoDB", "Firebase"]
    },
    {
      id: 2,
      company: "Space O Technology",
      position: "iOS Mobile Application Developer",
      location: "Ahmedabad, Gujarat",
      period: "January 2019 - May 2019",
      type: "Internship/Training",
      description: "Junior iOS development role with comprehensive training in iOS app development and Swift programming.",
      achievements: [
        "Completed iOS development training",
        "Built native iOS applications",
        "App Store publishing experience",
        "Swift programming expertise"
      ],
      technologies: ["iOS Native", "Swift", "Xcode", "App Store", "Core Data"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Engineering",
      institution: "Marwadi Engineering College",
      location: "Rajkot, Gujarat",
      period: "June 2016 - April 2020",
      type: "Undergraduate",
      description: "Comprehensive computer engineering education with focus on software development and algorithms.",
      achievements: ["Computer Engineering degree", "Software development focus", "Algorithm design"]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Christ Polytechnic Institute",
      location: "Rajkot, Gujarat",
      period: "2013 - 2016",
      type: "Diploma",
      description: "Foundational computer engineering education with practical programming skills.",
      achievements: ["Computer Engineering diploma", "Programming fundamentals", "Software development basics"]
    }
  ];

  const TimelineItem = ({ item, index, isWork }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col sm:flex-row items-start mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-start gap-4 lg:gap-8`}
    >
      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg relative z-10">
        {isWork ? <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-white" /> : <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
      </div>

      {/* Timeline Line */}
      {index < (isWork ? workExperience.length - 1 : education.length - 1) && (
        <div className="absolute top-12 sm:top-12 left-5 sm:left-6 w-0.5 h-full bg-border -z-10 hidden sm:block" />
      )}

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="flex-1 bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-center mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
              {isWork ? item.position : item.degree}
            </h3>
            <p className="text-primary font-semibold text-base sm:text-lg">
              {isWork ? item.company : item.institution}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-muted-foreground mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{item.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{item.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {item.type}
            </span>
          </div>
        </div>

        <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          {item.description}
        </p>

        {item.achievements && (
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm sm:text-base">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 md:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Work Experience
              </h3>
            </motion.div>
            <div className="relative">
              {workExperience.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} isWork={true} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
            </motion.div>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} isWork={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
