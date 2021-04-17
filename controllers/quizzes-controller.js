const quizService = require('../services/quiz-service')

module.exports = (app) => {

  const findAllQuizzes = (req, res) =>
      quizService.findAllQuizzes()
        .then(quizzes => res.json(quizzes))


  const findQuizById = (req, res) => {
    const quizId = req.params['qid']
    quizService.findQuizById(quizId)
        .then((quiz) => res.json(quiz))

  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:qid', findQuizById)
}
