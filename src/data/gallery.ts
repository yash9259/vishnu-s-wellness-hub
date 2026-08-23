import presentationStage from "@/assets/presentation-stage.jpg.asset.json";
import bniPresentation from "@/assets/bni-presentation.jpg.asset.json";
import customerMeeting from "@/assets/customer-meeting.jpg.asset.json";
import businessEvent from "@/assets/business-event.jpg.asset.json";
import demoLounge from "@/assets/demo-lounge.jpg.asset.json";
import customerDemoBottle from "@/assets/customer-demo-bottle.jpg.asset.json";
import homeInstallation from "@/assets/home-installation.jpg.asset.json";
import familyAwareness from "@/assets/family-awareness-session.jpg.asset.json";
import teamDiscussion from "@/assets/team-discussion.jpg.asset.json";
import expoStall from "@/assets/expo-stall.jpg.asset.json";

export const heroPhoto = presentationStage.url;
export const portraitPhoto = customerDemoBottle.url;

export type GalleryItem = {
  url: string;
  alt: string;
  caption: string;
  category: "Presentations" | "Demonstrations" | "Installations" | "Events";
};

export const gallery: GalleryItem[] = [
  {
    url: presentationStage.url,
    alt: "Vishnu Vardhan Reddy presenting Kangen Water on stage with a demonstration unit",
    caption: "Kangen Water awareness talk",
    category: "Presentations",
  },
  {
    url: bniPresentation.url,
    alt: "Speaking to a business networking audience about Kangen Water",
    caption: "Business network presentation",
    category: "Presentations",
  },
  {
    url: expoStall.url,
    alt: "Kangen Water exhibition stall with Enagic devices on display",
    caption: "Exhibition stall, Hyderabad",
    category: "Events",
  },
  {
    url: demoLounge.url,
    alt: "Live Kangen Water demonstration with a LeveLuk device in a hotel lounge",
    caption: "One-to-one live demonstration",
    category: "Demonstrations",
  },
  {
    url: customerDemoBottle.url,
    alt: "Happy customer holding a Kangen Water bottle after a demonstration",
    caption: "Customer after a water demo",
    category: "Demonstrations",
  },
  {
    url: homeInstallation.url,
    alt: "Kangen Water device installed in a customer's home kitchen",
    caption: "Home installation & handover",
    category: "Installations",
  },
  {
    url: familyAwareness.url,
    alt: "Family attending a Kangen Water lifestyle awareness session",
    caption: "Family awareness session",
    category: "Demonstrations",
  },
  {
    url: customerMeeting.url,
    alt: "Customer consultation about Kangen Water at her office",
    caption: "Customer consultation",
    category: "Demonstrations",
  },
  {
    url: teamDiscussion.url,
    alt: "Business opportunity discussion with a group of partners",
    caption: "Business opportunity discussion",
    category: "Events",
  },
  {
    url: businessEvent.url,
    alt: "At a business networking event with fellow entrepreneurs",
    caption: "Networking meet",
    category: "Events",
  },
];
