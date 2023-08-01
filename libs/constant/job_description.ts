export interface JobDescription {
    duration: string;
    position: string;
    details: string[];
    lang: string[];
}

const getJobDescription: JobDescription[] = [
    {
        duration: "Nov 2022 - Present",
        position:
            "Software Developer @ FPT Software Malaysia (One Year Contract)",
        details: [
            "Study requirements from client sides collected by BA.",
            "Development of Frontend or Backend project according task requirements.",
            "Participate in agile sprints with devops.",
        ],
        lang: [
            "Javascript",
            "TypeScript",
            "NodeJS",
            "PostgreSQL",
            "ReactJS",
            "Java",
        ],
    },
    {
        duration: "Mar 2022 - Aug 2022",
        position: "Product Engineer @ Hatio Sea Sdn Bhd",
        details: [
            "Architecture study of current product development framework.",
            "Development of micro module if framework is understood, with guidance.",
            "Participate in agile sprints with devops.",
        ],
        lang: [
            "Javascript",
            "LitElement",
            "TypeScript",
            "GraphQL",
            "PostgreSQL",
            "Docker",
            "TypeORM",
            "TypeGraphQL",
        ],
    },
];

export { getJobDescription };
