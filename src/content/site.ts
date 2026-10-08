/**
 * All copy and links for the site live in this file.
 *
 * Text comes verbatim from content.md — edit it here and the page updates;
 * no component needs touching. Search for `TODO:` to find what is still open.
 */

import coachingPhoto from '../assets/photos/anna-karin-coaching.jpg';

export type Link = { label: string; href: string };

/** Links starting with http(s) open in a new tab with rel="noopener". */
export const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Flip to true once real, approved quotes are in `testimonials.items`. */
export const SHOW_TESTIMONIALS = false;

export const site = {
  name: 'Connect People Development',
  legalName: 'Connect People Development LLC',
  person: 'Anna-Karin Liljas',
  role: 'Certified Executive Coach & Consultant',
  url: 'https://connectpeopledev.com/',
  title: 'Anna-Karin Liljas | Executive Coach & Consultant | Connect People Development',
  description:
    'Executive coaching, team development and leadership support for leaders, teams and individuals. Based in the US, working globally.',
  /** 1200×630 share card (LinkedIn, Slack, X…). Rebuild it from scripts/og-image.html. */
  ogImage: {
    src: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Connect People Development: “Success for me is if I can help you and your team succeed!” Anna-Karin Liljas, Certified Executive Coach & Consultant, beside a photo of her coaching a client.',
  },
  logo: {
    src: '/brand/connect-logo.svg',
    width: 416,
    height: 201,
    alt: 'Connect People Development LLC',
  },
};

export const nav: Link[] = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Development', href: '#development' },
  { label: 'Connect', href: '#connect' },
];

export const hero = {
  id: 'welcome',
  name: site.person,
  title: site.role,
  headline: 'Success for me is if I can help you and your team succeed!',
  /** The first "Why work with me" paragraph, which opens the page beside the photo. */
  intro:
    'Organizations ask a lot of their people. Leaders and teams are expected to deliver demanding business goals, often while managing change, complexity and competing priorities. Individuals want to grow, contribute and do work that matters. I help people meet those expectations, and do it with clarity, confidence and purpose.',
  photo: {
    src: coachingPhoto,
    alt: 'Anna-Karin Liljas smiling and talking with a client across a table while the client takes notes.',
  },
  button: { label: "Let's connect", href: '#connect' } as Link,
  waysButton: { label: 'Ways to work with me', href: '#ways' } as Link,
};

export const why = {
  heading: 'Why work with me',
  /** Continues from `hero.intro`. */
  paragraphs: [
    'My approach is grounded in real-world leadership experience. I began my career in pharmaceutical Regulatory Affairs in Sweden and later in the US, where I led teams across the US, UK, Sweden, Poland, India, Spain and Canada. I know firsthand what it takes to deliver results under pressure, across cultures, time zones and functions. Today I bring that experience together with proven methods for enhancing how people think, communicate, innovate and work together.',
    'In all my years of leading teams, and now as a consultant, I have been passionate about developing individuals and teams, as well as myself. There is something beautiful in seeing someone, or a team, achieve more than they thought was possible.',
  ],
};

export const development = {
  id: 'development',
  heading: 'Development for you and your team',
  offerings: [
    {
      title: 'For Leaders',
      body: 'Leaders are expected to set direction, make sound decisions and get results through others, often with little time to step back and think. I work with leaders to sharpen their thinking, strengthen their leadership impact and build the conditions for their teams to perform. The goal is clear: leaders who deliver on demanding business goals while bringing out the best in the people around them.',
    },
    {
      title: 'For Teams',
      body: "High-performing teams aren't just made up of talented people. They're teams where everyone contributes, disagreements are handled well and decisions stick. I help teams improve collaboration, run more effective meetings, build trust and align around shared goals, so they can deliver results together that they could not achieve alone.",
    },
    {
      title: 'For Individuals',
      body: "Whether you're stepping into a new role, facing a career decision or ready to grow, I offer focused, one-to-one support to help you gain clarity, build confidence and move forward. My aim is to help you reach your fullest potential, on your own terms.",
    },
  ],
};

export const commitment = {
  heading: 'My commitment to you',
  /** Two sentences; the second (the motto) is set as its own closing line. */
  quote: [
    "Whoever I work with, my commitment is the same: I'm here to support you.",
    'For me, success means one thing: helping you and your team succeed!',
  ],
};

export const ways = {
  id: 'ways',
  heading: 'Ways to work with me',
  items: [
    {
      title: 'As a consultant for red10 People Development',
      body: "I deliver red10's tailored development services for leaders and teams.",
      links: [
        { label: 'red10 services', href: 'https://www.red10dev.com/' },
        { label: 'Meet the red10 team', href: 'https://www.red10dev.com/about/our-team/' },
      ] as Link[],
    },
    {
      title: 'As a certified Thinking Environment facilitator',
      body: 'I deliver Thinking Environment services that help individuals and organizations build a culture of clear, independent thinking and better decision-making.',
      links: [
        { label: 'Time to Think', href: 'https://www.timetothink.com/' },
        {
          label: 'Professionals register',
          href: 'https://www.timetothink.com/meet-us/professionals-register/',
        },
      ] as Link[],
    },
    {
      title: 'Through Connect People Development LLC',
      body: 'I offer direct engagements tailored to your needs, including one-to-one leadership support, team development, facilitation and workshops.',
      links: [
        // TODO: points at the Connect section for now; swap for a dedicated page/URL if one is made.
        { label: 'Get in touch', href: '#connect' },
      ] as Link[],
    },
  ],
};

export const connect = {
  id: 'connect',
  heading: 'Connect',
  line: "Let's talk about what success looks like for you and your team.",
  linkedin: {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/anna-karin-liljas-050b186/',
  } as Link,
  email: {
    label: 'Email me',
    href: 'mailto:Anna-Karin.Liljas@red10dev.com',
  } as Link,
};

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials = {
  heading: 'Testimonials',
  // TODO: add real, approved quotes (and confirm the heading), then set SHOW_TESTIMONIALS = true.
  items: [] as Testimonial[],
};

export const footer = {
  legalName: site.legalName,
};

/** The "page not found" page. Not in content.md: plain UI wording, for her to approve. */
export const notFound = {
  label: 'Page not found',
  heading: "This page doesn't exist",
  line: 'The link may be out of date. Everything is on the home page.',
  button: { label: 'Go to the home page', href: '/' } as Link,
};
