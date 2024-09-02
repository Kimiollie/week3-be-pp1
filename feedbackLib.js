/* {
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
} */

let feedbacks = [];

let nextId = 1;

const getAll = () => {
    return feedbacks;
}

const addOne = (sender, message, rating) => {
    if (!sender || !message || !rating) {
        return false
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating
    };
    feedbacks.push(newFeedback)
    return newFeedback;
}

const findById = (id) => {
    const feedback = feedbacks.find((feedback) =>  feedback.id === Number(id));
    return feedback ? feedback : false;
}

const updateById = (id, updatedData) => {
    const feedback = findById(id);
    if (feedback) {
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
    return false;
}

const deleteById = (id) => {
    const feedback = findById(id);
    if (feedback) {
        const initialLength = feedbacks.length;
        feedbacks = feedbacks.filter((feedback) => feedback.id !== Number(id));
        return feedbacks.length < initialLength;
    }
}

if (require.main === module) {
  console.log("getAll called:", getAll());
  console.log("addOne called: " ,addOne("John Smith", "Great session on React components! I found the examples very helpful.",5))
  console.log("findById called: ", findById(1));
  console.log(
    "updateById called: ",
    updateById(
      1, {
        sender: "Kim",
        message: "lalala",
        rating: 5
      }   
    )
  );
  console.log("deleteById called: ", deleteById(1))
}

Feedback = {
    getAll,
    addOne,
    findById,
    updateById,
    deleteById
}

module.exports = Feedback;