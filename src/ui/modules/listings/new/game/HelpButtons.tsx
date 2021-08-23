import React from 'react';
import Button, { AnchorButton } from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

interface Props {
  openTrouble(): void;
}

export default function HelpButtons({ openTrouble }: Props) {
  const getMessage = useGetMessage();

  return (
    <>
      <AnchorButton
        target="_blank"
        href="/guide/selling/choose-your-game"
        className="text-sm"
        kind="tertiary"
      >
        {getMessage(ids.listings.new.buttons.help)}
      </AnchorButton>
      <Button className="text-xs" padding={false} onClick={openTrouble}>
        {getMessage(ids.listings.new.buttons.trouble)}
      </Button>
    </>
  );
}
