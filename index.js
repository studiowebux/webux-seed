// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝██╔════╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║   ███████╗
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║   ╚════██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║   ███████║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚══════╝

/**
 * File: defaultValues.js
 * Author: Tommy Gingras
 * Date: 2019-06-18
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const fs = require("fs");
const path = require("path");

async function eachFile(files, callback) {
  for (const file of files) {
    await callback(file);
  }
}

function LoadFiles(log, directory) {
  return new Promise(async (resolve, reject) => {
    try {
      log.info("1. Getting all the default value files.");
      const files = fs.readdirSync(directory).sort();

      if (!files) {
        return reject(new Error("No files."));
      }

      await eachFile(files, async file => {
        log.info("1.1. Processing file : " + file);
        const processed = await require(path.join(directory, file));

        if (!processed) {
          return reject(new Error("An occur while processing : " + file));
        }

        log.info("1.2 File " + file + " Loaded, " + processed);
      });

      log.info("2. All default values loaded.");
      return resolve();
    } catch (e) {
      return reject(e);
    }
  });
}

module.exports = LoadFiles;
