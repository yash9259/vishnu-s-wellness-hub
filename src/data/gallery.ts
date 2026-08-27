const imagePath = (filename: string) => `/images/${filename}`;

export const heroPhoto = imagePath("presentation-stage.jpg");
export const portraitPhoto = imagePath("portrait-professional.jpg");

export type GalleryItem = {
  url: string;
  alt: string;
  caption: string;
  category: "Presentations" | "Demonstrations" | "Installations" | "Events";
};

export const gallery: GalleryItem[] = [
  {
    url: imagePath("presentation-stage.jpg"),
    alt: "Vishnu Vardhan Reddy presenting Kangen Water on stage with a demonstration unit",
    caption: "Kangen Water awareness talk",
    category: "Presentations",
  },
  {
    url: imagePath("bni-presentation.jpg"),
    alt: "Speaking to a business networking audience about Kangen Water",
    caption: "Business network presentation",
    category: "Presentations",
  },
  {
    url: imagePath("expo-stall.jpg"),
    alt: "Kangen Water exhibition stall with Enagic devices on display",
    caption: "Exhibition stall, Hyderabad",
    category: "Events",
  },
  {
    url: imagePath("demo-lounge.jpg"),
    alt: "Live Kangen Water demonstration with a LeveLuk device in a hotel lounge",
    caption: "One-to-one live demonstration",
    category: "Demonstrations",
  },
  {
    url: imagePath("customer-demo-bottle.jpg"),
    alt: "Happy customer holding a Kangen Water bottle after a demonstration",
    caption: "Customer after a water demo",
    category: "Demonstrations",
  },
  {
    url: imagePath("home-installation.jpg"),
    alt: "Kangen Water device installed in a customer's home kitchen",
    caption: "Home installation & handover",
    category: "Installations",
  },
  {
    url: imagePath("family-awareness-session.jpg"),
    alt: "Family attending a Kangen Water lifestyle awareness session",
    caption: "Family awareness session",
    category: "Demonstrations",
  },
  {
    url: imagePath("customer-meeting.jpg"),
    alt: "Customer consultation about Kangen Water at her office",
    caption: "Customer consultation",
    category: "Demonstrations",
  },
  {
    url: imagePath("team-discussion.jpg"),
    alt: "Business opportunity discussion with a group of partners",
    caption: "Business opportunity discussion",
    category: "Events",
  },
  {
    url: imagePath("business-event.jpg"),
    alt: "At a business networking event with fellow entrepreneurs",
    caption: "Networking meet",
    category: "Events",
  },
];
