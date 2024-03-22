import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";
import './CreateLesson.css'

const CreateLesson = () => {
  const [lesson, setLesson] = useState<Lesson>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [createDisabled, setCreateDisabled] = useState(true);
  const navigate = useNavigate();

  const saveLesson = () => {
    if (titleError) {
      return;
    }

    LessonService.createLesson(lesson!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    const { name, value } = event.target;
    const inputValue = value;
    const inputLength = inputValue.length;

    if (name === 'title' && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage('Title must be between 1 and 255 characters');
    } else {
      setError(false);
      setErrorMessage('');
    }

    setLesson({
      ...lesson!,
      [name]: inputValue
    });

    setCreateDisabled(inputLength === 0 || titleError);
  };

  return (
    <div>
      <div>
        <h3> Create Lesson </h3>
        <div>
          <form>
            <div>
              <label>Title</label>
              <input
              type="string"
                placeholder={lesson?.title}
                name="title"
                className={`form-control ${titleError ? 'border-red-500' : ''}`}
                value={lesson?.title}
                onChange={(e) => handleInputChange(e, setTitleError, setTitleErrorMessage)}
              ></input>
              {titleErrorMessage && <p className="text-muted">{titleErrorMessage}</p>}
            </div>
            <div>
              <label>backgroundImage</label>
              <input
                type="string"
                placeholder="backgroundImage"
                name="backgroundImage"
                className="form-control"
                value={lesson?.backgroundImage}
                onChange={(e) => {
                  setLesson({
                    ...lesson!,
                    [e.target.name]: e.target.value,
                  });
                }}
              ></input>
            </div>
            <button className='btn btn-success' disabled={createDisabled} onClick={saveLesson}>add</button>
            <button className='btn btn-danger' onClick={backToSettings}>back</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;