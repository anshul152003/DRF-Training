import Gallery from './components/Gallery.jsx';
import React, { useState } from 'react';

function App() {
  const [images] = useState([
    {
    "filename": "IMG_593265.jpg",
    "date": "7/11/19",
    "size": "6.8 mb",
    "url": "https://imgs.search.brave.com/MFo2J0Im9atNzkoeUDPWzKJbYKqvTJuGx6AE1Kn8fyM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MDcxMTYyOC9waG90/by9jb3BlbmhhZ2Vu/LWRlbm1hcmsuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRv/REJUekx6UDVNcGxZ/OFdSRVF2dV9SRlp1/WnplR1pMZEtPandQ/WHBuTjg9"
  },
  {
    "filename": "IMG_461207.jpg",
    "date": "7/27/13",
    "size": "3.4 mb",
    "url": "https://imgs.search.brave.com/d8kpJy6XtJSqD4z3trhKsNE719VSqIe8ZYEt37NnXOA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MTU5ODIwNC9waG90/by9tb2Rlcm4tZ2xh/c3Mtb2ZmaWNlLWJ1/aWxkaW5nLXdpdGgt/YnVzaW5lc3MtcGVv/cGxlLWZyb20tYWJv/dmUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXZFLTJqMFFK/Z3ROa01pZ0JxbkZG/VjNFb2NNRXhDcjNH/cFVfbmVpYVF2b0U9"
  },
  {
    "filename": "IMG_113410.jpg",
    "date": "5/27/15",
    "size": "3.2 mb",
    "url": "https://imgs.search.brave.com/t-m8qSsITDpYzN4y-kwjnDsyoM0TElnP9-MqBLdIjkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA0/MzkwOTgwL3Bob3Rv/L2Fic3RyYWN0LWNv/bnRlbXBvcmFyeS1h/cmNoaXRlY3R1cmUt/cGhvdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWRqLUU2/a0ZxRFUyYndZTVl0/WktFSmg1bFlycnFm/TlR6aVFzRGpDVUxX/OHc9"
  },
  {
    "filename": "IMG_773337.jpg",
    "date": "5/19/12",
    "size": "7.6 mb",
    "url": "https://imgs.search.brave.com/fkF5dD7l0vXo-qjDSFdHkFE0mSnMysRkAs9qbTuH5Ww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/NDQwNjA3L3Bob3Rv/L21vZGVybi1vZmZp/Y2UtYXJjaGl0ZWN0/dXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz12bnlTT3FI/VndlQjFDcjZYY0hq/VkpzcXpXc2o0WFVm/dDF2YThUQWFack1r/PQ"
  },
  {
    "filename": "IMG_188184.jpg",
    "date": "5/7/16",
    "size": "5.8 mb",
    "url": "https://imgs.search.brave.com/h9gQsBKtwTlO9wqGmH9WNT0iScTo5QCv3zzlliznIx8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/ODYwNDc0Ni9waG90/by9naGVya2luLWJ1/aWxkaW5nLWV4dGVy/aW9yLWFic3RyYWN0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz02ZmpwVnBNY0FS/OWdDODZNNmFSanM2/Ym5PMEQzWUtqcGhB/UkZSbWpnMXdJPQ"
  },
  {
    "filename": "IMG_328513.jpg",
    "date": "8/15/17",
    "size": "7.8 mb",
    "url": "https://imgs.search.brave.com/Tvv3nHTGecMj3Sqg5opQC9h9YG1mB1KeZuN6s3uNavo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMz/NDM3NjYyL3Bob3Rv/L2Fic3RyYWN0LWFy/Y2hpdGVjdHVyYWwt/cGF0dGVybi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZW54/dHBkWllmVDUwUkdS/UlB3NmdPRjBNWWIx/cVR1TmZfb3AyWVh5/YXVpST0"
  },
  {
    "filename": "IMG_798731.jpg",
    "date": "7/18/17",
    "size": "7.6 mb",
    "url": "https://imgs.search.brave.com/mElnwUNKCbUT7pGcJ6b7gyHjTTEFyvljKCtjfgJ5rQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/MzUwMzY2L3Bob3Rv/L2dsYXNzLXdhbGxz/LWluLWF0cml1bS1v/Zi1vZmZpY2UtYnVp/bGRpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWp3NjNU/SVNvaGcxX1UzZl9N/MEMwRUVsLWhzeVBI/S1psRU03RGlaM19i/alk9"
  },
  {
    "filename": "IMG_891769.jpg",
    "date": "10/6/13",
    "size": "5.5 mb",
    "url": "https://imgs.search.brave.com/cyF5pXNUr6dEl9NgWyQ8IHCSkDv5qUZlf1_paGZ4zj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MzA3NjMxNy9waG90/by9tb2Rlcm4tYnVp/bGRpbmctd2l0aC1z/cXVhcmUtYmFsY29u/aWVzLXNlZW4tZnJv/bS1iZWxvdy1tb2Rl/cm4tYXJjaGl0ZWN0/dXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cTQ0STR0/Z3lPbmVPc3lVNHp0/bk1LV25MYjEwYkJS/VVZtR25fWDkzUDFR/PQ"
  },
  {
    "filename": "IMG_569738.jpg",
    "date": "1/31/14",
    "size": "5.7 mb",
    "url": "https://imgs.search.brave.com/Ua9fU4BoAHGUTR0yLMtWBhhuBv4J0RbJ_VzbcFdWnnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvc2Ix/MDA2NTcxOGktMDAx/L3Bob3RvL2FyY2hp/dGVjdHVyYWwtbW9k/ZWwtY2xvc2UtdXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTlsYkxsNlBSNzZQ/UENadlhIcHFDak1C/aWp3NUpSYzB6VUgy/Z1o1bl9UQW89"
  },
  {
    "filename": "IMG_287745.jpg",
    "date": "9/23/16",
    "size": "7.2 mb",
    "url": "https://imgs.search.brave.com/DFPlG_0n43rqeo5SSCz-whZXNhSctiQqSrcWOfp1iPs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NjkzOTAzMi9waG90/by9hLXBlcnNvbi1p/bi1hLXJlZC1jdXJ2/ZWQtYWJzdHJhY3Qt/YXJjaGl0ZWN0dXJh/bC1zcGFjZS0zZC1y/ZW5kZXJpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVFQ/bDloTDhkaDd3QjVR/TklGUkd4RW5CRWdJ/aXIxZHhNb19xRkJw/b3hQbmc9"
  }
    ]);
    console.log(images);
    return (
        <div className='flex-container'>
            {images?.map((event,index) => ( <div key={index}><Gallery setingData={event}/></div>))}
        </div>
    );    
}

export default App;
