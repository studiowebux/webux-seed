# @studiowebux/seed

This module allows to load some default values in the app,
You need to create a specific file for each resources you need.

# Installation

```bash
npm i --save @studiowebux/seed
```

# Usage

### Scheme for the default value
You need to create a file using this scheme to get the script working has expected:  

```
...

const Language = require('../models/language')

const french = () => {
  return new Promise((resolve, reject) => {
    Language.create({
      defaultValue: true,
      name: "Français",
      shortcuts: ["fr", "fr_ca", "fr_fr"]
    }).then(languageCreated => {
      if (!languageCreated) {
        return reject(Error("Fail to create the resource."));
      }
      return resolve('Default language "french" created.');
    });
  });
};

const english = () => {
  return new Promise((resolve, reject) => {
    Language.create({
      defaultValue: false,
      name: "English",
      shortcuts: ["en", "en_us", "en_ca"]
    }).then(languageCreated => {
      if (!languageCreated) {
        return reject(Error("Fail to create the resource."));
      }
      return resolve('Default language "english" created.');
    });
  });
};
};

module.exports = Promise.all([french(), english()]);
```

You have to do the same thing for all of your resources,  

#### How to load the files in a specific order
append 00_, 01_, ... in front of your file name (For more details, check the examples directory)  


### Example

directory  
```
defaults
    00_language.js
    01_role.js
index.js
```

index.js  
```
const webuxSeed = require("@studiowebux/seed");
const path = require("path");

webuxSeed(path.join(__dirname, "defaults"))
  .then(() => {
    console.log("FInished !");
  })
  .catch(e => {
    console.error(e);
  });

```

or  
index.js  
```
const webuxSeed = require("@studiowebux/seed");
const path = require("path");

async function loadApp() {
  try {
    console.log("Loading Modules and create the APP...");

    const loaded = await webuxSeed(path.join(__dirname, "defaults"));

    if (!loaded) {
      throw new Error("Seed not Loaded");
    }

    console.log(loaded);

    console.log("Continue to load module / Start server ...");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

try {
  loadApp();
} catch (e) {
  throw e;
}

```

OUTPUT:  
```bash
1. Getting all the default value files in /Users/tgingras/Documents/Studiowebux/webux-seed/examples/defaults.
1.1. Processing file : 00_language.js
Language created !
Language created !
1.2. File 00_language.js Loaded
1.1. Processing file : 01_role.js
Role created !
Role created !
Role created !
1.2. File 01_role.js Loaded
2. All default values loaded from the directory.
Finished !
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
SEE LICENSE IN license.txt