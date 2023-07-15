import React, { useEffect, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import SocialList from "./SocialList";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const animate = useRef(null);

  useEffect(() => {
    var lastScrollTop = 0;

    function onScroll() {
      
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        animate.current.style.transform = "translateY(-200px)";
      } else if (st < lastScrollTop) {
        animate.current.style.transform = "translateY(0px)";
      }
      
      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", onScroll);
  }, []); // empty dependencies array means "run this once on first mount"


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="black"
      ref={animate}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          // onClick={annimateHeader}
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
          <HStack spacing={8}>
            <SocialList data={socials} />
          </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a key="project" onClick={handleClick('projects')}>Projects</a>
              <a key="contact" onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
