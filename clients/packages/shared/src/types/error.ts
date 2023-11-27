import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type IError<T> = Merge<FieldError, (Merge<FieldError, FieldErrorsImpl<T>>)>;
