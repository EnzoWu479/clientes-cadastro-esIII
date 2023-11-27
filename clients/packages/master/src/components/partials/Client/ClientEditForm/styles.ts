import { ButtonModel, SectionTitleModel } from '@ecommerce/ui';
import { styled } from 'styled-components';

export const SectionTitle = styled(SectionTitleModel)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export const PersonalDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const PhoneInput = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;

  &[data-error='true'] {
    input {
      border-color: ${({ theme }) => theme.colors.error};
    }
  }
`;
export const PersonalDataLine = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const SubmitButton = styled(ButtonModel)`
  margin-top: 2rem;
`;
export const SelectWrapper = styled.div`
  min-width: 10rem;
`;
