import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../slices/User';
import './Page.css';                    
import harshPhoto from '../assets/harsh.jpg'; 

export default function UserPage() {
  const { name, age, email, photo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = () =>
    dispatch(
      changeUser({
        name : 'Harsh Rathore',
        age  : 28,
        email: 'HRgrowtech@gmail.com',
        photo: harshPhoto,
      })
    );

  return (
    <section className="details">
      <h2>User Details</h2>
      <div className="profile">
        <img src={photo} alt={name} className="avatar" />
        <div className="info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age :</strong> {age}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
      <button onClick={handleChange}>Change User</button>
    </section>
  );
}
