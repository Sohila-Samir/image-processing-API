# Image Processing API

## this project is a simple back-end application that creats an API for image processing:
- is mainly depending on sharp package for resizing the given images.
- enable cahcing using "node-cache" package.
- creating routes using express and node.js.
- setting up simple ejs template views.
- jasmine and supertest 3rd-party library for endpoint testing.
- TypeScript to impose strict typing on JavaScript.

## in order to get started, you will need to download the following:

### dependencies:
    "ejs": "^3.1.6",
    "express": "^4.17.2",
    "fs": "0.0.1-security",
    "jasmine": "^4.0.2",
    "nodemon": "^2.0.15",
    "sharp": "^0.30.0",
    "supertest": "^6.2.2"


### Dev-dependencies:
    "@types/express": "^4.17.13",
    "@types/jasmine": "^3.10.3",
    "@types/node": "^17.0.16",
    "@types/node-cache": "^4.2.5",
    "@types/prettier": "^2.4.4",
    "@types/sharp": "^0.29.5",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.11.0",
    "@typescript-eslint/parser": "^5.11.0",
    "eslint": "^8.8.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jasmine-spec-reporter": "^7.0.0",
    "node-cache": "^5.1.2",
    "path": "^0.12.7",
    "prettier": "^2.5.1",
    "ts-node": "^10.5.0",
    "typescript": "^4.5.5"

## Instructions
  ### PORT:
  - 2021
  ### useful scripts to run the project:
  - "lint" to run lint only.
  - "prettier" to run prettier only.
  - "build" to compile all TypeScript files into JavaScript.
  - "test" to only start jasmine.
  - "start" to compile TypeScript and start jasmine.
  - "all" if you wish to start everything at once using a single command line with this script.

 ### endpoints:
 - "https://localhost:2021/" (main endpoint)
 - "https://localhost:2021/api/:filename/:width/:height" (image processing endpoint)
 > **run the previous endpoint again to check if caching is working.**
 - "https://localhost:2021/api/:anythingWrong/:width/:height" ('if any error occured' endpoint)

## License

[License](LICENSE.txt)
