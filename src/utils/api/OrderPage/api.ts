/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5000',
});

export async function fetchImage() {
  try {
    const res = await client.get('products');
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
