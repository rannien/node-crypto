import Sha256 from '@aws-crypto/sha256-js';

export class Block {
  constructor(index, data, previousHash, timestamp = Date.now()) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }

  generateHash() {
    const content = this.index + this.timestamp + this.previousHash + JSON.stringify(this.data);
    const hash = new Sha256();
    hash.update(content);
    const result = await hash.digest();
    return result.toString();
  }
}
