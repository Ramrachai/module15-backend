import { Student } from "../models/studentModel.js";

const addStudentController = async (request, response) => {
    try {
      if (
        !request.body.firstName ||
        !request.body.phone ||
        !request.body.email
      ) {
        return response.status(400).send({
          message: 'Send all required fields: Name, Email, Phone',
        });
      }
      const newStudent = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        gender: request.body.gender,
        dateOfBirth: request.body.dateOfBirth,
        nationality: request.body.nationality,
        address: request.body.address,
        phone: request.body.phone,
        admissionDate: request.body.admissionDate,
        courses: request.body.courses,
      };
  
      const student = await Student.create(newStudent);
      return response.status(201).send(student);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  }

  export default addStudentController;