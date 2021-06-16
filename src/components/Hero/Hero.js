import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! <br />
          I'm Fidel Hernandez
        </SectionTitle>
        <SectionText>
          I am a creative developer who enjoys building full stack applications,
          video games, deep learning algorithms, and anything that brings value
          to the world!
        </SectionText>
        <Button
          onClick={() => (window.location.href = "mailto:fhern103@fiu.edu")}
        >
          Contact Me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
