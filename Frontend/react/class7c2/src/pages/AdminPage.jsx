import { useSelector, useDispatch } from 'react-redux';
import { changeAdmin } from '../slices/Admin';
import '../components/NavBar.css'

export default function AdminPage() {
  const { name, age, email } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(
      changeAdmin({
        name: 'Priya Sharma',
        age: 30,
        email: 'priya@company.com',
      })
    );
  };

  return (
    <section className="details">
      <h2>Admin Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={handleChange}>Change Admin</button>
    </section>
  );
}
