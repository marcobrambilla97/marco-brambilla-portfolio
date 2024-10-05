import React, { useRef, useEffect, useState } from "react";
import PlusIcon from "../../PlusIcon/PlusIcon";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

interface IMarqueeItemProps {
  title: string;
  baseVelocity: number;
}

const MarqueeItem = ({ title, baseVelocity = 100 }: IMarqueeItemProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  const updateMarqueeWidth = () => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  };

  useEffect(() => {
    updateMarqueeWidth();
    window.addEventListener("resize", updateMarqueeWidth);
    return () => {
      window.removeEventListener("resize", updateMarqueeWidth);
    };
  }, [title]);

  const x = useTransform(baseX, (v) => `${wrap(-marqueeWidth, 0, v)}px`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div
      ref={marqueeRef}
      style={{ x }}
      className="relative flex whitespace-nowrap"
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex">
          <span className="flex items-center text-8xl font-medium uppercase leading-none sm:text-[12.8rem]">
            {title}
            <span className="relative size-20 flex items-center justify-center rounded-full border border-color-primary mx-6 dark:border-white sm:mx-12 sm:size-[9.6rem]">
              <PlusIcon
                wrapperClassName="size-8 animate-spin-slow sm:w-16 sm:h-16"
                isToggled={false}
                isStatic={true}
              />
            </span>
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default MarqueeItem;
