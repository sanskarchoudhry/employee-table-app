export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  username: string;
  status: "working" | "not working";
  role: string;
  team: string[];
};

export const employeeData: Employee[] = [
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    username: "dusty22",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Operations"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    username: "angel11",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Operations", "Sales", "Design", "HR", "Engineering", "Analytics"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    username: "reiner",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["AI"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    username: "langardo",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Engineering", "Sales", "Analytics", "AI", "Design"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    username: "bardock",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["AI", "Sales", "HR", "Operations"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    username: "droid4x",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["HR", "Sales", "Engineering", "Analytics"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    username: "horizon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Marketing", "Analytics", "Design", "Operations", "HR"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    username: "dusty22",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["HR", "Design", "Operations"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    username: "angel11",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Engineering", "Operations", "Design", "AI"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    username: "reiner",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Analytics", "Sales", "AI", "Marketing"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    username: "langardo",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Engineering", "Analytics", "Design"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    username: "bardock",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: [
      "Operations",
      "Sales",
      "Marketing",
      "Analytics",
      "HR",
      "Engineering",
    ],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    username: "droid4x",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["Engineering", "Design", "Marketing", "Sales", "HR"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    username: "horizon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Analytics", "Operations", "HR", "Marketing", "Sales"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    username: "dusty22",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["HR", "Engineering", "Marketing", "Operations"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    username: "angel11",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["AI", "Sales", "Marketing", "Analytics"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    username: "reiner",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Marketing", "Design", "AI"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    username: "langardo",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Operations", "Marketing", "Analytics", "Design"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    username: "bardock",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["Marketing", "Engineering", "Sales"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    username: "droid4x",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["Analytics"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    username: "horizon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Engineering", "Sales", "Analytics", "Operations", "Marketing"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    username: "dusty22",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Engineering", "Operations"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    username: "angel11",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["AI", "Engineering", "Design"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    username: "reiner",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Sales", "AI", "Marketing", "Engineering"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    username: "langardo",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Sales", "Analytics", "Design", "Operations"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    username: "bardock",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["Design"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    username: "droid4x",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["HR", "Analytics", "Engineering", "Design", "Sales"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    username: "horizon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["HR"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    username: "dusty22",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Sales", "Design"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    username: "angel11",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Marketing", "Design", "AI"],
  },
];
