/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "chefBg" : "url('./src/assets/home/chef-service.jpg')",
        "loginBg" : "url('./src/assets/others/authentication.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

