## Branching Strategy

The repository maintains three main branches:

1. **main**

   - Production branch
   - Currently empty/placeholder branch
   - Will contain stable releases in future

2. **dev** - Working code(such as Api call)

   - Development branch
   - Contains bare minimum working code
   - Use this branch to start new projects
   - Includes basic project structure and essential configurations

3. **feature/**
   - Feature branches
   - Used to implement new features
   - Should be created from dev branch
   - Should be merged back to dev branch after completion
   - Should be deleted after merging

## Naming conventions

### Folders

Folder name should be in **kabab-case**

example - todo-list, todo-item

```
src
 - components
  - todo-list
  - todo-item
 - utils
```

### Files

File name should be in **PascalCase**

example - TodoList.tsx,

```
src
 - components
  - todo-list
    - TodoList.tsx
  - todo-item
    - TodoItem.tsx
 - utils
  - StringUtils.ts
```

### Components, Enums, Types, Interfaces

Components, Enums, Types, Interfaces should be in **PascalCase**

```js
// React Component
const Todo = () => {
  //...
};

// Enums
const RequestType = {
  //...
};

// Types
type TodoType = {
  //...
};

// Interfaces
interface TodoInterface {
  //...
}
```

### Variables, Functions, Objects and Object properties

Variables, functions, objects and object properties should be in **camelCase**

```js
// Variables
const todoList = [];

// Functions
const getTodoList = () => {
  //...
};

// Objects and Object properties
const todo = {
  id: 1,
  name: "Todo 1",
};
```

## Constants, Enum Properties and Global Variables

Constants, enum properties and global variables should be in **SCREAMING_SNAKE_CASE** (All Capital Letters and Underscores)

```js
// Constants
const MAX_TODO_COUNT = 10;

// Enum Properties
const RequestType = {
  //...
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

// Global Variables
const API_URL = "https://api.example.com";
```

## Flat folder structure (keep the structure clean)

```
src
  - api
    - ApiInstance.ts
  - assets
    - images
      - logo.png
    - animations
      - loading.gif
    - fonts
      - font.ttf
  - common
    - constants
      - Constants.ts
      - Endpoints.ts
      - Enums.ts
    - types
      - Types.ts
    - dtos
      - UserDto.ts
  - components
    - todo-list
      - TodoList.tsx
  - pages
      - Dashboard.tsx
  - providers
    - AuthProvider.tsx
  - router
    - Router.tsx
    - GuardedRoute.tsx
  - services
    - AuthService.ts
    - TodoService.ts
  - store
    - Store.ts
    - QueryInstance.ts
  - styles
    - Global.css
  - utils
    - StringUtils.ts
```
