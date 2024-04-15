const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('', {
        username,
        password,
        userType,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      setUser(user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
        <option value="engineer">Engineer</option>
      </select>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};