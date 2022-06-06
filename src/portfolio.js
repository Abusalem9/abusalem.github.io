/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abusalem Mangalwedhe",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abusalem Mangalwedhe's Porfolio",
    type: "website",
    url: "http://Abusalemhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Abusalem Mangalwedhe",
  logo_name: "Abusalem",
  nickname: "Ershad",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bPwapNH-pLWDs_oSJRuNBY-3Q1EQ1SUZ/view?usp=sharing",
  portfolio_repository: "https://github.com/Abusalem9",
  githubProfile: "https://github.com/Abusalem9",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/Abusalem9",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abusalem-mangalwedhe-628901180/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abusalemmangalwedhe@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abusalem.ershad/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Creating simple and user-friendly Rest APIs",
        "⚡ Developing highly scalable Rest Apis",
        "⚡ Experience of working with Spring projects",
        
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "logos:hibernate",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front-end Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS, Javascript, React",
        "⚡ Creating application backend in Spring",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fontisto:mysql",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/abusalemmangalw1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/abusalem",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/abusalemmangalwedhe",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@abusalemmangalwedhe",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "arcticons:leetcode",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://leetcode.com/Abusalem/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bharati Vidyapeeth's Institute of Technology & Polytechnic Palus.",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "bharati.png",
      alt_name: "Bharati Vidyapeeth",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
        "⚡ I have received Certificate from Bharati Vidyapeeth for State Level project competation 1st Rank & best performance.",
      ],
      website_link: "http://iotpalus.bharatividyapeeth.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HakerRank Problem Solving Basic",
      subtitle: "- Skill Badges",
      logo_path: "HackerRank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/84a17fbc4006",
      alt_name: "hakerrank",
      color_code: "#8C151599",
    },
    {
      title: "HakerRank Problem Solving Intermediate",
      subtitle: "- Skill Badges",
      logo_path: "HackerRank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/043c9395b106",
      alt_name: "hakerrank",
      color_code: "#00000099",
    },
    {
      title: "MVC Framework in ASP.NET",
      subtitle: "- Vishwa Technology Training",
      logo_path: "vishwa.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Backend and Frontend projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Thank You!",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myimage.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Core Java, SpringBoot , Spring, Hibernate, JDBC.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@abusalemmangalwedhe",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "A/P Billur Tal-Jath Dist-Sangli, Maharashtra Pincode: 416404",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/UVZ1WaKWYtnni4do7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8668992680",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
