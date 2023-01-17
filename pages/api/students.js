import students from "../../data/students.json"

export default  (req, res)=> {
    if (req.method == "GET") {
        return res.status(200).setHeader('Access-Control-Allow-Origin','*').json(students)
    }
}
