import React from 'react';

import { TermsContainer } from './styles';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';

import { privacyPolicy } from '../../util/terms';

export const PrivacyPolicy = () => (
  <div className="container">
    <BackButton />

    <Title value="Política de Privacidade" />

    <TermsContainer
      dangerouslySetInnerHTML={{ __html: privacyPolicy }}
    ></TermsContainer>
  </div>
);

export default PrivacyPolicy;
