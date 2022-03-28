# Testing massbit staking

## Start prod

```
pm2 start npm --name "test-massbit-staking" -- run start
```

## Setup

```
pm2 deploy staging setup
```

## Deploy

```
pm2 deploy staging update
```
