export default function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px'
    }}>
      <img src={user.avatar} alt={user.first_name} width={50} />
      <div>
        <strong>{user.first_name} {user.last_name}</strong><br />
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    </div>
  );
}