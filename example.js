var tree = {
  1: {
    A: {
      a: () => 1,
      b: () => 1,
    }
  },
  2: {
    A: {
      a: () => 2,
      c: () => 1
    },
    C: {
      p: () => 4
    }
  },
  3: {
    A: {
      a: () => 3,
      b: () => 3
    }
  },
  4: {
    B: {
      f: () => 4
    }
  }
};
fillObjectTree(tree);

console.log(tree);




// just copy-pasted code from function.js
function fillObjectTree(versions) {
  let modelsNames = [];
  let methodsNames = [];
  let lastRelease;
  for (let release in versions) {
    for (let model of modelsNames) {
      if (!versions[release][model] && versions[lastRelease][model]) {
        versions[release][model] = versions[lastRelease][model];
      }
      for (let method of methodsNames) {
        if (!versions[release][model][method] && versions[lastRelease][model][method]) {
          versions[release][model][method] = versions[lastRelease][model][method];
        }
      }
    }
    lastRelease = release;

    for (let model in versions[release]) {
      if (!modelsNames.includes(model)) {
        modelsNames.push(model);
      }
      for (let method in versions[release][model]) {
        if (!methodsNames.includes(method)) {
          methodsNames.push(method);
        }
      }
    }
  }
}
