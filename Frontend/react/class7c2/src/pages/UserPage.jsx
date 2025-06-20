import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../slices/User';
import '../components/NavBar.css'

export default function UserPage() {
  const { name, age, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(
      changeUser({
        name: 'Karan Verma',
        age: 28,
        email: 'karan@gmail.com',
      })
    );
  };

  return (
    <section className="details">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={handleChange}>Change User</button>
    </section>
  );
}
