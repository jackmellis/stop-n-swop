import { ButtonHTMLAttributes, ComponentType } from 'react';

export type Kind = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'none';

export type State = 'disabled' | 'pending' | 'success' | 'none';

type Attributes = ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = Attributes & {
  to?: string;
  component?: ComponentType<any> | string;
  kind?: Kind;
  state?: State;
  padding?: boolean;
  styles?: Record<string, any>;
};

export type ButtonComponent = (props: Props) => JSX.Element;
