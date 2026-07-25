import { Project, SkillCategory, Certification, ExperienceItem, EducationItem, AchievementStat, ContactInfo } from '../types';

export const PERSONAL_INFO = {
  name: "MUHAMMAD SALAR SHAH",
  headline: "Data Analyst | Business Intelligence Analyst | FinTech Analyst",
  roles: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "FinTech Analyst"
  ],
  location: "Attock City, Punjab, Pakistan",
  summary: "Detail-oriented Data Analyst and Financial Technology undergraduate with a strong foundation in data analytics, business intelligence, spreadsheet automation, SQL, Python, and dashboard development. Passionate about transforming raw data into meaningful business insights through data cleaning, exploratory data analysis, automation, and visualization. Continuously learning modern analytics tools while building practical projects that solve real-world business problems.",
  about: {
    title: "Passionate About Data Analytics & Financial Technology",
    paragraphs: [
      "I am a Financial Technology undergraduate passionate about Data Analytics, Business Intelligence, and solving business problems with data.",
      "I enjoy cleaning and transforming raw datasets, building interactive dashboards, automating spreadsheet workflows, and creating data-driven solutions using Python, PostgreSQL, Advanced Excel, and Power BI.",
      "I focus on delivering accurate, well-structured, and insightful data solutions that support informed decision-making while continually exploring modern analytical tools and industry best practices."
    ]
  }
};

