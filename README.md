# Artpear
Artpear is a place where local artist can post their art, skills or services. Seekers can post opportunity information and request artists to display work, photograph or perform at these events. Maybe the opportunity is one-time occasion or a running exposition at a gallery.

This Repo is the Back end for ArtPear using MongoDB and Express JS

Catalog of routes (paths and methods):
#### Artists
| Method | Path                    | CRUD            |
|--------|-------------------------|-----------------|
| GET    | /api/artists            | Read/Index      |
| GET    | /api/artists/:id        | Read/Show       |
| PUT    | /api/artists/:id/edit   | Update/Edit     |
| POST   | /api/artists/register   | Create/Register |
| DELETE | /api/artists/:id/delete | Destroy/Delete  |
#### Seekers
| Method | Path                    | CRUD            |
|--------|-------------------------|-----------------|
| GET    | /api/seekers            | Read/Index      |
| GET    | /api/seekers/:id        | Read/Show       |
| PUT    | /api/seekers/:id/edit   | Update/Edit     |
| POST   | /api/seekers/register   | Create/Register |
| DELETE | /api/seekers/:id/delete | Destroy/Delete  |
#### Opportunities
| Method | Path                          | CRUD            |
|--------|-------------------------------|-----------------|
| GET    | /api/opportunities            | Read/Index      |
| GET    | /api/opportunities/:id        | Read/Show       |
| PUT    | /api/opportnities/:id/edit    | Update/Edit     |
| POST   | /api/opportunities/create   | Create/Register |
| DELETE | /api/opportunities/:id/delete | Destroy/Delete  |
#### Responses
| Method | Path                      | CRUD            |
|--------|---------------------------|-----------------|
| GET    | /api/responses            | Read/Index      |
| GET    | /api/responses/:id        | Read/Show       |
| PUT    | /api/responses/:id/edit   | Update/Edit     |
| POST   | /api/responses/create     | Create/Register |
| DELETE | /api/responses/:id/delete | Destroy/Delete  |


 - [Back end Deployed on Heroku](https://artpear-api.herokuapp.com/api/)

 - [Link to Front-end Repo](https://github.com/patrickthesailorman/artpear-front-end)
