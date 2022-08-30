import classes from "./NewMeetupForm.module.css";

let checkedList = [];

const Checkbox = ({ type, label, index, value, getCheckedList }) => {
  

  const updateCheckStatus = (event) => {
    const { value, checked } = event.target;
    let isIncluded = checkedList.includes(value);

    if (checked === true && !isIncluded) {
      checkedList.push(value);
    } else if (checked === false && isIncluded) {
      checkedList = checkedList.filter((val) => val != value);
    }
    getCheckedList(checkedList,type); 
  };
  
  return (
    <div className={classes.col1}>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        value={value}
        onChange={updateCheckStatus}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};

export default Checkbox;