export const CORE_COMPETENCIES: string[] = [
  "Data Analytics",
  "Business Intelligence",
  "Financial Analytics",
  "Dashboard Development",
  "Data Cleaning",
  "Data Wrangling",
  "Exploratory Data Analysis",
  "Data Visualization",
  "Spreadsheet Automation",
  "SQL",
  "Python Automation",
  "Process Optimization"
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Data Analytics",
    icon: "FileSpreadsheet",
    description: "Spreadsheet modeling, ETL processes, and analytical validation.",
    skills: [
      { name: "Advanced Excel",  description: "Nested formulas, Power Query, Pivot Tables, Data Validation", badges: [
    "Spreadsheet Automation",
    "Financial Modeling",
    "Excel Analytics"
  ]},
      { name: "Power Query", description: "Data extraction, cleaning, transformation and ETL workflows.",   badges: [
    "ETL",
    "Data Transformation",
    "Automation"
  ]},
      { name: "Power Pivot", description:  "Data modeling and relationship management for business reporting.",   badges: [
    "Data Modeling",
    "Business Intelligence",
    "Relationships"
  ] },
      { name: "Data Cleaning", description: "Preparing datasets by removing errors, duplicates and inconsistencies.",   badges: [
    "Data Quality",
    "Preprocessing",
    "Validation"
  ] },
      { name: "Data Transformation", description:  "Converting raw data into structured formats for analysis.", badges: [
    "Data Quality",
    "Preprocessing",
    "Validation"
  ] },
      { name: "Data Wrangling", description: "Organizing and reshaping datasets for meaningful analysis.",  badges: [
    "Data Preparation",
    "Cleaning",
    "Structuring"
  ] },
      { name: "Exploratory Data Analysis", description: "Analyzing datasets to identify trends, patterns and insights.",  badges: [
    "EDA",
    "Visualization",
    "Insights"
  ] },
      { name: "Statistical Analysis", description: "Using descriptive and inferential statistics to support data-driven decisions.", badges: [
    "Statistics",
    "Regression",
    "Data Insights"
  ] }
    ]
  },
  {
  category: "Business Intelligence",
  icon: "LayoutDashboard",
  description: "Building interactive dashboards and visualizing business data using Power BI and Excel.",
  skills: [
    {
      name: "Power BI",
      description: "Creating interactive dashboards and visualizing business data.",
      badges: [
        "Dashboard Development",
        "Data Visualization",
        "Business Intelligence"
      ]
    },
    {
      name: "Dashboard Development",
      description: "Designing dashboards to present business insights using charts and KPIs.",
      badges: [
        "Interactive Reports",
        "Business Insights",
        "KPI Dashboards"
      ]
    },
    {
      name: "KPI Reporting",
      description: "Tracking key business metrics through reports and dashboard visualizations.",
      badges: [
        "Performance Metrics",
        "Business Reporting",
        "Analytics"
      ]
    },
    {
      name: "Interactive Dashboards",
      description: "Building user-friendly dashboards with filters and interactive visual elements.",
      badges: [
        "Power BI",
        "Data Exploration",
        "User Interaction"
      ]
    },
    {
      name: "Data Visualization",
      description: "Presenting data through charts and visual reports to communicate insights effectively.",
      badges: [
        "Charts",
        "Visual Analytics",
        "Storytelling"
      ]
    }
  ]
},
  {
  category: "Programming",
  icon: "Code2",
  description: "Using Python and related libraries for data analysis, automation, and spreadsheet processing.",
  skills: [
    {
      name: "Python",
      description: "Writing Python scripts for data analysis, automation, and spreadsheet processing.",
      badges: [
        "Automation",
        "Data Analysis",
        "Scripting"
      ]
    },
    {
      name: "Pandas",
      description: "Cleaning, transforming, and analyzing structured datasets using DataFrames.",
      badges: [
        "DataFrames",
        "Data Cleaning",
        "Data Analysis"
      ]
    },
    {
      name: "NumPy",
      description: "Performing numerical operations and array-based data processing.",
      badges: [
        "Numerical Computing",
        "Arrays",
        "Data Processing"
      ]
    },
    {
      name: "OpenPyXL",
      description: "Automating Excel file creation, formatting, and data updates programmatically.",
      badges: [
        "Excel Automation",
        "Spreadsheet Processing",
        "Python Integration"
      ]
    },
    {
      name: "Matplotlib",
      description: "Creating charts and visualizations for exploratory data analysis and reporting.",
      badges: [
        "Data Visualization",
        "Charts",
        "Reporting"
      ]
    },
    {
      name: "C++",
      description: "Understanding programming fundamentals, problem solving, and basic algorithm development.",
      badges: [
        "Programming Fundamentals",
        "Problem Solving",
        "Algorithms"
      ]
    },
    {
      name: "HTML",
      description: "Creating the structure and layout of web pages using semantic HTML.",
      badges: [
        "Web Structure",
        "Semantic HTML",
        "Frontend Basics"
      ]
    },
    {
      name: "CSS",
      description: "Styling web pages with layouts, spacing, colors, and responsive design techniques.",
      badges: [
        "Styling",
        "Responsive Design",
        "Frontend Basics"
      ]
    }
  ]
},
  {
  category: "Databases",
  icon: "Database",
  description: "Working with relational databases to store, retrieve, and manage data using SQL and PostgreSQL.",
  skills: [
    {
      name: "PostgreSQL",
      description: "Managing relational databases and performing data queries for analysis.",
      badges: [
        "Relational Database",
        "Data Querying",
        "PostgreSQL"
      ]
    },
    {
      name: "SQL",
      description: "Writing SQL queries to retrieve, filter, sort, and analyze data.",
      badges: [
        "Data Querying",
        "Filtering",
        "Analysis"
      ]
    },
    {
      name: "Database Design",
      description: "Understanding database tables, relationships, and basic schema design.",
      badges: [
        "Schema Design",
        "Relationships",
        "Database Concepts"
      ]
    },
    {
      name: "Database Management",
      description: "Organizing and maintaining structured data for efficient access and reporting.",
      badges: [
        "Data Management",
        "Organization",
        "Integrity"
      ]
    }
  ]
},
  
  {
    category: "Cloud & Security",
    icon: "Cloud",
    description: "Cloud computing and cybersecurity fundamentals supported by industry-recognized certifications.",
    skills: [
      {
  name: "AWS Cloud Essentials",
  description: "Understanding cloud computing concepts, AWS services, and cloud fundamentals.",
  badges: [
    "Cloud Computing",
    "AWS Fundamentals",
    "Cloud Services"
  ]
},
{
  name: "Information Security",
  description: "Understanding information security principles, data protection, and cybersecurity fundamentals.",
  badges: [
    "Cybersecurity",
    "Data Protection",
    "Security Fundamentals"
  ]
},
{
  name: "IT Security Defense",
  description: "Knowledge of IT security practices, threat awareness, and basic system protection concepts.",
  badges: [
    "Threat Awareness",
    "Security Practices",
    "IT Security"
  ]
}
    ]
  }
];

