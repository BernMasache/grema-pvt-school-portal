import subjects from "../../data/subjects.json"

export default  (req, res)=> {
    if (req.method == "GET") {
        return res.status(200).json(subjects)
    }
}
