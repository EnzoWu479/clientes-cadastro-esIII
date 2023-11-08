import { styled } from 'styled-components';
import { ButtonModel, SectionTitleModel, TitleModel } from '@ecommerce/shared';

export const Title = styled(TitleModel)``;
export const PhoneInput = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
`;

export const SectionTitle = styled(SectionTitleModel)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const PersonalDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const PersonalDataLine = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
export const PhoneWrapper = styled(PersonalDataLine)`
  width: fit-content;
  flex-direction: column;
  gap: 0;
`;
export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light2};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: grid;
    gap: 1rem;
  }

  div:nth-child(1) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  div:nth-child(2) {
    grid-template-columns: 1fr 1fr;
  }
  div:nth-child(3) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  div:nth-child(4) {
    grid-template-columns: 1fr;
  }
`;
export const AddressAddButton = styled(ButtonModel)`
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
