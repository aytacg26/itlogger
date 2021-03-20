import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
        {t.firstname} {t.lastname}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

const mapDisptchToProps = {
  getTechs,
};

export default connect(mapStateToProps, mapDisptchToProps)(TechSelectOptions);
