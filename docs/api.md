# API Documentation

## Base URL
http://localhost:3000/api

---

## Posts

### GET /posts
Get all posts

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