import logo from "../assets/image/logo.png";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { IconType } from "react-icons";

interface Icon {
   icon: IconType;
   link: string;
}

interface Header {
   logo?: string;
   navigation: string[];
   contact: Array<Icon>;
}

export const headerApi: Header = {
   logo: logo,
   navigation: ["home", "project", "Technical Skill"],
   contact: [
      {
         icon: FaFacebookSquare,
         link: "https://www.facebook.com/profile.php?id=100027522219067",
      },
      {
         icon: FaGithubSquare,
         link: "https://github.com/Tran-Duoc",
      },
   ],
};
