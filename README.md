
# Device-sales [![Cult Of Martians][cult-img]][cult]

This is a redesign project by Team MC, which is related to the sales of various products and equipment of AIS (Advanced Info Service Public Company Limited). This project primarily focuses on improving and enhancing the sales processes to increase efficiency and effectiveness in the market for communication devices and services offered by AIS and its partners.

## Introduction
This project employs a [MONOREPO](https://en.wikipedia.org/wiki/Monorepo). approach, combining client, service, and e2e tests within the same repository. It is managed using Lerna as a tool for monorepo management and utilizes Yarn for package management. The choice of using [ํYARN](https://classic.yarnpkg.com/lang/en/docs/workspaces/). is driven by its simpler workspace handling compared to npm, making it a more suitable option for this monorepo setup.

## Monorepos

this project use 
and yarn workspace 

## Initializing the Project

begin To start

```
.
└── packages
    └── client  #main
    └── service #service main 
    └── e2e-test # automate test 


```

```bash
yarn install # install all packages

yarn clear # delete all node_modules in packages

yarn service # run start only service

yarn client # run start only client

yarn test:service # run all unit tests for service.

yarn test:client # run all unit tests for client side.

yarn e2e-test # run automate test

yarn list # list all package name

```

## Recommend install package
```bash
yarn workspace <workspace_name> <command>
```
