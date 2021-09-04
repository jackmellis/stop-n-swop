import React, { ReactNode } from 'react';
import { FaMoneyBillWave, FaPlus } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import { makeGameNewListingPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { useBoop } from 'ui/hooks';
import { ids } from 'ui/messages';

const ListIcon = animated(FaMoneyBillWave);
const CollectionIcon = animated(FaPlus);

interface Props {
  productId: string;
  onCollectClick(): void;
  favourite: ReactNode;
}

export default function QuickActions({
  favourite,
  productId,
  onCollectClick,
}: Props) {
  const [listStyle, listBoop] = useBoop({ rotation: 20, x: 4 });
  const [collectionStyle, collectionBoop] = useBoop({ rotation: 90 });
  const getMessage = useGetMessage();

  return (
    <div className="flex justify-around backdrop-filter backdrop-brightness-50 space-x-12">
      {favourite}
      <Button
        className="w-full justify-center"
        component={Link}
        to={makeGameNewListingPath({
          productId,
        })}
        onMouseEnter={listBoop}
      >
        <ListIcon style={listStyle} size="1em" />
        <span className="hidden md:block text-xs ml-3">
          {getMessage(ids.games.actions.list)}
        </span>
      </Button>
      <Button
        className="w-full justify-center hidden"
        onMouseEnter={collectionBoop}
        onClick={onCollectClick}
      >
        <CollectionIcon style={collectionStyle} size="1em" />
        <span className="hidden md:block text-xs ml-3">
          {getMessage(ids.games.actions.collect)}
        </span>
      </Button>
    </div>
  );
}
