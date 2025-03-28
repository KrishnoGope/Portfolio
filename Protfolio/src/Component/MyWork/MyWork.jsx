import './MyWork.css';
import work1 from '../../assets/work1.svg';
import work2 from '../../assets/work2.svg';
import work3 from '../../assets/work3.svg';
import work4 from '../../assets/work4.svg';
import work5 from '../../assets/work5.svg';
import work6 from '../../assets/work6.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const mywork_data = [
  { w_no: 1, w_name: 'Work-1', w_img: work1 },
  { w_no: 2, w_name: 'Work-2', w_img: work2 },
  { w_no: 3, w_name: 'Work-3', w_img: work3 },
  { w_no: 4, w_name: 'Work-4', w_img: work4 },
  { w_no: 5, w_name: 'Work-5', w_img: work5 },
  { w_no: 6, w_name: 'Work-6', w_img: work6 }
];

const MyWork = () => {
  return (
    <div id='work' className='mywork text-center'>
      <div className='mywork-title'>
        <h1>My Work in Motion</h1>
      </div>
      <div className='row g-4 mywork-container'>
        {mywork_data.map((work, index) => (
          <div key={index} className='col-12 col-sm-6 col-md-4'>
            <img src={work.w_img} alt={work.w_name} className='img-fluid work-img' />
          </div>
        ))}
      </div>
      <div className='mywork-showmore d-flex align-items-center justify-content-center'>
        <p className='mb-0'>Show More</p>
        <img src={arrow_icon} alt='Show More' className='ms-2' />
      </div>
    </div>
  );
};

export default MyWork;