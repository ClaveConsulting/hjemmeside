import React from 'react';
import styled from 'styled-components';
import { onDesktop } from '../components/Breakpoints';
import {
  COLOR_CLAVE_GREEN,
  COLOR_CLAVE_PINK,
  COLOR_CLAVE_YELLOW,
} from '../colors';

const ProjectItem = styled.li`
  flex: 1 0 auto;

  ${onDesktop(`
    flex: 0 0 auto;
  `)}
`;

const ProjectList = styled.ul`
  list-style: none;
  flex: 1 0 auto;
`;

const ProjectHeader = styled.h2`
  color: ${COLOR_CLAVE_GREEN};
  font-size: 28px;

  ${onDesktop(`
  font-size: 34px;
  `)}
`;

export const Projects = ({ children }) => {
  return (
    <ProjectList>
      <ProjectHeader>Prosjekter</ProjectHeader>
      {children.filter(x => x !== null)}
    </ProjectList>
  );
};

export const Project = ({ title, link }) => {
  return link ? (
    <ProjectItem>
      <ProjectLink href={link}>{title}</ProjectLink>
    </ProjectItem>
  ) : null;
};

const ProjectLink = styled.a`
  padding: 0.25em 0 0.25em 0;
  margin: 0 2.5em 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  text-decoration: underline;
  font-size: 24px;

  ${onDesktop(`
  font-size: 32px;
  `)}

  & {
    color: ${COLOR_CLAVE_PINK};
  }
  &:visited {
  }
  &:hover {
    color: ${COLOR_CLAVE_GREEN};
    text-decoration: underline;
    text-decoration-color: ${COLOR_CLAVE_YELLOW};
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid transparent;
  }

  &:hover:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${COLOR_CLAVE_GREEN};
    transform: scaleX(0.6) scaleY(0.6);
  }
`;
