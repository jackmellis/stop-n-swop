import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import createWrapper from '__tests__/createWrapper';
import type { Section } from '../../types';
import SectionList from '../SectionList';

let options: Section[];
let x: ReturnType<typeof render>;

beforeEach(() => {
  options = [
    {
      key: 'one',
      label: 'One',
      to: '/one',
    },
    {
      key: 'two',
      label: 'Two',
      to: '/two',
    },
  ];
  const current = options[0].key;
  const wrapper = createWrapper();

  x = render(<SectionList current={current} options={options} />, { wrapper });
});

it('renders an expand button', () => {
  expect(
    screen.getByRole('button', { name: options[0].label }),
  ).toBeInTheDocument();
});
it('renders all items in the list', () => {
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
it('hides the list', () => {
  const list = screen.getByRole('list');

  expect(list.classList.contains('hidden')).toBe(true);
});

describe('when I click the expand button', () => {
  beforeEach(() => {
    userEvent.click(screen.getByRole('button'));
  });

  it('shows the list', () => {
    const list = screen.getByRole('list');

    expect(list.classList.contains('hidden')).toBe(false);
  });

  describe('when current changes', () => {
    beforeEach(() => {
      x.rerender(<SectionList options={options} current={options[1].key} />);
    });

    it('hides the list', () => {
      const list = screen.getByRole('list');

      expect(list.classList.contains('hidden')).toBe(true);
    });
  });
});
