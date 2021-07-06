import React from 'react';
import {
  FaExclamationCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from 'react-icons/fa';

export const Info = FaExclamationCircle;

export const Success = (props: any) => (
  <FaCheckCircle className="text-primary-lighter" {...props} />
);

export const Warn = (props: any) => (
  <FaExclamationTriangle className="text-warning" {...props} />
);

export const Err = (props: any) => (
  <FaTimes className="text-danger" {...props} />
);
