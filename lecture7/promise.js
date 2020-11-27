// def
const promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  // cleaning the room

  let isClean = false;

  if (isClean) {
    resolve({ room: 'clean' });
  } else {
    reject('not clean');
  }
});

// new Promise(function(resolve, reject) {
// });

const onResolver = function(fromResolve) {
  const converObjectWithStingifyFromResolve = JSON.stringify(fromResolve);
  console.log(`the room is ${converObjectWithStingifyFromResolve}`);
};

const onRejector = function(fromReject) {
  console.log(`the room is ${fromReject}`);
};


promiseToCleanTheRoom.then(onResolver).catch(onRejector);
