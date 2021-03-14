import React from 'react';
import { Checkbox, CheckboxGroup, CheckboxGroupItem } from 'ui/elements/check';
import { Filter, Filters } from '../../product/filters';

export default function BrowseFilters() {
  return (
    <Filters>
      <Filter name="preferences" label="Preferences">
        <Checkbox
          label="favourites(0)"
          value={false}
          onChange={() => null}
          className="mb-3"
        />
        <Checkbox label="Available (100)" value onChange={() => null} />
      </Filter>
      <Filter name="manufacturer" label="Manufacturer">
        <CheckboxGroup value={['Nintendo']} onChange={() => null}>
          {['Nintendo', 'Sony', 'Microsoft', 'Sega'].map((value) => (
            <CheckboxGroupItem key={value} label={value} value={value} />
          ))}
        </CheckboxGroup>
      </Filter>
      <Filter name="platform" label="Platform">
        <CheckboxGroup value={[]} onChange={() => null} limit={5}>
          {[
            'NES',
            'SNES',
            'N64',
            'Gamecube',
            'Wii',
            'Wii U',
            'PS1',
            'PS2',
            'PS3',
            'PS4',
            'XBox',
            'Xbox 360',
            'Xbox One',
          ].map((value) => (
            <CheckboxGroupItem key={value} label={value} value={value} />
          ))}
        </CheckboxGroup>
      </Filter>
      <Filter name="misc" label="Some other filter">
        <input />
      </Filter>
      <Filter name="misc2" label="Event more filters">
        <select multiple>
          <option value="1">option 1</option>
          <option value="2">option 2</option>
        </select>
      </Filter>
    </Filters>
  );
}
