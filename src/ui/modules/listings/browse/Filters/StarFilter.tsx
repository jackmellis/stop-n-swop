import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Button from 'ui/elements/Button';

interface Props {
  value: number;
  onChange(value: number): void;
}

export default function StarFilter({ value, onChange }: Props) {
  const [rating, setRating] = useState(value ?? 0);
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    setRating(value);
  }, [value]);

  return (
    <div className="flex flex-wrap" onMouseLeave={() => setRating(value)}>
      {ratings.map((r) => {
        const selected = r <= rating;
        const Star = selected ? FaStar : FaRegStar;

        return (
          <Button
            key={r}
            padding={false}
            className="md:px-1 lg:px-3 xl:px-1"
            onMouseEnter={() => setRating(r)}
            onClick={() => onChange(rating)}
          >
            <Star className={selected ? 'text-secondary-light' : ''} />
          </Button>
        );
      })}
    </div>
  );
}
