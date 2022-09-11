/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { setupWorker } from 'msw';
import { handlers } from './handlers';

// mocking server 생성
export const worker = setupWorker(...handlers);
