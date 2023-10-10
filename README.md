
# Device-sales [![Cult Of Martians][cult-img]][cult]

This is a redesign project by Team MC, which is related to the sales of various products and equipment of AIS (Advanced Info Service Public Company Limited). This project primarily focuses on improving and enhancing the sales processes to increase efficiency and effectiveness in the market for communication devices and services offered by AIS and its partners.

## 

## Monorepos

this project use [monorepo](https://en.wikipedia.org/wiki/Monorepo).
and yarn workspace [yarn](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

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
