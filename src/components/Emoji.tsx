import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    //Index Signature
    3: { src: meh, alt: "meh", boxSize: "25px", marginTop: "3" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px", marginTop: "3" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px", marginTop: "1" },
  };

  //   using the index signature from above
  return <Image {...emojiMap[rating]} marginLeft={2} />;
};

export default Emoji;
