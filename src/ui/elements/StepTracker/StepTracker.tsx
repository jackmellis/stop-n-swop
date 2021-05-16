import React, { Fragment } from 'react';
import cx from 'classnames';

const Segment = ({ index, current }: { index: number; current: number }) => {
  return (
    <div
      className={cx(
        'rounded-full w-4 h-4 transition-colors flex-shrink-0',
        current >= index && 'bg-primary-light border-2 border-primary-light',
        current < index && 'border-gray-200 border-2 bg-transparent',
      )}
      style={{ transitionDuration: '500ms', transitionDelay: '250ms' }}
    />
  );
};

const Trail = ({
  index,
  current,
  total,
}: {
  index: number;
  current: number;
  total: number;
}) => {
  return (
    <div
      className={cx('h-1 relative bg-gray-200')}
      style={{ width: `${(1 / (total - 1)) * 100}%` }}
    >
      <div
        className={cx(
          'absolute left-0 top-0 h-full bg-primary-light',
          current >= index ? 'w-full' : 'w-0',
        )}
        style={{
          transition: 'width 500ms',
        }}
      />
    </div>
  );
};

export default function StepTracker({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const arr = new Array(total).fill(null).map((_, i) => i);

  return (
    <div className="flex items-center">
      {arr.map((i) => (
        <Fragment key={i}>
          <If condition={i > 0}>
            <Trail current={current} index={i} total={total} />
          </If>
          <Segment current={current} index={i} />
        </Fragment>
      ))}
    </div>
  );
}
