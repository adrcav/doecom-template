import React from 'react';

import { TermsContainer } from './styles';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';

import { termsOfUse } from '../../util/terms';

export const TermsOfUse = () => (
  <div className="container">
    <BackButton />

    <Title value="Termos de Uso" />

    <TermsContainer
      dangerouslySetInnerHTML={{ __html: termsOfUse }}
    ></TermsContainer>
  </div>
);

export default TermsOfUse;
