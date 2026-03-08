# API Documentation

## Base URL
http://localhost:3000/api

---

## Posts

### GET /posts
Get all posts from memory array

**Response**
```
[
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "status": "draft | published | archived",
    "createdAt": "string",
    "updatedAt": "string"
  }
]
```

---

### GET /posts/:id
Get a single post by ID

**Response**
```
{
  "id": "string",
  "title": "string",
  "content": "string",
  "status": "draft | published | archived",
  "createdAt": "string",
  "updatedAt": "string"
}
```
### GET /posts/:id/with-comments
Retrieve a single post along with all related comments.

**Response**
```
{
  "id": 1,
  "title": "My First Blog",
  "content": "Hello NestJS World!",
  "author": "Winner",
  "status": "published",
  "tags": ["tech"],
  "createdAt": "2026-03-08T10:00:00.000Z",
  "updatedAt": "2026-03-08T10:00:00.000Z",
  "comments": [
    {
      "id": 1,
      "postId": 1,
      "author": "User A",
      "content": "Great post!",
      "createdAt": "2026-03-08T11:00:00.000Z"
    },
    {
      "id": 2,
      "postId": 1,
      "author": "User B",
      "content": "Very helpful, thanks!",
      "createdAt": "2026-03-08T11:30:00.000Z"
    }
  ]
}
```

---

### POST /posts
Create a new post

**Request**
```
{
  "title": "string",
  "content": "string"
}
```

**Response**
```
{
  "id": "string",
  "title": "string",
  "content": "string",
  "status": "draft",
  "createdAt": "string",
  "updatedAt": "string"
}
```

---

### PUT /posts/:id
Update a post

**Request**
```
{
  "title": "string",
  "content": "string",
  "status": "draft | published | archived"
}
```

**Response**
```
{
  "id": "string",
  "title": "string",
  "content": "string",
  "status": "draft | published | archived",
  "createdAt": "string",
  "updatedAt": "string"
}
```

---

### DELETE /posts/:id
Delete a post

**Response**
```
{
  "success": true
}
```

---

## Comments

### GET /posts/:postId/comments
Get all comments for a post

**Response**
```
[
  {
    "id": "string",
    "postId": "string",
    "author": "string",
    "content": "string",
    "createdAt": "string"
  }
]
```

---

### POST /posts/:postId/comments
Create a comment for a post

**Request**
```
{
  "author": "string",
  "content": "string"
}
```

**Response**
```
{
  "id": "string",
  "postId": "string",
  "author": "string",
  "content": "string",
  "createdAt": "string"
}
```

---

### DELETE /posts/:postId/comments/:id
Delete a comment

**Response**
```
{
  "success": true
}
```