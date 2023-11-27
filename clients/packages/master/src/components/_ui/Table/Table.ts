import {
  TableBodyCellModel,
  TableBodyModel,
  TableBodyRowModel,
  TableHeadCellModel,
  TableHeadModel,
  TableHeadRowModel,
  TableModel,
  TableWrapperModel
} from '@ecommerce/ui';
import { styled } from 'styled-components';

const TableWrapper = styled(TableWrapperModel)``;
const Table = styled(TableModel)``;
const TableHead = styled(TableHeadModel)``;
const TableHeadRow = styled(TableHeadRowModel)``;
const TableHeadCell = styled(TableHeadCellModel)``;
const TableBody = styled(TableBodyModel)``;
const TableBodyRow = styled(TableBodyRowModel)``;
const TableBodyCell = styled(TableBodyCellModel)``;

export default {
  Table,
  Head: TableHead,
  HeadRow: TableHeadRow,
  HeadCell: TableHeadCell,
  Body: TableBody,
  BodyRow: TableBodyRow,
  BodyCell: TableBodyCell,
  Wrapper: TableWrapper
};
