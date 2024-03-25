import Header from "../header/Header";
import "./SettingsTutor.css";
import ButtonCreateAssociationCourseLesson from "./buttonSettingsTutor/ButtonCreateAssocationCourseLesson";
import ButtonQuizResults from "./buttonSettingsTutor/ButtonQuizResults";
import ButtonCreateAssociationQuizLesson from "./buttonSettingsTutor/ButtonCreateAssocationQuizLesson";
import ButtonCreateAssociationQuizQuestion from "./buttonSettingsTutor/ButtonCreateAssocationQuizQuestion";
import ButtonCreateQuiz from "./buttonSettingsTutor/ButtonCreateQuiz";
import ButtonCreateAssociationQuestionAnswer from "./buttonSettingsTutor/ButtonCreateAssocationQuestionAnswer";
import ButtonCreateQuestion from "./buttonSettingsTutor/ButtonCreateQuestion";
import ButtonCreateAnswer from "./buttonSettingsTutor/ButtonCreateAnswer";
import ButtonCreateContent from "./buttonSettingsTutor/ButtonCreateContent";
import ButtonCreateAssociationContentLesson from "./buttonSettingsTutor/ButtonCreateAssocationContentLesson";

const SettingsTutor = () => {
    return (
        <>
            <Header />
            <div className={`containerSettingsTutor`}>
                <div>
                    <h1>Settings </h1>
                </div>
                <div className={`sectionContainer`}>
                    <div className={`containerOptions`}>
                        <p>Create section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Quiz</p>
                            <ButtonCreateQuiz />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Question</p>
                            <ButtonCreateQuestion />
                        </div>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Answer</p>
                            <ButtonCreateAnswer />
                        </div>

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Create Content</p>
                            <ButtonCreateContent />
                        </div>
                    </div>
                    <div className={`containerOptions`}>
                        <p>Associate section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Course to Lesson</p>
                            <ButtonCreateAssociationCourseLesson />
                        </div>

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Content to Lesson</p>
                            <ButtonCreateAssociationContentLesson />
                        </div>

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Quiz to Lesson</p>
                            <ButtonCreateAssociationQuizLesson />
                        </div>                        

                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Question to Answer</p>
                            <ButtonCreateAssociationQuestionAnswer />
                        </div>
                        
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>Associate Question to Quiz</p>
                            <ButtonCreateAssociationQuizQuestion />
                        </div>


                    </div>
                    <div className={`containerOptions`}>
                        <p>View section</p>
                        <div className={`optionSettings`}>
                            <p className={`descriptionOptionSettings`}>View Result Quiz</p>
                            <ButtonQuizResults />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SettingsTutor;