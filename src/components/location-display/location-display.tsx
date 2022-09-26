import React from 'react';

import { useLocation } from 'react-router-dom';

export const LocationDisplay: React.FC = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};
