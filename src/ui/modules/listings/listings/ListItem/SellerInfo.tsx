import React from 'react';
import Button from 'ui/elements/Button';
import { makeUserPath } from 'ui/constants/paths';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import StarRating from '../StarRating';

export default function SellerInfo({
  username,
  rating,
}: {
  username: string;
  rating: number;
}) {
  return (
    <div className="text-sm text-gray-200 flex items-center">
      <div className="hidden sm:block mr-4">
        <Button
          padding={false}
          component={Link}
          to={makeUserPath({ username })}
          className="space-x-2"
        >
          <FaUser className="text-xs" />
          <span>{username}</span>
        </Button>
      </div>
      <StarRating rating={rating} />
    </div>
  );
}
