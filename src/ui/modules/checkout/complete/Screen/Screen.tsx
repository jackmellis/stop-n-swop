import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GAMES, makeMyOrderPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import Card from 'ui/elements/Card';
import Photo from 'ui/elements/Photo';
import Text from 'ui/help/checkout/complete.mdx';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import confetti from 'canvas-confetti';

export default function CompleteScreen({
  orderId,
  image,
}: {
  orderId: string;
  image: string;
}) {
  const getMessage = useGetMessage();
  useEffect(() => {
    confetti({});
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center lg:items-center">
      <Card
        className="flex-grow flex flex-col md:flex-grow-0 container xl:max-w-screen-lg mx-auto"
        title={getMessage(ids.checkout.complete.title)}
      >
        <div className="space-y-8">
          <div className="space-y-8 md:space-y-0 md:flex md:space-x-4 lg:space-x-8">
            <div className="w-1/2 sm:w-1/3 md:w-1/2 md:pt-12 mx-auto order-last">
              <Photo src={image} className="border" />
            </div>
            <div className="help">
              <Text orderId={orderId} />
            </div>
          </div>
          <div className="flex justify-around">
            <Button component={Link} to={GAMES} kind="secondary">
              {getMessage(ids.checkout.complete.games)}
            </Button>
            <Button
              component={Link}
              to={makeMyOrderPath({ orderId })}
              kind="primary"
            >
              {getMessage(ids.checkout.complete.myOrder)}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
