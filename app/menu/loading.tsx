import React from 'react';
import { PageContainer } from '@/components/PageContainer';
import { LoaderSpinner } from '@/components/LoaderSpinner';

export default function Loading() {
  return (
    <PageContainer className='flex justify-center items-center'>
      <LoaderSpinner />
    </PageContainer>
  );
}
