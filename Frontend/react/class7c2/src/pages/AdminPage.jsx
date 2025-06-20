import { useSelector, useDispatch } from 'react-redux';
import { changeAdmin } from '../slices/Admin';

import khushiPhoto from '../assets/khushi.jpg';
import './Page.css';

export default function AdminPage() {
  const { name, age, email, photo } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleChange = () =>
    dispatch(
      changeAdmin({
        name : 'Khushi Patel',
        age  : 35,
        email: 'KhushiBhai@gmail.com',
        photo: khushiPhoto,
      })
    );

  return (
    <section className="details">
      <h2>Admin Details</h2>

      <div className="profile">
        <img src={photo} alt={name} className="avatar" />
        <div className="info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age :</strong> {age}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>

      <button onClick={handleChange}>Change Admin</button>
    </section>
  );
}
