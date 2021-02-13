const express = require('express');
const app = express()





// BodyParser || To GET data from form
app.use(express.urlencoded({ extended: false }));

const PORT =  process.env.PORT || 4000
app.listen(PORT, function(){
    console.log(`Server running on PORT: ${PORT}`);
})