import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(./background.png);
  background-repeat: no-repeat;
  background-size: cover;

  padding: 2rem;

  gap: 2rem;
`;

export const Logo = styled.img`
  margin: 8rem 0 12rem 0;
`;

export const SvgWrapper = styled.div`
  width: 44px;
  height: 44px;

  display: flex;
  align-self: end;

  position: absolute;
  top: 1.6%;
  right: 4%;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;
export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;