export const PROJECTS: Project[] = [
  {
  id: "financial-pipeline",

  title: "Automated Financial Data Processing Pipeline",

  subtitle: "Automating Financial Data Cleaning and Processing with Python",

  description:
    "Developed a Python-based automation solution to clean, validate, transform, and process financial datasets using Pandas, NumPy, and OpenPyXL, improving data preparation efficiency.",

  longDescription:
"This project demonstrates practical data automation using Python. It automates common financial data preparation tasks including data cleaning, validation, transformation, and exporting processed datasets to Excel. The project highlights the use of Python libraries to improve workflow efficiency while strengthening practical skills in financial data analysis and automation.",
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "OpenPyXL",
    "Microsoft Excel"
  ],
     keyOutcome:
    "Automated repetitive financial data preparation tasks using Python, reducing manual work and creating a more efficient data processing workflow.",

  iconName: "Workflow",

  type: "automation",

  metrics: [
  {
    label: "Category",
    value: "Data Automation"
  },
  {
    label: "Language",
    value: "Python"
  },
  {
    label: "Libraries",
    value: "Pandas • NumPy • OpenPyXL"
  },
  {
    label: "Output",
    value: "Cleaned Excel Dataset"
  }
],
    sampleData: [
        {
      stage: "Import",
      task: "Load Financial Dataset"
    },
    {
      stage: "Clean",
      task: "Handle Missing Values"
    },
    {
      stage: "Transform",
      task: "Prepare Structured Data"
    },
    {
      stage: "Validate",
      task: "Verify Dataset"
    },
    {
      stage: "Export",
      task: "Generate Excel Output"
    }
    ]
  },
  {
  id: "netflix-recommendation",

  title: "Netflix Movie Recommendation System",

  subtitle: "Content-Based Recommendation using Python",

  description:
    "Built a movie recommendation system using Python, Pandas, CountVectorizer, and Cosine Similarity to recommend similar movies based on genre.",

  longDescription:
    "This project implements a content-based recommendation engine that analyzes movie genres using CountVectorizer and calculates similarity using cosine similarity. Users can enter a movie title and receive recommendations for similar movies.",

  techStack: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "CountVectorizer",
    "Cosine Similarity"
  ],

  keyOutcome:
    "Implemented a content-based recommendation engine using machine learning techniques.",

  iconName: "Film",

  type: "automation",

  metrics: [
    {
      label: "Category",
      value: "Machine Learning"
    },
    {
      label: "Language",
      value: "Python"
    },
    {
      label: "Algorithm",
      value: "Cosine Similarity"
    },
    {
      label: "Dataset",
      value: "Movie Genres"
    }
  ],

  sampleData: [
    {
      movie: "Avatar",
      recommendation: "Avatar 2"
    },
    {
      movie: "Inception",
      recommendation: "Interstellar"
    },
    {
      movie: "Titanic",
      recommendation: "The Notebook"
    }
  ]
},
  {
  id: "sales-financial-analytics",

  title: "Sales Performance & Financial Analytics Dashboard",

  subtitle: "Sales & Financial Analytics Dashboard",

  description:
    "Developed an interactive Excel dashboard doing Data Cleaning, Making Pivot Tables, charts, and advanced Excel functions to analyze sales performance and financial data.",

  longDescription:
    "This project demonstrates the use of Microsoft Excel for business reporting and financial analysis. It combines Power Query for data preparation, Pivot Tables for summarizing large datasets, and interactive charts to visualize sales performance and key business metrics. The dashboard was designed to present business insights in a clear and user-friendly format while strengthening practical skills in data analysis and reporting.",

  techStack: [
    "Microsoft Excel",
    "Power Query",
    "Pivot Tables",
    "VLOOKUP",
    "INDEX-MATCH",
    "Charts"
  ],

  keyOutcome:
    "Built an interactive dashboard that simplified sales reporting and improved the presentation of business insights.",

  iconName: "BarChart3",

  type: "dashboard",

  metrics: [
    {
      label: "Category",
      value: "Dashboard"
    },
    {
      label: "Platform",
      value: "Microsoft Excel"
    },
    {
      label: "Features",
      value: "Power Query • Pivot Tables"
    },
    {
      label: "Purpose",
      value: "Sales Analysis"
    }
  ],

  sampleData: [
    {
      month: "Jan",
      sales: 52000
    },
    {
      month: "Feb",
      sales: 61000
    },
    {
      month: "Mar",
      sales: 57000
    },
    {
      month: "Apr",
      sales: 69000
    },
    {
      month: "May",
      sales: 73000
    },
    {
      month: "Jun",
      sales: 81000
    }
  ]
},
{
  id: "employee-management",

  title: "Employee Management System",

  subtitle: "Python CRUD Application",

  description:
    "Built a Python application to manage employee records including adding, searching, viewing, and deleting employee information.",

  longDescription:
    "A console-based employee management system demonstrating CRUD operations using Python dictionaries and object-oriented programming principles.",

  techStack: [
    "Python",
    "OOP",
    "Dictionary"
  ],

  keyOutcome:
    "Implemented CRUD functionality for employee record management.",

  iconName: "Users",

  type: "automation",

  metrics: [
    {
      label: "Category",
      value: "Management System"
    },
    {
      label: "Language",
      value: "Python"
    },
    {
      label: "Operations",
      value: "CRUD"
    },
    {
      label: "Storage",
      value: "Dictionary"
    }
  ],

  sampleData: [
    {
      id: "EMP001",
      department: "Finance"
    },
    {
      id: "EMP002",
      department: "HR"
    },
    {
      id: "EMP003",
      department: "IT"
    }
  ]
},
  {
  id: "hr-analytics-dashboard",

  title: "HR Analytics Data Cleaning & Dashboard",

  subtitle: "Python and Excel for HR Data Analysis",

  description:
    "Developed an end-to-end HR analytics project using Python (Pandas) and Microsoft Excel to clean, transform, analyze, and visualize employee data.",

  longDescription:
    "This project demonstrates a complete HR analytics workflow. Employee data was cleaned and prepared using Pandas, followed by feature engineering and exploratory analysis. Excel Pivot Tables, charts, and an interactive dashboard were used to present HR metrics and insights in a clear, user-friendly format.",

  techStack: [
    "Python",
    "Pandas",
    "Microsoft Excel",
    "Pivot Tables",
    "Charts"
  ],

  keyOutcome:
    "Built an interactive HR analytics dashboard that transformed raw employee data into meaningful business insights.",

  iconName: "Users",

  type: "dashboard",

  metrics: [
    {
      label: "Category",
      value: "HR Analytics"
    },
    {
      label: "Language",
      value: "Python"
    },
    {
      label: "Tools",
      value: "Pandas • Excel"
    },
    {
      label: "Output",
      value: "Interactive Dashboard"
    },
  ],

  sampleData: [
    { month: "Jan", employees: 120 },
    { month: "Feb", employees: 118 },
    { month: "Mar", employees: 121 },
    { month: "Apr", employees: 119 },
    { month: "May", employees: 122 },
    { month: "Jun", employees: 124 }
  ]
},
{
  id: "student-management",

  title: "Student Management System",

  subtitle: "Python CRUD Application",

  description:
    "Developed a Python application to manage student records including adding, viewing, searching, and deleting records.",

  longDescription:
    "This project demonstrates Python programming fundamentals and CRUD operations using object-oriented programming and dictionaries for data storage.",

  techStack: [
    "Python",
    "OOP",
    "Dictionary"
  ],

  keyOutcome:
    "Developed a functional student management application using Python.",

  iconName: "GraduationCap",

  type: "automation",

  metrics: [
    {
      label: "Category",
      value: "Management System"
    },
    {
      label: "Language",
      value: "Python"
    },
    {
      label: "Operations",
      value: "CRUD"
    },
    {
      label: "Storage",
      value: "Dictionary"
    }
  ],

  sampleData: [
    {
      roll: "101",
      course: "FinTech"
    },
    {
      roll: "102",
      course: "Computer Science"
    },
    {
      roll: "103",
      course: "Business"
    }
  ]
},
{
  id: "expense-tracker",

  title: "Personal Expense Tracker",

  subtitle: "Python Expense Management Application",

  description:
    "Developed a Python application to record expenses, calculate totals, and manage personal spending.",

  longDescription:
    "A console-based application that allows users to add expenses, view expense history, and calculate total spending. The project demonstrates Python fundamentals, lists, loops, and object-oriented programming.",

  techStack: [
    "Python",
    "OOP",
    "Lists"
  ],

  keyOutcome:
    "Created a simple expense management application using Python.",

  iconName: "Wallet",

  type: "automation",

  metrics: [
    {
      label: "Category",
      value: "Python"
    },
    {
      label: "Interface",
      value: "Console"
    },
    {
      label: "Concept",
      value: "Expense Management"
    },
    {
      label: "Language",
      value: "Python"
    }
  ],

  sampleData: [
    {
      expense: "Food",
      amount: "$35"
    },
    {
      expense: "Transport",
      amount: "$15"
    },
    {
      expense: "Internet",
      amount: "$20"
    }
  ]
},
  {
  
  id: "bank-management-system",

  title: "Python Bank Management System",

  subtitle: "Console-Based Banking Application",

  description:
    "Developed a Python application that simulates basic banking operations including account creation, deposits, withdrawals, and balance management.",

  longDescription:
    "This project demonstrates object-oriented programming and Python fundamentals by implementing a simple banking system. Users can create accounts, perform transactions, and manage account information through a command-line interface.",

  techStack: [
    "Python",
    "Object-Oriented Programming",
    "File Handling"
  ],

  keyOutcome:
    "Applied Python programming concepts to build a functional banking management application.",

  iconName: "Landmark",

  type: "automation",

  metrics: [
    {
      label: "Category",
      value: "Python Application"
    },
    {
      label: "Language",
      value: "Python"
    },
    {
      label: "Concept",
      value: "Object-Oriented Programming"
    },
    {
      label: "Interface",
      value: "Console"
    }
  ],

  sampleData: [
    {
      feature: "Account Creation",
      status: "Completed"
    },
    {
      feature: "Deposit",
      status: "Completed"
    },
    {
      feature: "Withdrawal",
      status: "Completed"
    },
    {
      feature: "Balance Inquiry",
      status: "Completed"
    }
    
  ]
},
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Freelance Data Analyst",
    company: "Self-Employed",
    type: "Freelance / Remote",
    period: "2025 – Present",
    location: "Attock, Punjab, Pakistan",

    responsibilities: [
      "Cleaned, sorted, validated, and formatted Excel datasets for business and academic clients.",
      "Automated repetitive Excel tasks using Python, Pandas, NumPy, and OpenPyXL.",
      "Prepared structured datasets for reporting and analysis using Microsoft Excel and Power Query.",
      "Created customized Excel reports using formulas, Pivot Tables, charts, and conditional formatting.",
      "Improved data accuracy and reduced manual effort through spreadsheet automation and data processing workflows."
    ],

    highlights: [
      "Delivered customized Excel automation and data processing solutions.",
      "Experienced in Python-based spreadsheet automation using Pandas and OpenPyXL.",
      "Specialized in data cleaning, validation, formatting, and Excel reporting."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    skillsCovered: ["Data Cleaning", "Data Analysis", "SQL", "R Programming", "Tableau", "Data Visualization"],
    icon: "Award"
  },
  {
    title: "IBM Data Analysis with Python",
    issuer: "IBM",
    skillsCovered: ["Python", "Pandas", "NumPy", "Exploratory Data Analysis", "Data Wrangling", "Model Building"],
    icon: "Award"
  },
  {
    title: "EC-Council Information Security Fundamentals",
    issuer: "EC-Council",
    skillsCovered: ["Cyber Defense", "Information Security", "Risk Mitigation", "Data Privacy"],
    icon: "ShieldCheck"
  },
  {
    title: "Information Security Analyst",
    issuer: "Industry Standard Certification",
    skillsCovered: ["Security Architecture", "Vulnerability Fundamentals", "Threat Analysis"],
    icon: "ShieldAlert"
  },
  {
    title: "Google IT Security",
    issuer: "Google",
    skillsCovered: ["System Security", "Cryptography", "Network Defense", "Data Safety"],
    icon: "Lock"
  },
  {
    title: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    skillsCovered: ["Cloud Computing", "AWS Core Services", "S3 Storage", "EC2 Basics", "IAM"],
    icon: "Cloud"
  }
]

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science in Financial Technology",
  institution: "Air University",
  campus: "Kamra Campus",
  expectedGraduation: "2029",
  status: "Currently Enrolled",

  highlights: [
    "Coursework in Financial Technology, Programming, Database Systems, Statistics, and Data Analytics.",
    "Building practical projects using Python, Excel, SQL, and Power BI.",
    "Continuously improving technical and analytical skills through hands-on learning."
  ]
};

