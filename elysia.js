import { Elysia } from "elysia";
import Login from "./pages/login.ts";

const app = new Elysia();

app.get("/", () => new Response(Login(), { headers: { "Content-Type": "text/html" } }));

app.post("/login", async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "abbas@example.com" && password === "1234") {
    return new Response(
      `<h2 style="color:green; text-align:center; margin-top:50px;">Login Successful 🎉${email}</h2>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } else {
    return new Response(
      `<h2 style="color:red; text-align:center; margin-top:50px;">Invalid Credentials ❌</h2>
       <a href="/">Go back to Login</a>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }
});

app.listen(3000);
console.log("✅ Server running at http://localhost:3000");
