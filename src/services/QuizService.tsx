import axios from "axios";
import Cookies from "js-cookie";
import Course from "../models/QuizModel";

const API_BASE_URL =
  "http://localhost:8080/nfc-learning";

const VERSION_URI = API_BASE_URL + "/v1";

const QUIZ_URI = VERSION_URI + "/quiz";

const GET_BY_ID = QUIZ_URI + "/find-by-id";

const SEND_QUIZ = VERSION_URI + "/quiz-student-result/calculate-and-save";

const RESEND_QUIZ = VERSION_URI + "/quiz-student-result/quiz-redo";

const CHECK_QUIZ = VERSION_URI + "/quiz-student-result/check";

const token = Cookies.get("jwt-token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const QuizService = {
  getQuizById(quizId: number | undefined) {
    return axios.get(GET_BY_ID + "/" + quizId, { headers: { Authorization: `Bearer ${token}` } })
  },

  sendQuizResult(quizId: number, answersMap: any) {
    const url = `${SEND_QUIZ}?quizId=${quizId}`;
    return axios.post(url, { answersMap }, { headers: { Authorization: `Bearer ${token}` } });
  },

  reSendQuizResult(quizId: number, answersMap: any) {
    const url = `${RESEND_QUIZ}?quizToRedo=${quizId}`;
    return axios.put(url, { answersMap }, { headers: { Authorization: `Bearer ${token}` } });
  },
  
  checkQuizResult(quizId: number) {
    const url = `${CHECK_QUIZ}?quizId=${quizId}`;
    return axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
  }




}






export default QuizService;