export const ACHIEVEMENTS: AchievementStat[] = [
  {
    label: "Projects Completed",
    value: "8+",
    description: "Python, Excel, automation, analytics, and management system projects.",
    icon: "CheckCircle2",
    badge: "Portfolio"
  },
  {
    label: "Python Applications",
    value: "6+",
    description: "Built management systems, automation tools, and recommendation applications.",
    icon: "Code2",
    badge: "Python"
  },
  {
    label: "Data Analytics Projects",
    value: "3+",
    description: "Excel dashboards, HR analytics, financial analysis, and data cleaning projects.",
    icon: "Database",
    badge: "Analytics"
  },
  {
    label: "Core Technologies",
    value: "15+",
    description: "Python, Excel, SQL, Power Query, Git, PostgreSQL, HTML, CSS, and more.",
    icon: "Terminal",
    badge: "Tech Stack"
  },
  {
    label: "Learning Status",
    value: "Continuous",
    description: "Actively building projects in Data Analytics, AI, Python, and Financial Technology.",
    icon: "Zap",
    badge: "Growth"
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: "salar13684@gmail.com",
  github: "https://github.com/salar13684-lgtm",
  linkedin: "https://www.linkedin.com/in/salar-shah-7bb2683a2",
  location: "Attock City, Punjab, Pakistan"
};
