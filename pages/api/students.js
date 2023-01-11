import students from "../../data/students.json"

export default  (req, res)=> {
    if (req.method == "GET") {
        return res.status(200).json(students)
    }
}
