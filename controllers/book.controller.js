const Book = require('../models/book.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//find a book by id, if its on url or retrive all
exports.book_details = function (req, res) {
    Book.findById(req.params.id, function (err, book, next) {
        if (err) return next(err);
        res.send(book);
    })
};

//retive all books on db
exports.book_all = function (req, res){
    Book.find({},function (err, books, next){
        if (err) return next(err);
        res.send(books);
    })
}

//create Book on db
exports.book_create = function (req, res) {
    console.log('trying to create');
    console.log(req.body);
    let book = new Book(
        {
            name: req.body.name,
            id: req.body.id
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book Created successfully')
    })
};