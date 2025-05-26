import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = {
        ...req.body,
        _id: assignmentId,
    };
    const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, assignment);
    res.json(updatedAssignment);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const deleteIdx = assignmentsDao.deleteAssignment(assignmentId);
    if (deleteIdx === -1) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(200);
  });
}
