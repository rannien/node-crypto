import { Block, Blockchain } from '../src/index.js';

test('infinite truth', () => {
  expect(true).toBe(true);
});

test('genesis block should be generated automatically', () => {
  const testCoin = new Blockchain();
  expect(testCoin.getLatestBlock().index).toBe(0);
});

test('it should create a new block', async () => {
  const testCoin = new Blockchain();
  const genesisBlockHash = testCoin.getLatestBlockHash();
  testCoin.addNewBlock(
    new Block(
      1,
      {
        sender: 'Frank Joseph',
        recipient: 'LogRocket',
        quantity: 25,
      },
      testCoin.getLatestBlockHash()
    )
  );

  expect(testCoin.getLatestBlock().index).toBe(1);
  expect(testCoin.getLatestBlock().previousHash).toBe(genesisBlockHash);
});

test('chain must be valid', () => {
  const testCoin = new Blockchain();
  testCoin.addNewBlock(
    new Block(
      1,
      {
        sender: 'Frank Joseph',
        recipient: 'LogRocket',
        quantity: 25,
      },
      testCoin.getLatestBlockHash()
    )
  );
  expect(testCoin.validateChainIntegrity()).toBeTruthy();
});

test('chain must be invalid when the given hash is invalid', () => {
  const testCoin = new Blockchain();
  testCoin.addNewBlock(
    new Block(
      1,
      {
        sender: 'Frank Joseph',
        recipient: 'LogRocket',
        quantity: 25,
      },
      'xxxx'
    )
  );
  expect(testCoin.validateChainIntegrity()).toBeFalsy();
});
