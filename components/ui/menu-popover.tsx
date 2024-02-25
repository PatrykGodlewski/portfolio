"use client";
import { Variants, motion } from "framer-motion";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import Menu from "../svg/menu";
import { Button } from "./button";

function MenuPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const variantsContainer: Variants = {
    open: {
      height: "calc(100vh - 32px)",
    },
    closed: {
      height: 0,
      padding: 0,
    },
  };

  const variantInnerContainer: Variants = {
    open: {
      opacity: 100,
    },
    closed: {
      opacity: 0,
    },
  };

  const open = () => {
    setIsOpen(true);
    ref.current?.focus();
  };

  const close = () => {
    setIsOpen(false);
    ref.current?.blur();
  };

  return (
    <div>
      <Button variant={"ghost"} onClick={open}>
        <Menu />
      </Button>
      <motion.div
        ref={ref}
        tabIndex={isOpen ? -1 : 0}
        className="bg-accent w-screen max-w-xl  left-4 top-4 absolute text-foreground overflow-hidden rounded-3xl"
        variants={variantsContainer}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="p-8"
          variants={variantInnerContainer}
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
        >
          <Button variant={"ghost"} onClick={close}>
            <X />
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda optio reiciendis minus fuga, vel non obcaecati laboriosam
            voluptatibus delectus architecto iure vero cum iste explicabo
            consectetur aperiam? Ducimus, praesentium.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MenuPopover;
