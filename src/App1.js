import { useState, useEffect } from 'react';

//feedback form

// What are the two props you need to add when creating a controlled range component?
// The value prop is used to hook the local state up and onChange prop is used to receive the changes and update the state accordingly

function App1(props) {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');

  console.log(`${props.name}`);

  const { name } = props;

  //why does name disappear for props.name in handlesubmit, but not when i destructure {name}
  //only works with const { name } = props console.log(props.name) or if i pass App1({name}) and console.log(name)

  //note: issue is that i setName('') after the handleSubmit in App.js, it doesn't persist in local storage.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please elaborate on the poor score');
      return;
    }
    console.log(`Score submitted ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label>Score {score}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            disabled={Number(score) <= 5 && comment.length <= 10}
            type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App1;
