import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({ logs, loading, error, getLogs }) => {
  useEffect(() => {
    getLogs();

    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs to Show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  logs: state.log.logs,
  loading: state.log.loading,
  error: state.log.error,
});

const mapDispatchToProps = {
  getLogs,
};
export default connect(mapStateToProps, mapDispatchToProps)(Logs);
