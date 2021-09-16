import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othderSectionProps }) => {
      return <MenuItem key={id} {...othderSectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
