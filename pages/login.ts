export default function Login() {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    .card {
      background: #fff;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      width: 350px;
      text-align: center;
    }
    input, button {
      width: 100%;
      padding: 12px 20px;
      margin: 10px 0;
      border-radius: 8px;
      font-size: 16px;
    }
    button {
      border: none;
      background: #667eea;
      color: #fff;
      cursor: pointer;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Welcome Back!</h2>
    <form method="POST" action="/login">
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>`;
}
