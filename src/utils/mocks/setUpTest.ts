/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { server } from './server';
import '@testing-library/jest-dom';

export function mockServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());
}
