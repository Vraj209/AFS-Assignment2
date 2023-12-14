const { getEmpolyeeData } = require("../db");

const generateEmployeeId = async () => {
  const instance = await getEmpolyeeData();
  const employees = await instance.find({}).toArray();
  const id = employees.length + 1;
  return id;
};

const getAllEmployees = async (filter) => {
  const instance = await getEmpolyeeData();
  if (filter) return instance.find({ EmployeeType: filter }).toArray();
  return instance.find({}).toArray();
};

const getEmployeeById = async (id) => {
  const instance = await getEmpolyeeData();
  return instance.findOne({ id });
};

const deleteEmployeeById = async (id) => {
  const instance = await getEmpolyeeData();
  return instance.deleteOne({ id });
};

const updateEmployeeById = async (emp) => {
  const instance = await getEmpolyeeData();
  emp.id = parseInt(emp.id, 10);
  // console.log(typeof emp.id); // Ensure id is treated as an integer
  const data = await instance.findOneAndUpdate({ id: emp.id }, { $set: emp });
  return data;
};

const createNewEmployee = async (emp) => {
  const instance = await getEmpolyeeData();
  emp.id = await generateEmployeeId();
  await instance.insertOne(emp);
  return emp;
};

module.exports = {
  createNewEmployee,
  getAllEmployees,
  generateEmployeeId,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
};
