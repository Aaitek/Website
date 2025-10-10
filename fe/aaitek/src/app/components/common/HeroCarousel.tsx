"use client";

import React from "react";
import { AwardWinningHero } from "../../../design-system/components/composite/AwardWinningHero";

const slides = [
  {
    id: "slide-1",
    image: "/img/Banner-1.jpg",
    imageAlt: "Digital transformation and technology solutions",
    title: "Transform Your Digital Vision",
    subtitle: "Leading-edge technology solutions that drive business growth and innovation",
    cta: {
      text: "Start Your Journey",
      href: "/contact",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "Learn More",
      href: "/about"
    }
  },
  {
    id: "slide-2",
    image: "/img/banner-2.jpg",
    imageAlt: "CMS and development solutions",
    title: "Expert CMS Solutions",
    subtitle: "Specializing in Umbraco, Sitecore, and cutting-edge content management systems",
    cta: {
      text: "Explore Services",
      href: "/Services",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "View Portfolio",
      href: "/portfolio"
    }
  },
  {
    id: "slide-3",
    image: "/img/banner-3.jpg",
    imageAlt: "Digital excellence and experience",
    title: "20+ Years Excellence",
    subtitle: "Trusted by global brands to deliver exceptional digital experiences",
    cta: {
      text: "Partner With Us",
      href: "/contact",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "Our Story",
      href: "/about"
    }
  },
];

export const HeroCarousel = () => {
  return (
    <AwardWinningHero
      slides={slides}
      autoplay={true}
      autoplayDelay={6000}
    />
  );
};
