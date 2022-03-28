# User Management Service

## Start prod

```
pm2 start npm --name "massbit-portal" -- run start
```

## Setup

```
pm2 deploy staging setup
```

## Deploy

```
pm2 deploy staging update
```
