// EDIT THIS FILE WHENEVER YOU WANT TO UPDATE YOUR WEBSITE
// You can change your name, skills, projects, experience, links, and contact info here.

const portfolioData = {
  name: "Sied Anthony Mansojer",
  title: "Mechanical Engineering Student",
  tagline: "Manufacturing • CAD • Robotics • Programming",
  location: "Garrett, Indiana",
  email: "anthonymansojer@gmail.com",
  phone: "(260) 226-2282",
  linkedin: "www.linkedin.com/in/sied-anthony-mansojer-20bb57418",
  resumeLink: "resume.pdf",

  about: `I am a Mechanical Engineering student at Grace College & Seminary with hands-on experience in manufacturing, equipment maintenance, CAD design, machining, robotics, and programming. I enjoy solving real problems, building functional projects, and improving systems through practical engineering.`,

  education: [
    {
      school: "Grace College & Seminary",
      degree: "Bachelor of Science in Mechanical Engineering",
      dates: "Expected Graduation: July 2028",
      details: "GPA: 3.55 / 4.00"
    }
  ],

  skills: {
    CAD: ["SolidWorks", "Fusion 360", "GD & T", "Sheet Metal", "Assemblies", "Drawings"],
    Programming: ["MATLAB", "Python", "RStudio"],
    Manufacturing: ["CNC", "Manual Mill", "Engine Lathe", "3D Printing", "GOM Scanner", "Calipers", "Micrometers"],
    Software: ["Microsoft Excel", "LoggerPro"]
  },

  experience: [
    {
      role: "Manufacturing Engineering Intern",
      company: "Harry’s Popcorn",
      dates: "May 2026 – Present",
      bullets: [
        "Diagnosed, repaired, and maintained manufacturing equipment to minimize production downtime.",
        "Performed preventive maintenance and machine adjustments to improve manufacturing reliability.",
        "Supported production of 100+ batches per week while maintaining quality and efficiency.",
        "Assisted with inventory control, equipment setup, and daily manufacturing operations.",
        "Collaborated with operators to troubleshoot equipment and improve production workflow."
      ]
    },
    {
      role: "Operations Manager",
      company: "Timmy’s Pizza & BBQ",
      dates: "August 2022 – August 2024",
      bullets: [
        "Led and trained a team of employees in a fast-paced production environment.",
        "Managed scheduling, inventory, and daily operations.",
        "Diagnosed equipment failures and coordinated repairs.",
        "Maintained quality, safety, and operational standards."
      ]
    }
  ],

  projects: [
    {
      title: "Baja SAE",
      category: "Vehicle Design",
      description: "Designed, manufactured, assembled, and tested an off-road competition vehicle as part of a multidisciplinary engineering team.",
      tools: ["SolidWorks", "Manufacturing", "Testing"],
      image: "Baja.jpg"
    },
    {
      title: "Autonomous Drawing Robot",
      category: "Robotics",
      description: "Designed and programmed a robot capable of recognizing and reproducing images using MATLAB-controlled motion.",
      tools: ["MATLAB", "Robotics", "Mechanical Design"],
      image: "images/DR.jpg"
    },
    {
      title: "BattleBot",
      category: "Robotics",
      description: "Designed and fabricated a combat robot using CAD, MATLAB, and additive manufacturing techniques.",
      tools: ["CAD", "3D Printing", "Testing"],
      image: "images/Bot.jpg"
    },
    {
      title: "CO₂ Powered Race Car",
      category: "Design Project",
      description: "Designed and manufactured a lightweight aerodynamic race car that achieved the fastest competition time.",
      tools: ["Aerodynamics", "Manufacturing", "Testing"],
      image: "images/Car.jpg"
    },
    {
      title: "Precision Machining",
      category: "Manufacturing",
      description: "Manufactured precision components using manual mills and engine lathes while verifying dimensions with precision measuring tools.",
      tools: ["Mill", "Lathe", "Calipers", "Micrometers"],
      image: "images/PR.jpg"
    },
    {
      title: "Faraday Flashlight",
      category: "Electromechanical",
      description: "Designed and assembled a flashlight utilizing electromagnetic induction principles.",
      tools: ["Electromagnetism", "Prototyping", "Testing"],
      image: "images/FL.jpg"
    }
  ]
};
