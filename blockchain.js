class Block {
    constructor(data){
        this.data = data; 
    }
}

//List of hashed blocks 
blockchain = {}

class BlockChain {
    constructor(block){
        this.chain = []; 
        this.addToChain(block); 
    }

    addToChain(block){
        this.chain.push(hash(block.data)); 
    }

    print(){
        print(this.chain); 
    }
}

function test(){
    const b1 = new Block("Alissa gave 3 doggo coins to Jerry."); 
    const chain = new BlockChain(b1); 
    const b2 = new Block("Alissa bought a house, 483 Shannon Dr."); 
    chain.addToChain(b2); 
    const b3 = new Block("The 2000 vw beetle with VIN 33279283 was transferred to John."); 
    chain.addToChain(b3); 

    chain.print(); 
}

test(); 