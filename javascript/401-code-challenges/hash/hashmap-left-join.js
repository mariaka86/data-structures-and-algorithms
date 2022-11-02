

function leftJoin(synHash, antHash){
  for(let[key,value] of synHash{
  console.log(value)
  let antHash = null
  synHash.has(key) ? synHashValue = synHash.get(key): null
  antHash.set(key ,[value,synHashValue])
  }
  return antHash
  }
