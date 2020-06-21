import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import CauseCard from '../../components/CauseCard';

const Main = () => {
  const causes = [
    {
      _id: 'hash-id-cause-1',
      title: 'Doe mantimentos para o Respira Vida!',
      image: 'https://i.imgur.com/dyMJtCt.jpg',
      account: {
        _id: 'hash-id-account-1',
        avatar: 'https://i.imgur.com/rP3YFvP.jpg',
        name: 'Respira Vida',
      },
    },
    {
      _id: 'hash-id-cause-2',
      title: 'Auxilie através da computação!',
      image: 'https://i.imgur.com/qqsABsT.jpg',
      account: {
        _id: 'hash-id-account-2',
        avatar: 'https://i.imgur.com/aQBqfbI.jpg',
        name: 'Colegiado de Computação',
      },
    },
    {
      _id: 'hash-id-cause-4',
      title: 'Ajude a proteger os animais da cidade!',
      image: 'https://i.imgur.com/CZHrWb7.png',
      account: {
        _id: 'hash-id-account-4',
        avatar: 'https://i.imgur.com/UVefH6j.jpg',
        name: 'ONG Proteger',
      },
    },
    {
      _id: 'hash-id-cause-3',
      title: 'Colabore com a associação das Uvas',
      image: 'https://i.imgur.com/dAd9A5b.jpg',
      account: {
        _id: 'hash-id-account-3',
        avatar: 'https://i.imgur.com/pO0GVg0.jpg',
        name: 'Associação dos Produtores de Uva',
      },
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6 d-flex align-items-center">
          <p style={{ margin: 0, fontWeight: '500' }}>Sugestões para você</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Button
            theme="primary"
            icon="FaLocationArrow"
            value="Petrolina/PE"
            onClick={() => toast.info('Somente a cidade de Petrolina/PE está disponível no momento.')}
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        {causes.map(cause => (
        <div className="col-lg-6 col-xl-4" style={{ marginBottom: '20px' }}>
            <NavLink to={`/cause/${cause._id}`} title={cause.title}>
              <CauseCard key={cause._id} data={cause} />
            </NavLink>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
