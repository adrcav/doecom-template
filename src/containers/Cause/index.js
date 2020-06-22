import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { CauseImage, CauseInfo, CauseTitleSection } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';

import { causes as dataCauses } from '../../util/data';

const Cause = (props) => {
  const history = useHistory();
  const { id } = props.match.params;

  const cause = dataCauses.filter(cause => cause._id === id)[0] || null;

  const handleDonate = () => {
    history.push(`/give/${cause._id}`);
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <div className="row">
        <div className="col-lg-6">
          <CauseImage image={cause.image} />
        </div>

        <div className="col-lg-6">
          <CauseInfo>
            <div className="cause-avatar" style={{ backgroundImage: `url(${cause.account.avatar})` }}></div>
            <div className="cause-account">
              <h2>{cause.account.name}</h2>
              <p>
                <FaMapMarkerAlt style={{ marginRight: '4px' }} />
                <span>{cause.city}</span> - <span>{cause.state}</span>
              </p>
            </div>
          </CauseInfo>

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
