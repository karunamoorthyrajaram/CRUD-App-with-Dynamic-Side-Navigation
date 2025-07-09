'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Crud = dynamic(() => import('@/component/crud'), {
  ssr: false,
});

export default function ClientCrudWrapper() {
  return <Crud />;
}
