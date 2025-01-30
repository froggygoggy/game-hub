import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  id: number;
  platforms: Platform[];
}

const PlatformiconList = ({ id, platforms }: Props) => {
  //   [key:string]:Icon Type definiert ein index signature.
  //   So muss man das nicht für jeden Eintrag einzeln machen
  const iconMap: { [key: string]: IconType } = {
    // Name: PlayStation
    // slug: playstation (textural id, the slug is not supposed to change)
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          //create unique keys by combination of game.id and platform.slug
          key={id + platform.slug}
          as={iconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformiconList;
