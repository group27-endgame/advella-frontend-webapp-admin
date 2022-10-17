# Advella Admin WebApp

Administration panel for management for Advella WebApp and App. Part of bachelor project

## Pages

- [404 Page](https://admin.advella.popal.dev/404)
- [Login Page](https://admin.advella.popal.dev/)
- [Dashboard Page](https://admin.advella.popal.dev/dashboard)
- [Users Dashboard Page](https://admin.advella.popal.dev/dashboard/users)
- [Products Dashboard Page](https://admin.advella.popal.dev/dashboard/products)
- [Services Dashboard Page](https://admin.advella.popal.dev/dashboard/services)
- [All Users Page](https://admin.advella.popal.dev/users)
- [All Products Page](https://admin.advella.popal.dev/products)
- [Products Bids Page](https://admin.advella.popal.dev/products/bids)
- [All Services Page](https://admin.advella.popal.dev/services)
- [Services Bids Page](https://admin.advella.popal.dev/services/bids)
- [Highlighted Page](https://admin.advella.popal.dev/top)
- [All Messages Page](https://admin.advella.popal.dev/messages)

## GitHub

### Actions

There are 2 actions present. One is triggered on each new created Pull Request on Main, which tries to build repostiory and also does testing for each defined story (see bellow). 

Second action is triggered only, when PR is merged to main. This triggeres deploy and deploys code to the server. Once this workflow is done, changes can be visible on [advella website](https://admin.advella.popal.dev/)

## Testing

### Storybook

Each page and component are defined as stories in Storybook. These are then tested in chromatic. Storybook stories are available in /src/_stories. Storybook is also deployed as [Github Pages](https://group27-endgame.github.io/advella-frontend-webapp-admin/)

### Chromatic

Testing is done with Storybook and Chromatic. Before each pull request, chromatic is triggered. If any changes are present, they are visible and must be approved.
