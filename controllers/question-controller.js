const questionsService
    = require("../services/questions-service")

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid']
    questionsService.findQuestionsForQuiz(quizId)
      .then((questions) => res.json(questions))

  }

  const findQuestionById = (req, res) => {
    const quizId = req.params['qid']
    questionsService.findQuestionById(quizId)
      .then((question) => res.json(question))
  }

  const findAllQuestions = (req, res) => {
    questionsService.findAllQuestions()
      .then((questions) => res.json(questions))
  }


  app.get("/api/questions/:qid", findQuestionById)
  app.get("/api/questions", findAllQuestions)
  app.get("/api/quizzes/:qid/questions",
      findQuestionsForQuiz)
}
