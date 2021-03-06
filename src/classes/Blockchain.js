import { Block } from './Block.js';

export class Blockchain {
  constructor() {
    this.blockchain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, 'first block on the chain', '0');
  }

  getLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  getLatestBlockHash() {
    return this.getLatestBlock().hash;
  }

  addNewBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlockHash();
    this.blockchain.push(newBlock);
  }

  validateChainIntegrity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const previousBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }
      
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
