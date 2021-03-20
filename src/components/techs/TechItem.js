import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `${tech.firstname} ${tech.lastname} deleted from technicians list successfully...`,
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstname} {tech.lastname}
        <a href='#!' className='secondary-content' onClick={handleDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  deleteTech,
};

export default connect(null, mapDispatchToProps)(TechItem);
