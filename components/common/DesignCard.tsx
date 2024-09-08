import CorporatePng from "@/public/images/corporate.png";
import NextImage from "@/components/NextImage";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/data/variants";
import { StaticImageData } from "next/image";
import { useI18n } from "@/i18n/client";

const DesignCard = ({
  imgUrl,
  title,
  description,
  className,
}: {
  imgUrl: string | StaticImageData;
  title?: string;
  description?: string;
  className?: string;
}) => {
  const t = useI18n();

  return (
    <div
      className={twMerge("flex w-full flex-col gap-10 lg:flex-row", className)}
    >
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <NextImage
          src={imgUrl}
          alt="Catalog"
          className="h-44 w-full rounded-md md:h-96 lg:w-[600px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex max-w-2xl flex-col gap-y-2"
      >
        <motion.h1
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl font-semibold text-red-500 md:text-3xl"
        >
          {title}
        </motion.h1>
        <p className="max-sm:text-xs">{description}</p>
      </motion.div>
    </div>
  );
};

export default DesignCard;
