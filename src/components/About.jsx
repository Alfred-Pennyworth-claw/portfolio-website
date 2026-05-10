import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { skills } from '../data/portfolio';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 3rem;
  background: #fefffc;

  @media (max-width: ${theme.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #303030;
  margin-bottom: 0.5rem;
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
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;

  @media (max-width: ${theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.primaryLight};
  margin-bottom: 1.5rem;
`;

const SkillGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #555;

  &::before {
    content: '▹';
    color: ${theme.primaryLight};
    font-size: 0.8rem;
    flex-shrink: 0;
  }
`;

const EduItem = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.05rem;
    font-weight: 600;
    color: #303030;
    margin-bottom: 0.25rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <Divider />
      <Grid>
        <div>
          <SubTitle>Technical Skills</SubTitle>
          <SkillGrid>
            {skills.map(s => (
              <SkillItem key={s}>{s}</SkillItem>
            ))}
          </SkillGrid>
        </div>
        <div>
          <SubTitle>Education</SubTitle>
          <EduItem>
            <h4>Indiana University</h4>
            <p>M.S. Computer Science</p>
            <p>Aug 2021 – Dec 2022 · Bloomington, IN</p>
            <p>Minor in Mathematics · GPA 3.41</p>
          </EduItem>
          <EduItem>
            <h4>Indiana University</h4>
            <p>B.S. Computer Science</p>
            <p>Aug 2017 – May 2021 · Bloomington, IN</p>
            <p>Minor in Mathematics · Provost Scholarship</p>
          </EduItem>
        </div>
      </Grid>
    </Section>
  );
}
