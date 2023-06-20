import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <main className="container m-auto min-h-screen py-16" data-testid="about-page">
      <h2 className="mb-4 text-2xl">Developed By</h2>
      <div className="mb-2">
        <span className="text-lg">Simon Gonzalez</span>
      </div>
      <div className="flex">
        <a href="https://github.com/sysrock18" className="mr-2 hover:opacity-70" target="_blank">
          <FaGithub size={'2em'} />
        </a>
        <a href="https://www.linkedin.com/in/simon-gonzalez-acosta-ing/" className="hover:opacity-70" target="_blank">
          <FaLinkedin size={'2em'} color="#0A66C2" />
        </a>
      </div>

      <h2 className="mb-4 mt-10 text-2xl">Repository</h2>
      <a href="https://github.com/sysrock18/f1webapp" className="underline hover:opacity-70">
        Github link
      </a>
    </main>
  );
}
