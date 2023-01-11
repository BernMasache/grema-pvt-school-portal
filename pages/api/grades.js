import grades from "../../data/grades.json"

export default  (req, res)=> {
    if (req.method == "GET") {
        return res.status(200).json(grades)
    }
}
