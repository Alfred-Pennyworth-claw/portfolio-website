import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { theme } from '../theme';
import { socialLinks } from '../data/portfolio';

const greetings = ['hello', 'hola', 'salam', 'bonjour', 'howdy'];

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background: #fefffc;

  @media (max-width: ${theme.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const Greeting = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Accent = styled.span`
  color: ${theme.primaryLight};
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #303030;
  margin: 0.5rem 0;

  @media (max-width: ${theme.mobile}) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: ${theme.mobile}) {
    font-size: 1.4rem;
  }
`;

const Bio = styled.p`
  max-width: 600px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const ScrollDown = styled.div`
  cursor: pointer;
  font-size: 0.95rem;
  color: #555;

  span {
    text-decoration: underline;
    text-decoration-color: ${theme.primaryLight};
    color: ${theme.primaryLight};
  }
`;

export default function Home() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % greetings.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section id="home">
      <Greeting>
        <Accent>{greetings[idx]},</Accent> my name is
      </Greeting>
      <Name>Brendan McShane.</Name>
      <Tagline>I'm an MLE building tools with Claude, OpenClaw, Ollama.</Tagline>
      <Bio>
        I'm a <Accent>Detroit-based</Accent> ML Engineer who specializes in building machine
        learning models, data pipelines, and AI-powered tools. Currently, I'm an ML Engineer at{' '}
        <Accent>Ford Motor Company</Accent> building vehicle sales forecasting systems and AI
        agentic workflows.
      </Bio>
      <SocialRow>
        <SocialIcon url={socialLinks.github} style={{ height: 40, width: 40 }} />
        <SocialIcon url={socialLinks.linkedin} style={{ height: 40, width: 40 }} />
        <SocialIcon url={socialLinks.email} style={{ height: 40, width: 40 }} />
      </SocialRow>
      <Link to="projects" smooth duration={500}>
        <ScrollDown>
          <span>Scroll down</span> to see some of the projects I've been working on.
        </ScrollDown>
      </Link>
    </Section>
  );
}
