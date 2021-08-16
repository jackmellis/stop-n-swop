import React from 'react';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

interface Props {
  openHowItWorks(): void;
  openTrouble(): void;
}

export default function HelpButtons({ openHowItWorks, openTrouble }: Props) {
  const getMessage = useGetMessage();

  return (
    <>
      <Button
        className="text-sm"
        padding={false}
        kind="tertiary"
        onClick={openHowItWorks}
      >
        {getMessage(ids.listings.new.buttons.help)}
      </Button>
      <Button className="text-xs" padding={false} onClick={openTrouble}>
        {getMessage(ids.listings.new.buttons.trouble)}
      </Button>
    </>
  );
}
