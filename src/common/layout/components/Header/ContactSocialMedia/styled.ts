import styled from "styled-components";

export const ContactSocialMediaContainer = styled.section`
  height: 60px;
  display: flex;
  padding: 0px 14px;
  flex-direction: row;
  align-items: center;
  background-color: #091d47;
  justify-content: space-between;
`;

export const ContactPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 6px;
  }
`;

export const SocialMedia = styled.div`
  gap: 10px;
  display: flex;
  direction: row;
  justify-content: space-around;
`;
