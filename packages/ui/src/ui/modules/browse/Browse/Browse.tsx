import React, { useState } from 'react';
import { FaRegHeart, FaSearch, FaSlidersH } from 'react-icons/fa';
import art from 'ui/assets/Super_Mario_64_Boxart.png';
import { Button, TextButton } from 'ui/elements/Button';
import './input.css';

export default function Browse() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex-grow flex flex-col">
      <div className="lg:w-2/3 xl:w-1/2 mx-6 lg:mx-auto my-4 lg:my-8 xl:my-12 flex space-x-6">
        <div className="flex items-end border-b focus-within:border-green-500 flex-grow">
          <div className="flex-grow relative">
            <input
              type="search"
              id="browse_search"
              className="bg-transparent outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label
              htmlFor="browse_search"
              className="absolute left-0 top-0 text-sm text-gray-200 transition-all"
            >
              Search
            </label>
          </div>
          <TextButton aria-label="Search" className="text-xl">
            <FaSearch />
          </TextButton>
        </div>
        <Button kind="tertiary" className="text-xl xl:hidden">
          <FaSlidersH />
        </Button>
      </div>
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="hidden lg:static bg-gray-800 z-10 inset-0 px-4 py-3">
          <h3 className="text-lg">Filter your results</h3>
          <fieldset>
            <legend>Console</legend>
            {['NES', 'SNES', 'N64', 'Gamecube', 'Wii', 'Wii U'].map(
              (name, i) => (
                <label className="block">
                  <input type="checkbox" />
                  <span>{name}</span>
                  <span>({i * 25})</span>
                </label>
              ),
            )}
          </fieldset>
          <fieldset>
            <legend>Favourites</legend>
            <label className="block">
              <input type="checkbox" />
              <span>Only favourites</span>
              <span>(0)</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Availability</legend>
          </fieldset>
        </div>
        <ul className="flex-grow md:flex flex-wrap lg:self-start">
          {['Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy'].map(
            (name, i) => (
              <li className="md:w-1/2 lg:w-1/4 xl:w-1/5 mb-4 md:mb-12 flex justify-center md:items-start">
                <div className="flex bg-gray-800 space-x-4 md:space-x-0 md:flex-col w-full md:w-3/4 lg:w-5/6">
                  <div className="w-1/4 md:w-full flex-shrink-0 relative md:pb-2/3">
                    <div
                      className="bg-cover w-full h-full md:absolute"
                      style={{ backgroundImage: `url(${art})` }}
                    />
                  </div>
                  <div className="hidden md:block px-2">{name}</div>
                  <div className="flex-grow flex md:px-2">
                    <div className="flex flex-col flex-grow justify-between space-y-3 py-3">
                      <div className="md:hidden">{name}</div>
                      <div className="text-xs">Nintendo 64</div>
                      <div className="hidden">23 June 1996</div>
                      <If condition={i !== 2}>
                        <div className="text-xs text-green-500">
                          17 Available
                        </div>
                      </If>
                      <If condition={i === 2}>
                        <div className="text-xs text-gray-500">0 Available</div>
                      </If>
                    </div>
                    <div className="flex flex-col justify-center">
                      <TextButton title="Add this to my wishlist">
                        <FaRegHeart size="2rem" />
                      </TextButton>
                    </div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
