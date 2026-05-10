import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.14);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #303030;
  margin-bottom: 0.75rem;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.65;
  flex: 1;
  margin-bottom: 1.25rem;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  background: ${theme.primaryLight}22;
  color: ${theme.primaryLight};
  padding: 0.2rem 0.65rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ViewBtn = styled.a`
  align-self: flex-start;
  border: 1px solid ${theme.primaryLight};
  color: ${theme.primaryLight};
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background 0.2s ease, color 0.2s ease;
  text-decoration: none;

  &:hover {
    background: ${theme.primaryLight};
    color: #fff;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <Card>
      <CardTitle>{project.name}</CardTitle>
      <CardDesc>{project.description}</CardDesc>
      <TechRow>
        {project.tech.map(t => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </TechRow>
      <ViewBtn href={project.url} target="_blank" rel="noopener noreferrer">
        View
      </ViewBtn>
    </Card>
  );
}
