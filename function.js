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
