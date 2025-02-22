export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  status: "working" | "not working";
  role: string;
  team: string[];
};

export const employeeData: Employee[] = [
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["HR"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Operations", "Engineering", "HR"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Sales", "Marketing", "Operations"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Design", "HR"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["Design", "Engineering", "HR", "Operations"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["Design"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Design", "HR", "Sales", "Operations"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Marketing", "Sales", "HR"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["HR"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Design", "Sales", "Marketing"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["HR", "Marketing", "Sales"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["HR"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["HR", "Sales", "Engineering"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["HR", "Operations"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["HR", "Marketing", "Sales"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["HR", "Engineering", "Operations"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Sales", "HR"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Design", "Sales", "Engineering", "Operations"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["Sales"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["Marketing"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Sales", "Engineering"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Marketing", "Design", "HR"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Marketing", "Design", "HR"],
  },
  {
    firstName: "Devan",
    lastName: "Reinger",
    email: "Melissa_Lockman@hotmail.com",
    role: "Customer Intranet Consultant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    team: ["Design", "HR", "Engineering"],
  },
  {
    firstName: "Leonardo",
    lastName: "Langworth",
    email: "Chadrick.Goldner87@gmail.com",
    role: "Senior Security Manager",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    team: ["Marketing"],
  },
  {
    firstName: "Douglas",
    lastName: "Denesik",
    email: "Dante.Deckow@hotmail.com",
    role: "Legacy Security Assistant",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    team: ["Marketing", "Operations"],
  },
  {
    firstName: "Jameson",
    lastName: "Mayer",
    email: "Rosamond_Schuster@yahoo.com",
    role: "Regional Division Planner",
    status: "not working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    team: ["Design", "Operations", "Engineering"],
  },
  {
    firstName: "Madaline",
    lastName: "Quitzon",
    email: "Alex_Grimes82@hotmail.com",
    role: "Corporate Paradigm Strategist",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    team: ["Operations", "Design", "HR", "Marketing"],
  },
  {
    firstName: "Dusty",
    lastName: "Kuvalis",
    email: "Randy63@yahoo.com",
    role: "Chief Creative Technician",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    team: ["Marketing"],
  },
  {
    firstName: "D'angelo",
    lastName: "Moen",
    email: "Andrew88@hotmail.com",
    role: "Forward Response Engineer",
    status: "working",
    avatar:
      "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    team: ["Operations", "Engineering", "Sales", "Marketing"],
  },
];
