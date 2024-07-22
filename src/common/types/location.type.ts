import React from 'react';

export type Location = {
  position: {
    lat: number;
    lng: number;
  };
  content: React.ReactNode;
};
