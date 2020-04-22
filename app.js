const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "biology" },
  { id: 2, name: "maths" },
  { id: 3, name: "physics" },
  { id: 4, name: "english" },
  { id: 5, name: "agric" }
];

app.get("/", (req, res) => {
  res.send("Hello World!!");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course not Found");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
