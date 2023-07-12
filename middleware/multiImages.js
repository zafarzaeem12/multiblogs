const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Multi')
    },
    filename: function (req, file, cb) {
      const filename = file.originalname.split(' ').join('-')
      cb(null,`${filename}`)
    }
  })

const upload = multer({
    storage: storage,
}).fields( [{ name : 'images' , maxCount : 6} , { name : 'videos' , maxCount : 8}])

module.exports ={ upload }