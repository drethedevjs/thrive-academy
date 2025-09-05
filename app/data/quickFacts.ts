interface QuickFact {
  id: number;
  icon: string;
  title: string;
  text: string[];
  small?: string;
}

const quickFacts: QuickFact[] = [
  {
    id: 1,
    icon: "ic:sharp-calendar-month",
    title: "School Year",
    text: ["Sept. 2, 2025 - May 2, 2026"]
  },
  {
    id: 2,
    icon: "material-symbols:nest-clock-farsight-analog-outline",
    title: "Hours",
    text: ["Monday-Thursday", "9:00 AM - 1:00 PM"]
  },
  {
    id: 3,
    icon: "solar:chat-round-money-bold",
    title: "Tuition",
    text: ["$5,500 per year"],
    small: "(quarterly payments available)"
  },
  {
    id: 4,
    icon: "material-symbols:location-on",
    title: "Location",
    text: ["Brandon/Ruskin, FL"]
  }
];

export default quickFacts;
