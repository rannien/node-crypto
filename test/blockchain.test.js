import Sha256 from '@aws-crypto/sha256-js';
import Blockchain from '../src/classes/Blockchain.js';

test('infinite truth', () => {
  expect(true).toBe(true);
});

test('genesis block should be generated automatically', () => {
  const blockchain = new Blockchain();
  expect(blockchain.index).toBe(0);
});
