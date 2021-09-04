import React from 'react';
import { FaCookieBite, FaDiscord, FaTwitter } from 'react-icons/fa';
import { GAMES, HOME, NEW_LISTING } from 'ui/constants/paths';
import { LinkButton, AnchorButton } from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

// TODO: set up twitter / discord

export default function Footer() {
  const year = new Date().getFullYear();
  const g = useGetMessage();

  return (
    <footer className="border-t-2 border-gray-700 lg:bg-opacity-90 bg-black text-sm">
      <div className="p-4 sm:flex sm:justify-between space-y-4 sm:space-y-0">
        <div className="sm:flex sm:flex-col space-y-4 sm:space-y-6">
          <AnchorButton to={HOME} className="font-logo inline-flex">
            {g(ids.footer.title)}
          </AnchorButton>
          <div className="flex space-x-4 sm:space-x-8 text-lg">
            <AnchorButton target="_blank" href="https://twitter.com">
              <FaTwitter />
            </AnchorButton>
            <AnchorButton target="_blank" href="https://discord.com">
              <FaDiscord />
            </AnchorButton>
            <FaCookieBite title="No cookies here!" />
          </div>
        </div>
        <div className="flex justify-between sm:justify-around flex-grow">
          <div className="flex flex-col items-start">
            <LinkButton to={GAMES}>{g(ids.footer.games)}</LinkButton>
            <LinkButton to={NEW_LISTING}>{g(ids.footer.list)}</LinkButton>
            <LinkButton to="/guide">{g(ids.footer.guide)}</LinkButton>
          </div>
          <div className="flex flex-col items-start">
            <LinkButton to="/terms">{g(ids.footer.terms)}</LinkButton>
            <LinkButton to="/privacy">{g(ids.footer.privacy)}</LinkButton>
            <LinkButton to="/credits">{g(ids.footer.credits)}</LinkButton>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 px-4 py-2 text-sm">
        {g(ids.footer.legal, { year })}
      </div>
    </footer>
  );
}
