import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../../models/CourseModel";
import CourseService from "../../../services/CourseService";
import AbilityService from "../../../services/AbilityService";
import AbilityCourseService from "../../../services/AbilityCourseService";
import Ability from "../../../models/AbilityModel";

const CreateAssociationCourseLesson = () => {
  const [course, setCourse] = useState<any>();
  const [ability, setAbility] = useState<any>();
  const [courseId, setCourseId] = useState<any>();
  const [abilityId, setAbilityId] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourse(res.data);
    });
  }, []);

  useEffect(() => {
    AbilityService.getAbilities().then((res) => {
      setAbility(res.data);
    });
  }, []);

  const saveCourseLesson = () => {
    console.log("ability id ", abilityId);
    console.log("course id ", courseId);
    AbilityCourseService.createAbilityCourse(
      abilityId.ability,
      courseId.course
    );
    navigate("/settings_admin");
  };

  const backToSettingsCourseLesson = () => {
    navigate("/settings_admin");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal"> Associate Course with Ability </h3>
        <div>
          <form>
            <div className="form-group">
              <label className="labelModal">Course</label>
              <select
                name="course"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  console.log(Number(e.target.value));
                  setCourseId({
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option selected>Select the Course</option>
                {course?.map((courses: Course, index: any) => {
                  return (
                    <option key={index} value={courses.id}>
                      {courses.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label className="labelModal">Ability</label>
              <select
                name="ability"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setAbilityId({
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option selected>Select the Ability</option>
                {ability?.map((ability: Ability, index: any) => {
                  return (
                    <option key={index} value={ability.id}>
                      {ability.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="containerButtonModal">
            <button className="buttonCheck" onClick={saveCourseLesson}>
              <span className="frontCheck">
                <i className="bi bi-check2"></i>
              </span>
            </button>
            <button
              className="buttonReturn"
              onClick={backToSettingsCourseLesson}
            >
              <span className="frontReturn">
                <i className="bi bi-arrow-left"></i>
              </span>
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssociationCourseLesson;
