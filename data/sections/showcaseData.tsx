import { ShowcaseData } from "@/types/showcase";
import Shoot1 from "@/public/img/shoot/shoot.webp";
import Shoot12 from "@/public/img/shoot/model.webp";
import Shoot14 from "@/public/img/shoot/model2.webp";
import Shoot4 from "@/public/img/shoot/model4.webp";
import Shoot5 from "@/public/img/shoot/model5.webp";
import Shoot6 from "@/public/img/shoot/model6.webp";

export const showcaseData: ShowcaseData = {
  headingLines: ["BRIEF.", "DELIVER.", "APPROVE.", "REPEAT."],
  highlightText: "Repeat.",
  description:
    "YOUR VISION. YOUR INPUT.    Stay involved with in-studio shoot, detailed brief, Kick-off call, revision rounds and final image approval — your project, your way.",
    button: {
        label: "Contact Us",
        href: "/contact-us",
        type: "primary"
    },

  galleryUp: [

    { src: Shoot12.src },
    { src: Shoot1.src },
    { src: Shoot14.src },
    { src: Shoot4.src },
    { src: Shoot5.src },
    { src: Shoot6.src },
  ],

  galleryDown: [
    { src: Shoot4.src },
    { src: Shoot5.src },
    { src: Shoot6.src },
    { src: Shoot12.src },
    { src: Shoot1.src },
    { src: Shoot14.src },
  ]
};