import React from 'react';

const Display = (props) => {
  const { allTabs, currentTabIndex } = props;

  return(
    <div className="display">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

export default Display;