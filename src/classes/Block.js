import sha256 from 'crypto-js/sha256'

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
    return sha256(content).toString();
  }
}
