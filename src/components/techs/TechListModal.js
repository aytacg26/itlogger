import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PreLoader from '../layout/Preloader';

const TechListModal = ({ techs, getTechs, loading }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && techs !== null ? (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          ) : (
            <PreLoader />
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

const mapDispatchToProps = {
  getTechs,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechListModal);
