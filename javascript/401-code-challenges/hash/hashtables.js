'use strict';

const {LinkedList} = require('./LinkedList/linkedlist');

class HashTable{
  constructor(size){
    this.size = size;
    this.buckets= new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum,character)=>{
      return sum + character.charCodeAt(0);
    },0);

    let initialHash = asciiSum * 59;
    return initialHash % this.size;
  }
  set(key,value){
    let index = this.hash(key);
    let data = {[key]: value};
    if (this.buckets[index]){
      let bucket = this.buckets[index];
      bucket.add(data);
    }else{
      let bucket = new LinkedList();

      // add data into the bucket
      bucket.add(data);
      this.buckets[index]= bucket;
    }

  }
  get (key){
    let index = this.hash(key);

    if (this.buckets[index]){
      let bucket = this.buckets[index];
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(key){
    const set = new Set(key);
    set.add('Alice');
    set.add('Eddy');
    set.add('Isabella');
  }

  keys(key){
    

  }

}

let table = new HashTable (1025);

console.log(table);
console.log(table.hash('Mary'));
console.log(table.hash('John'));
table.set('Mary',{name:'Mary', age:24});
table.set('John','John');
table.set('Mary, Mary');
console.log (table);
console.log(JSON.stringify(table.buckets[556]));
console.log(JSON.stringify(table.buckets[991]));
console.log(table.get('Mary'));
console.log(table.get('John'));

