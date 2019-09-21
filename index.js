// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝██╔════╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║   ███████╗
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║   ╚════██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║   ███████║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚══════╝

/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-06-18
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const fs = require("fs");
const path = require("path");

/**
 * Create a sequence to process all the files within a given directory.
 * @param {Array} files The list of files to process, mandatory
 * @param {Function} callback
 * @return {VoidFunction} The actual file to process.
 */
async function eachFile(files, callback) {
  for (const file of files) {
    await callback(file);
  }
}
/**
 * Load all default values within a directory
 * @param {String} directory The absolute directory path, mandatory
 * @param {Function} log The log function, optional
 * @return {VoidFunction} Only create the default values in the DB
 */
function LoadFiles(directory, log = console) {
  return new Promise(async (resolve, reject) => {
    try {
      log.info(
        "Webux-seed - Getting all the default value files in " + directory + "."
      );
      const files = fs.readdirSync(directory).sort();

      if (!files) {
        return reject(new Error("No files are available in that directory."));
      }

      await eachFile(files, async file => {
        if (file.indexOf(".js") > 0) {
          log.info("Webux-seed - Processing file : " + file);
          const processed = await require(path.join(directory, file));

          if (!processed) {
            return reject(
              new Error("An error occur while processing : " + file)
            );
          }

          log.info(`File ${file} processed with success`);
        }
      });

      log.info("Webux-seed - All default values loaded from the directory.");
      return resolve("All default values loaded from the directory");
    } catch (e) {
      return reject(e);
    }
  });
}

module.exports = LoadFiles;
