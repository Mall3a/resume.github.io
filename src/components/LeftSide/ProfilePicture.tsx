import React from "react";
import styled from "styled-components";
const StyledImgBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledProfileText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 40px;

  h2 {
    color: #fff;
    font-size: 1.5em;
    margin-top: 20px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    line-height: 1.4em;
  }

  h2 span {
    font-size: 0.8em;
    font-weight: 300;
  }
`;
const ProfilePicture = () => {
  return (
    <StyledProfileText>
      <StyledImgBox>
        <img
          alt="profilePicture"
          src={require("../../images/profilePicture.png")}
        />
      </StyledImgBox>
      <h2>
        Constanza Mallea Riveros
        <br />
        <span>Front-End Developer</span>
        <div>
          <span>Open to Remote International Roles</span>
        </div>
      </h2>
    </StyledProfileText>
  );
};

export default ProfilePicture;
