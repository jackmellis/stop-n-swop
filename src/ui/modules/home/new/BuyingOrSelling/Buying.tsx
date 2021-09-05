import React from 'react';
import { GAMES } from 'ui/constants/paths';
import { LinkButton } from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Block from '../../common/Block';
import BlockHeading from '../../common/BlockHeading';
import Reason from './Reason';
import Reasons from './Reasons';

export default function Buying() {
  const g = useGetMessage();

  return (
    <Block
      className="bg-opacity-90 md:bg-opacity-100 flex flex-col md:w-1/2 items-center"
      flush
    >
      <div className="space-y-8 lg:space-y-12 flex-grow flex flex-col">
        <BlockHeading>{g(ids.home.new.buying.title)}</BlockHeading>
        <Reasons>
          {ids.home.new.buying.reasons.map(([text, description]) => (
            <Reason key={text} text={g(text)} description={g(description)} />
          ))}
        </Reasons>
        <div>
          <LinkButton padding to={GAMES} kind="primary" className="inline-flex">
            {g(ids.home.new.buying.cta)}
          </LinkButton>
        </div>
      </div>
    </Block>
  );
}
