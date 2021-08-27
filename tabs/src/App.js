import React, { useState } from 'react';
import Tabs from './Components/Tabs';
import Display from './Components/Display';
import './App.css';

function App() {

  const tabsArray = [
    {label: "Tab 1", content: "Tab 1 content is showing here"},
    {label: "Tab 2", content: "Tab 2 content is showing here"},
    {label: "Tab 3", content: "Tab 3 content is showing here"},
  ];

  const [allTabs, setAllTabs] = useState(tabsArray);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="App">
      <Tabs
      allTabs={allTabs}
      currentTabIndex={currentTabIndex}
      setCurrentTabIndex={setCurrentTabIndex}
      />
      <Display allTabs= {allTabs}
      currentTabIndex= {currentTabIndex}/>
    </div>
  );
}

export default App;
