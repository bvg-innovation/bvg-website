import { Facebook, Instagram, Linkedin, TikTok } from "../../../../assets/svg";

interface ISocialData {
  icon: JSX.Element;
  link: string;
  title: string;
}

export const SocialLinks: ISocialData[] = [
  {
    icon: <Facebook fill={"#FFF"} width={"22px"} height={"22px"} />,
    title: "Facebook",
    link: "https://facebook.com",
  },
  {
    icon: <Instagram fill={"#FFF"} width={"22px"} height={"22px"} />,
    title: "Instagram",
    link: "https://instagram.com",
  },
  {
    icon: <TikTok fill={"#FFF"} width={"22px"} height={"22px"} />,
    title: "TikTok",
    link: "https://tiktok.com",
  },
  {
    icon: <Linkedin fill={"#FFF"} width={"22px"} height={"22px"} />,
    title: "Linkedin",
    link: "https://linkedin.com",
  },
];
