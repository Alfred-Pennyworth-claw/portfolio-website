import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { theme } from '../theme';

const Burger = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ $open }) => ($open ? '#fefffc' : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? '0' : '1')};
      transform: ${({ $open }) => ($open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:last-child {
      transform: ${({ $open }) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.primaryDark};
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: #fefffc;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: ${theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${theme.primaryLight};
    }
  }
`;

const Overlay = styled.div`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Burger $open={open} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        <div />
        <div />
        <div />
      </Burger>
      <Overlay $open={open} onClick={close} />
      <NavMenu $open={open}>
        <Link to="home" smooth duration={500} onClick={close}>
          Home
        </Link>
        <Link to="projects" smooth duration={500} onClick={close}>
          Projects
        </Link>
        <Link to="about" smooth duration={500} onClick={close}>
          About
        </Link>
        <a href="/docs/Brendan_McShane_MLE.pdf" target="_blank" rel="noopener noreferrer" onClick={close}>
          Resume
        </a>
      </NavMenu>
    </>
  );
}
