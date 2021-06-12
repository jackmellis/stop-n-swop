import React from 'react';
import { Link } from 'react-router-dom';
import { makeUserPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function Buyer({ username }: { username: string }) {
  return (
    <div>
      <h3 className="font-semibold">
        {useMessage(ids.listings.myListing.buyer.label)}
      </h3>
      <Button
        padding={false}
        component={Link}
        to={makeUserPath({ userId: username })}
        className="justify-start"
      >
        {username}
      </Button>
    </div>
  );
}
