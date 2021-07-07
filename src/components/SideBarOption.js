/** @format */

import React from "react";
import styled from "styled-components";

const SideBarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ margin: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SideBarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
`;
const SidebarOptionChannel = styled.div``;
