import React from 'react';
import Card from 'ui/elements/Card';
import { useFormContext } from 'react-hook-form';
import Loader from 'ui/modules/Loader';
import useMachine, { firstStep } from 'ui/modules/listings/new/machine';
import Condition from 'ui/modules/listings/new/Condition';
import Features from 'ui/modules/listings/new/Features';
import Region from 'ui/modules/listings/new/Region';
import Price from 'ui/modules/listings/new/Price';
import Description from 'ui/modules/listings/new/Description';
import Photos from 'ui/modules/listings/new/Photos';
import Review from 'ui/modules/listings/new/Review';
import Error from 'ui/modules/listings/new/Error';
import Tracker from 'ui/modules/listings/new/Tracker/Tracker';
import { useHistory } from 'react-router-dom';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { FaQuestionCircle } from 'react-icons/fa';
import { AnchorButton } from 'ui/elements/Button';
import type { Values } from 'ui/modules/listings/new/types';
import type { Query } from '@respite/core';

type Step = ReturnType<typeof useMachine>[0];
type Dispatch = ReturnType<typeof useMachine>[1];

interface Props {
  productId: string;
  step: Step;
  dispatch: Dispatch;
  username: string;
  location: string;
  previousUrl: string;
  requirementsQuery: Query<{
    images: Array<{
      key: string;
      required: boolean;
    }>;
  }>;
  error: any;
}

const helpLinks: Record<Step, string> = {
  region: '/guide/selling/create-your-listing#region',
  condition: '/guide/selling/create-your-listing#condition',
  photos: '/guide/selling/create-your-listing#photos',
  price: '/guide/selling/create-your-listing#price',
  description: '/guide/selling/create-your-listing#extras',
} as Record<Step, string>;

export default function Form({
  productId,
  step,
  dispatch,
  username,
  location,
  previousUrl,
  requirementsQuery,
  error,
}: Props) {
  const { handleSubmit, getValues } = useFormContext<Values>();
  const { push } = useHistory();
  const onPrevious = () => {
    if (step === firstStep) {
      push(previousUrl);
    } else {
      dispatch('previous');
    }
  };
  const onNext = (values: Values = getValues()) => {
    dispatch('next', values);
  };

  const titleId = ids.listings.new[step]?.title;
  const helpLink = helpLinks[step];

  return (
    <Card
      title={
        <div className="flex items-start space-x-2">
          <span>{useMessage(titleId)}</span>
          <If condition={helpLink}>
            <span className="text-sm">
              <AnchorButton target="_blank" href={helpLink} className="text-xs">
                <FaQuestionCircle />
              </AnchorButton>
            </span>
          </If>
        </div>
      }
      padding={false}
      className="w-full max-w-screen-xl xl:mx-auto lg:my-8 xl:my-12"
    >
      <form className="p-6" onSubmit={handleSubmit(onNext)}>
        <Tracker step={step} />
        <Choose>
          <When condition={step === 'condition'}>
            <Condition previous={onPrevious} />
          </When>
          <When condition={step === 'features'}>
            <Features previous={onPrevious} />
          </When>
          <When condition={step === 'region'}>
            <Region previous={onPrevious} next={onNext} />
          </When>
          <When condition={step === 'price'}>
            <Price previous={onPrevious} productId={productId} />
          </When>
          <When condition={step === 'description'}>
            <Description previous={onPrevious} />
          </When>
          <When condition={step === 'photos'}>
            <Photos
              previous={onPrevious}
              requiredPhotos={requirementsQuery.data.images}
            />
          </When>
          <When condition={step === 'review'}>
            <Review
              location={location}
              username={username}
              previous={onPrevious}
            />
          </When>
          <When condition={step === 'submitting'}>
            <div className="text-center">
              <Loader />
            </div>
          </When>
          <When condition={step === 'error'}>
            <Error error={error} previous={onPrevious} />
          </When>
        </Choose>
      </form>
    </Card>
  );
}
