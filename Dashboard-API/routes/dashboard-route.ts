import express, { Request, Response } from "express";

/******************************* initializing *********************************/
const router = express.Router();
const {
  List,
  Add,
  Edit,
  Delete,
} = require("../controllers/dashboard-controller");

/************************************ Routes **********************************/
router.get("/", (request, response) => {
  getItemsList(request, response);
});
router.post("/", (request, response) => {
  addItem(request, response);
});
router.put("/:itemId", (request, response) => {
  editItem(request, response);
});
router.delete("/:itemId", (request, response) => {
  deleteItem(request, response);
});

async function getItemsList(request: Request, response: Response) {
  console.log("Get Dashboard list route called");

  await List().then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function addItem(request: any, response: any) {
  console.log("Add New Dashboard route called");
  console.log(request.body);
  await Add(request.body).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function editItem(request: any, response: any) {
  console.log("edit Dashboard route called");
  console.log(request.params);
  console.log(request.body);
  await Edit(request.params, request.body).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function deleteItem(request: any, response: any) {
  console.log("Delete Dashboard route called");
  console.log(request.params);
  await Delete(request.params).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

/************************************ Exports **********************************/
module.exports = router;
