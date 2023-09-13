# Simple Admin Page README

This project provides a simple admin page to manage users from your local PostgreSQL database. Follow the instructions below to set up and run the project:

## Getting Started

### Step 1: Set up environment variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="mystrongsecret"
DATABASE_URL="postgresql://postgres:<Your Password>@localhost:5432/admin?schema=public"
```
### Step 2: Delete the migrations folder
Navigate to the prisma folder and delete the migrations folder.

### Step 3: Install dependencies
Open a terminal and run the following commands:

```
npm install
```
### Step 4: Initialize shadcn-ui
Run the following command to initialize shadcn-ui:

```
npx shadcn-ui@latest init

```

Then just press enter it will automatically checks all file the example be like : 

```
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/app/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed.

```

### Step 5: Important step for daisyui
This will overwrite the daisyui configuration. Ensure that your tailwind.config.js file contains the following:

```
module.exports = {
  // ...
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui")
  ],
};

```

### Step 5: Set up the database schema
Run the following command to create new migrations and connect your PostgreSQL database to your app

```
npx prisma migrate dev --name user_schema

```

### Step 6: Start the development server
Start the development server with the following command:

```
npm run dev

```

### Using the App
Create a new user by navigating to the app and signing up.
1. Sign in with the new user credentials.
2. You will be redirected to the admin dashboard where you can create, edit, and delete users.
3. Note that the login user's data will not be shown on the admin dashboard.
Enjoy using the app! If you've configured the tailwind.config.js correctly with dasyui, the UI will render perfectly.
