```markdown
# Data Model Documentation

## 1. Post Structure
The main data entity stored in the in-memory array.

| Property  | Type     | Description |
| :---      | :---     | :---        |
| id        | number   | Unique Identifier (Auto-increment) |
| title     | string   | Heading of the post |
| content   | string   | Main text body |
| author    | string   | Name of the creator (e.g., Winner) |
| status    | string   | Draft or Published |
| createdAt | datetime | Timestamp of creation |

---

## 2. Comment Structure
The entity representing feedback on a post.

| Property  | Type     | Description |
| :---      | :---     | :---        |
| id        | number   | Unique Identifier |
| postId    | number   | Reference to the parent Post ID |
| author    | string   | Name of the commenter |
| content   | string   | Comment message |

---

## 3. Data Relationships
- **Type:** One-to-Many |ความสัมพันธ์แบบ หนึ่ง-ต่อ-กลุ่ม (หมายถึง 1 บทความ สามารถมีคนมาคอมเมนต์ได้หลายคน)
- **Logic:** One **Post** can contain multiple **Comments**.| ตรรกะคือ 1 โพสต์ สามารถบรรจุคอมเมนต์ได้หลายรายการ
- **Link:** Connected via `postId` found in the Comment entity. |การเชื่อมโยงคือ เชื่อมกันด้วย postId