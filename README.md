# Advella Admin WebApp

Administration panel for management for Advella WebApp and App. Part of bachelor project

## Pages
| Page Name | Designed | Functional |
| --------- | -------- | ---------- |
| [404 Page](https://admin.advella.popal.dev/404) | :white_check_mark: | :white_check_mark: |
| [Login Page](https://admin.advella.popal.dev/) | :white_check_mark: | :white_check_mark: |
| [General Dashboard Page](https://admin.advella.popal.dev/dashboard) | :white_check_mark: | :white_check_mark: |
| [Users Dashboard Page](https://admin.advella.popal.dev/dashboard/users) | :white_check_mark: | :construction: |
| [Products Dashboard Page](https://admin.advella.popal.dev/dashboard/products) | :white_check_mark: | :construction: |
| [Services Dashboard Page](https://admin.advella.popal.dev/dashboard/services) | :white_check_mark: | :white_check_mark: |
| [Products Categories Page](https://admin.advella.popal.dev/category/products) | :white_check_mark: | :white_check_mark: |
| [Services Categories Page](https://admin.advella.popal.dev/category/services) | :white_check_mark: | :white_check_mark: |
| [All Users Page](https://admin.advella.popal.dev/users) | :white_check_mark: | :construction: |
| [All Products Page](https://admin.advella.popal.dev/products) | :white_check_mark: | :construction: |
| [All Services Page](https://admin.advella.popal.dev/services) | :white_check_mark: | :construction: | 
| [All Messages Page](https://admin.advella.popal.dev/messages) | :white_check_mark: | :construction: |

## GitHub

### Actions

There are 2 actions present. One is triggered on each new created Pull Request on Main, which tries to build repostiory and also does testing for each defined story (see bellow). 

Second action is triggered only, when PR is merged to main. This triggeres deploy and deploys code to the server. Once this workflow is done, changes can be visible on [advella website](https://admin.advella.popal.dev/)

## Testing

### Storybook

Each page and component are defined as stories in Storybook. These are then tested in chromatic. Storybook stories are available in /src/_stories. Storybook is also deployed as [Github Pages](https://group27-endgame.github.io/advella-frontend-webapp-admin/)

### Chromatic

Testing is done with Storybook and Chromatic. Before each pull request, chromatic is triggered. If any changes are present, they are visible and must be approved.
