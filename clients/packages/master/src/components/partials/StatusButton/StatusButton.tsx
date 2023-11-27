import { Status } from '@/types/client';
import { Button } from './styles';

export interface StatusProps {
  status: Status;
  onClick?: () => void;
}

export const StatusButton = ({ status, onClick }: StatusProps) => {
  return (
    <Button onClick={onClick} status={status}>
      {Status[status]}
    </Button>
  );
};
