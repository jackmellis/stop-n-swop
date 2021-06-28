import React, { Children, ReactNode } from 'react';

export default function Item({
  children: allChildren,
}: {
  children: ReactNode;
}) {
  const children = Children.toArray(allChildren);
  const [mainText, ...rest] = children;

  return (
    <li>
      <p className="font-semibold">{mainText}</p>
      {rest.map((node) => (
        <p key={node.toString()} className="text-sm text-gray-300">
          {node}
        </p>
      ))}
    </li>
  );
}
