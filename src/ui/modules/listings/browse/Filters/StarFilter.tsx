import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Button from 'ui/elements/Button';

export default function StarFilter() {
  const [rating, setRating] = useState(0);
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-wrap" onMouseLeave={() => setRating(0)}>
      {ratings.map((r) => {
        const selected = r <= rating;
        const Star = selected ? FaStar : FaRegStar;

        return (
          <Button
            padding={false}
            className="md:px-1 lg:px-3 xl:px-1"
            onMouseEnter={() => setRating(r)}
          >
            <Star className={selected ? 'text-secondary-light' : ''} />
          </Button>
        );
      })}
    </div>
  );
}
