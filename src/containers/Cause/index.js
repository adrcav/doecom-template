import React from 'react';
import { useHistory } from 'react-router-dom';

import { CauseImage, CauseTitleSection } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import CauseInfo from '../../components/CauseInfo';

import { causes as dataCauses } from '../../util/data';

const Cause = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;

  const cause = dataCauses.filter(cause => cause._id === id)[0] || null;

  const handleDonate = () => {
    history.push(`/give/${cause._id}`);
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <div className="row">
        <div className="col-lg-6" style={{ marginBottom: '30px' }}>
          <CauseImage image={cause.image} />
        </div>

        <div className="col-lg-6">
          <CauseInfo data={cause} />

          <div className="row">
            <div className="col-12">
              <CauseTitleSection>Ações realizadas pela causa</CauseTitleSection>
            </div>
            {cause.banners.map(banner => (
              <div key={banner._id} className="col-6">
                <CauseImage image={banner.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-12" style={{ marginTop: '20px' }}>
          <FormButton
            type="button"
            theme="secondary"
            value="DOAR AGORA"
            onClick={handleDonate}
          />
        </div>
      </div>
    </div>
  );
};

export default Cause;
