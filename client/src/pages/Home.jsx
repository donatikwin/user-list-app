import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/UserService';
import UserCard from '../components/UserCard';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error('Ошибка при загрузке пользователей:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Пользователи: </h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск по имени или email..."
        style={{
          padding: '10px',
          marginBottom: '20px',
          width: '300px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      {loading ? (
        <p>Загрузка...</p>
      ) : filteredUsers.length ? (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <p>Ничего не найдено.</p>
      )}
    </div>
  );
}
