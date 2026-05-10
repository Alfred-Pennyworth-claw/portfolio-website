import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 3rem;
  background: #f5f5f5;

  @media (max-width: ${theme.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #303030;
  margin-bottom: 0.5rem;

  span {
    color: ${theme.primaryLight};
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: ${theme.primaryLight};
  margin-bottom: 3rem;
  border-radius: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1100px;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>
        Some things I've <span>built</span>
      </SectionTitle>
      <Divider />
      <Grid>
        {projects.map(p => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </Grid>
    </Section>
  );
}
