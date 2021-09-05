import React from 'react';
import { AnchorButton } from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import trust from 'ui/assets/trust.jpg';
import Block from '../../common/Block';
import BlockHeading from '../../common/BlockHeading';

export default function OrderProtection() {
  const g = useGetMessage();
  const link = (
    <AnchorButton
      key="link"
      kind="tertiary"
      target="_blank"
      href="/guide/fees-and-charges/order-protection"
      className="inline-flex font-normal"
    >
      {g(ids.home.new.protection.linkText)}
    </AnchorButton>
  );

  return (
    <Block className="bg-opacity-90 md:bg-opacity-100">
      <BlockHeading>{g(ids.home.new.protection.title)}</BlockHeading>
      <div className="flex flex-col md:flex-row justify-around md:space-x-8 sm:space-y-4 md:space-y-0">
        <div className="hidden sm:block w-1/2 md:w-1/3 aspect aspect-16-9 mx-auto">
          <img
            src={trust}
            alt="Holding hands"
            title="People holding hands is totally trustworthy"
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-8">
          {ids.home.new.protection.text.map((id) => (
            <p key={id}>{g(id, { link })}</p>
          ))}
        </div>
      </div>
    </Block>
  );
}
