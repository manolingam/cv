import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  ArticleIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Mano Lingam",
  initials: "Saimano",
  location: "Tamil Nadu, India (IST)",
  locationLink: "https://www.google.com/maps/place/Tamilnadu",
  about:
    "Versatile Full Stack Engineer dedicated to crafting web applications with a keen eye for UI & UX, aiming to enhance client experiences.",
  summary:
    "Seasoned Web Developer with a proven 4-year track record in both frontend and backend technologies. I have successfully delivered multiple production-grade applications and possess specialized expertise in web3 applications & blockchain protocols, focusing on Ethereum and EVM-supported chains.",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1729320268819214336/9F1Qth6-_400x400.jpg",
  personalWebsiteUrl: "https://mirror.xyz/saimano.eth",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/manolingam",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saimano1996/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/saimano1996",
        icon: XIcon,
      },
      {
        name: "mirror",
        url: "https://mirror.xyz/saimano.eth",
        icon: ArticleIcon,
      },
    ],
  },
  education: [
    {
      school: "Coimbatore Institute of Technology",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "RaidGuild",
      link: "https://raidguild.org",
      badges: ["Remote", "Freelance"],
      title: "Senior Full Stack Developer",
      // logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description:
        "Pioneered and implemented various systems to enhance organizational management, delivering multiple successful projects—both internal and external. Contributed significantly to the team's visibility and success.",
    },
    {
      company: "Silverdoor",
      link: "https://silverdoor.ai",
      badges: ["Remote", "Freelance"],
      title: "Frontend Web3 Developer",
      // logo: ClevertechLogo,
      start: "2023",
      end: "Present",
      description:
        "Collaborated in building and launching an open-source project to improve the DAO ecosystem. Contributed to multiple internal projects, driving the organization's development.",
    },
  ],
  skills: [
    "JavaScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Express.js",
    "ChakraUI/Tailwind",
    "MongoDB/NoSQL",
    "Redis",
    "AWS",
    "EVM Chains/L2 Protocols",
    "Solidity",
    "IPFS/Arweave",
    "Subgraphs",
    "LLM/Vector Databases",
  ],
  projects: [
    {
      title: "Trait Swapper",
      techStack: [
        "Client Project",
        "JavaScript",
        "Next.js",
        "ChakraUI",
        "Express.js",
        "MongoDB",
        "GraphQL",
        "Redis",
        "Ethereum",
        "AWS S3",
        "IPFS",
      ],
      description:
        "Revolutionizing peer-to-peer trading, Trait Swapper is a dynamic platform for Bufficorn enthusiasts to seamlessly trade and swap unique traits.",
      link: {
        label: "swap.bufficorn.com",
        href: "https://swap.bufficorn.com",
      },
    },
    {
      title: "NFT Certificates",
      techStack: [
        "Volunteer Project",
        "JavaScript",
        "Next.js",
        "ChakraUI",
        "Node.js",
        "GraphQL",
        "Polygon",
        "AWS S3",
        "IPFS",
        "Airtable",
      ],
      description:
        "Contributing to the evolution of certification, NFT Certificates is a project issuing non-transferrable NFTs through a custom on-chain certification protocol.",
      link: {
        label: "certificate.english4it.online",
        href: "https://certificate.english4it.online",
      },
    },
    {
      title: "The Seneschal",
      techStack: [
        "Open Source Project",
        "JavaScript",
        "Next.js",
        "Tailwind",
        "Node.js",
        "GraphQL",
        "Gnosis/L2",
        "AWS S3",
        "IPFS",
        "Arweave",
        "LLM/OpenAI",
      ],
      description:
        "Empowering DAO operators, The Seneschal is a dynamic full-stack dapp facilitating the management of shares, rewards, and proposals through the innovative hats protocol.",
      link: {
        label: "create-seneschal-app",
        href: "https://github.com/manolingam/create-seneschal-app",
      },
    },
    {
      title: "Smart Invoice",
      techStack: [
        "Product",
        "Frontend Developer",
        "JavaScript",
        "Next.js",
        "Node.js",
        "GraphQL",
        "Ethereum/Gnosis",
        "Subgraphs",
        "ChakraUI",
      ],
      description:
        "Smart Invoice is a platform facilitating trustless and secure crypto invoicing between clients and users.",
      link: {
        label: "smartinvoice.xyz",
        href: "https://smartinvoice.xyz/",
      },
    },
    {
      title: "Reflexer Finance Stats",
      techStack: [
        "Client Project",
        "JavaScript",
        "Next.js",
        "ChakraUI",
        "GraphQL",
        "Ethereum",
        "Subgraphs",
      ],
      description:
        "This is an analytical tool created for Reflexer Finance, providing users with insights into intricate financial data.",
      link: {
        label: "analysis.reflexer.protocol",
        href: "https://reflexer-stat-dashboard.vercel.app/",
      },
    },
    {
      title: "Global Settledown",
      techStack: [
        "Client Project",
        "JavaScript",
        "Next.js",
        "ChakraUI",
        "GraphQL",
        "Goerli/TESTNET",
        "Subgraphs",
      ],
      description:
        "Addressing emergencies with foresight, Global Settledown is a simulation for Reflexer finance, offering a protocol shutdown exit strategy.",
      link: {
        label: "exit.reflexer.protocol",
        href: "https://reflexer-global-settlement.vercel.app/",
      },
    },
    {
      title: "Wrap N Wrap",
      techStack: [
        "Side Project",
        "Next.js",
        "JavaScript",
        "Ethereum/Polygon/Gnosis",
        "ChakraUI",
      ],
      description:
        "Wrap N Wrap is a practical dapp designed for seamless wrapping and unwrapping of ETH into ERC20 on different chains.",
      link: {
        label: "wrapnwrap.xyz",
        href: "https://www.wrapnwrap.xyz/",
      },
    },
    {
      title: "Kyiv Tech Summit",
      techStack: [
        "Volunteer Project",
        "Frontend Developer",
        "JavaScript",
        "Next.js",
        "IPFS",
      ],
      description:
        "Contributing to the tech community, Kyiv Tech Summit's landing page is designed to organize and promote a web3 hackathon in Ukraine - 2022.",
      link: {
        label: "kyivtechsummit.com",
        href: "https://kyiv-tech-summit.vercel.app/",
      },
    },
    {
      title: "Poignart",
      techStack: [
        "Volunteer Project",
        "Frontend Developer",
        "JavaScript",
        "Next.js",
        "IPFS",
        "AWS S3",
      ],
      description:
        "Fostering art and NFTs for a cause, Poignart is a platform dedicated to artists, providing a space to create NFTs in support of Ukraine.",
      link: {
        label: "poign.art",
        href: "https://www.poign.art/",
      },
    },
  ],
};
