import React from 'react';
import PersonalNav from './PersonalNav';
import PersonalBox from './PersonalBox';
import PersonalFlex from './PersonalFlex';

const Container = ({ children }) => (
  <div className="SEANDIV">
    <PersonalNav />
    <PersonalFlex>
      <PersonalBox>{children}</PersonalBox>
    </PersonalFlex>
    ;
  </div>
);

export default Container;
